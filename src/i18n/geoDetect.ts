import type { Language } from './types';

const STORAGE_KEY = 'ntv_lang';
const VALID_LANGS: Language[] = ['en', 'vi', 'ru', 'es', 'ar', 'zh'];

function isValidLang(code: string): code is Language {
  return VALID_LANGS.includes(code as Language);
}

function mapBrowserLang(browserLang: string): Language {
  const base = browserLang.split('-')[0].toLowerCase();
  if (base === 'vi') return 'vi';
  if (['ru', 'uk', 'be', 'kk'].includes(base)) return 'ru';
  if (base === 'es') return 'es';
  if (base === 'ar') return 'ar';
  if (base === 'zh') return 'zh';
  return 'en';
}

export function getBrowserDetectedLang(): Language {
  const browserLang = navigator.language || '';
  return mapBrowserLang(browserLang);
}

export function detectLanguage(): Language {
  // 1. Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && isValidLang(stored)) return stored;

  // 2. Check URL ?lang= param
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && isValidLang(urlLang)) return urlLang;

  // 3. Browser language
  return getBrowserDetectedLang();
}

export function saveLanguagePreference(lang: Language): void {
  localStorage.setItem(STORAGE_KEY, lang);

  // Update URL param without page reload
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
}
