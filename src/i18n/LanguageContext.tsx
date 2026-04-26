import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Language } from './types';
import { LANGUAGES } from './types';
import { detectLanguage, saveLanguagePreference, getBrowserDetectedLang } from './geoDetect';
import { translations } from './translations';

const BANNER_DISMISSED_KEY = 'ntv_lang_banner_dismissed';
const STORAGE_KEY = 'ntv_lang';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const parts = path.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return path;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => detectLanguage());

  const currentConfig = useMemo(
    () => LANGUAGES.find((l) => l.code === lang)!,
    [lang],
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = currentConfig.dir;
  }, [lang, currentConfig.dir]);

  function setLang(newLang: Language) {
    setLangState(newLang);
    saveLanguagePreference(newLang);
  }

  function t(key: string): string {
    const dict = translations[lang] as unknown as Record<string, unknown>;
    const result = getNestedValue(dict, key);
    if (result !== key) return result;
    // Fall back to English
    const enDict = translations['en'] as unknown as Record<string, unknown>;
    return getNestedValue(enDict, key);
  }

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t, dir: currentConfig.dir }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang, currentConfig.dir],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

interface DetectedLanguageState {
  detectedLang: Language;
  showBanner: boolean;
  dismiss: () => void;
  accept: () => void;
}

export function useDetectedLanguage(): DetectedLanguageState {
  const { lang, setLang } = useLanguage();
  const detectedLang = useMemo(() => getBrowserDetectedLang(), []);

  const shouldShow =
    localStorage.getItem(BANNER_DISMISSED_KEY) !== 'true' &&
    localStorage.getItem(STORAGE_KEY) === null &&
    detectedLang !== 'en' &&
    detectedLang !== lang;

  const [showBanner, setShowBanner] = useState(shouldShow);

  function dismiss() {
    localStorage.setItem(BANNER_DISMISSED_KEY, 'true');
    setShowBanner(false);
  }

  function accept() {
    setLang(detectedLang);
    localStorage.setItem(BANNER_DISMISSED_KEY, 'true');
    setShowBanner(false);
  }

  return { detectedLang, showBanner, dismiss, accept };
}
