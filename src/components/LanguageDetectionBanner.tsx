import { useLanguage, useDetectedLanguage, LANGUAGES } from '../i18n';

export default function LanguageDetectionBanner() {
  const { t } = useLanguage();
  const { detectedLang, showBanner, dismiss, accept } = useDetectedLanguage();

  if (!showBanner) return null;

  const detected = LANGUAGES.find((l) => l.code === detectedLang);
  if (!detected) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-gray-700">
        {t('langBanner.message')}{' '}
        <strong>
          {detected.flag} {detected.nativeName}
        </strong>
        .
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={accept}
          className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
        >
          {t('langBanner.switchTo')} {detected.nativeName}
        </button>
        <button
          onClick={dismiss}
          className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-700 transition"
        >
          {t('langBanner.dismiss')}
        </button>
      </div>
    </div>
  );
}
