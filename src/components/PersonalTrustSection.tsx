import {
  ArrowRight,
  MessageCircle,
  Globe,
  Clock,
  Shield,
  User } from
'lucide-react';
import { useLanguage } from '../i18n';
export function PersonalTrustSection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-sm lg:aspect-[2/3]">
            <picture>
              <source
                srcSet="/ChatGPT_Image_Feb_21,_2026,_12_27_05_PM-400w.webp 400w, /ChatGPT_Image_Feb_21,_2026,_12_27_05_PM-800w.webp 800w, /ChatGPT_Image_Feb_21,_2026,_12_27_05_PM.webp 1024w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                type="image/webp" />
              <img
               src="/ChatGPT_Image_Feb_21,_2026,_12_27_05_PM.png"
                alt="Netanel traveling the world"
                className="w-full h-auto lg:h-full lg:object-cover lg:object-top"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
                width="1024"
                height="1536" />
            </picture>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="md:text-4xl font-bold text-[#1f2933] mb-8 text-[28px]">
              {t('trust.heading')}
            </h2>

            <div className="space-y-4 text-[#4b5563] text-base md:text-lg leading-relaxed mb-8">
              <p>
                {t('trust.p1')}
              </p>
              <p>
                {t('trust.p2')}
              </p>
              <p>
                {t('trust.p3')}
              </p>
              <p>
                {t('trust.p4')}
              </p>
              <p className="font-medium text-[#1f2933]">
                {t('trust.p5')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => document.getElementById('relocation-packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1f2933] text-white px-8 py-4 rounded font-semibold hover:bg-[#374151] transition-colors flex items-center justify-center">
                
                {t('trust.ctaPrimary')} <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=972529566211"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer-when-downgrade"
                className="border border-gray-300 text-[#1f2933] px-8 py-4 rounded font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('trust.ctaWhatsApp')}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  {t('trust.stat1')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  {t('trust.stat2')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  {t('trust.stat3')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  {t('trust.stat4')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}