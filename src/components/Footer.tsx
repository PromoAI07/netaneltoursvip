import { useMemo } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../i18n';
export function Footer() {
  const { t } = useLanguage();
  // Email is base64-encoded to prevent scraper harvesting
  const email = useMemo(() => atob('TmV0YW5lbFRvdXJzVmlwQGdtYWlsLmNvbQ=='), []);
  return (
    <footer className="bg-[#1f2933] text-white py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.brand')}</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center text-gray-400 hover:text-white transition-colors">
                
                <Mail className="h-5 w-5 mr-2" />
                <span>{t('footer.emailMe')}</span>
              </a>
              <div className="flex items-center text-gray-400">
                <span className="text-sm">{t('footer.available')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>{t('footer.copyright').replace('2026', String(new Date().getFullYear()))}</p>
        </div>
      </div>
    </footer>);

}