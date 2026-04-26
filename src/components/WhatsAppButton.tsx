import { useLanguage } from '../i18n';

export function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <a
      href="https://api.whatsapp.com/send?phone=972529566211"
      target="_blank"
      rel="noopener noreferrer"
      referrerPolicy="no-referrer-when-downgrade"
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label={t('whatsapp.chat')}>
      
      <img
        src="/1000134607.webp"
        alt={t('whatsapp.chat')}
        className="h-16 w-16 drop-shadow-lg"
        loading="lazy"
        decoding="async"
        width="64"
        height="64" />
      
      <span className="absolute right-full mr-3 bg-white text-[#1f2933] px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        {t('whatsapp.chat')}
      </span>
    </a>);

}