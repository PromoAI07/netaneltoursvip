import { AlertCircle, BadgeCheck, Building2, FileWarning, SearchX, ShieldCheck, Wallet, XCircle } from 'lucide-react';
import { useLanguage } from '../i18n';

const calendlyUrl = 'https://calendly.com/netaneltoursvip/new-meeting';

export function RelocationPackagesSection() {
  const { t } = useLanguage();

  const painPoints = [
    { icon: SearchX, text: t('packages.pain1') },
    { icon: Wallet, text: t('packages.pain2') },
    { icon: XCircle, text: t('packages.pain3') },
    { icon: FileWarning, text: t('packages.pain4') },
    { icon: AlertCircle, text: t('packages.pain5') },
  ];

  const packages = [
    {
      title: t('packages.pkg1Title'),
      price: t('packages.pkg1Price'),
      audience: t('packages.pkg1Audience'),
      features: [t('packages.pkg1F1'), t('packages.pkg1F2'), t('packages.pkg1F3'), t('packages.pkg1F4')],
      cta: t('packages.pkg1Cta'),
      highlighted: false,
      vip: false,
    },
    {
      title: t('packages.pkg2Title'),
      price: t('packages.pkg2Price'),
      audience: t('packages.pkg2Audience'),
      features: [t('packages.pkg2F1'), t('packages.pkg2F2'), t('packages.pkg2F3'), t('packages.pkg2F4'), t('packages.pkg2F5')],
      cta: t('packages.pkg2Cta'),
      highlighted: true,
      vip: false,
    },
    {
      title: t('packages.pkg3Title'),
      price: t('packages.pkg3Price'),
      audience: t('packages.pkg3Audience'),
      features: [t('packages.pkg3F1'), t('packages.pkg3F2'), t('packages.pkg3F3'), t('packages.pkg3F4'), t('packages.pkg3F5'), t('packages.pkg3F6'), t('packages.pkg3F7'), t('packages.pkg3F8')],
      closingLine: t('packages.pkg3Closing'),
      cta: t('packages.pkg3Cta'),
      highlighted: false,
      vip: true,
    },
  ];
  return (
    <section id="packages" className="bg-[#f5f5f7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1f2933]/15 bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#1f2933]">
            {t('packages.badge')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1f2933]">
            {t('packages.heading')}
            <span className="block text-[#122338] mt-1">{t('packages.subheading')}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {t('packages.body1')}
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {t('packages.body2')}
          </p>
          <p className="text-base sm:text-lg font-semibold text-[#1f2933] leading-relaxed">
            {t('packages.body3')}
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {painPoints.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="rounded-xl border border-red-100 bg-white px-4 py-4 flex items-start gap-3 shadow-sm"
            >
              <Icon className="h-5 w-5 mt-0.5 text-red-500 shrink-0" aria-hidden="true" />
              <p className="text-sm sm:text-[15px] font-semibold text-[#1f2933] leading-snug">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => {
            const isPopular = pkg.highlighted;
            const isVip = pkg.vip;

            return (
              <article
                key={pkg.title}
                className={`relative h-full rounded-2xl border p-6 sm:p-7 shadow-sm transition-all ${
                  isPopular
                    ? 'border-[#122338] bg-[#122338] text-white ring-2 ring-[#122338]/20 scale-[1.01]'
                    : isVip
                      ? 'border-[#a9853f]/35 bg-gradient-to-b from-[#141414] to-[#1e1a12] text-white'
                      : 'border-gray-200 bg-white text-[#1f2933]'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#122338] shadow-sm">
                    {t('packages.mostPopular')}
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold leading-tight">{pkg.title}</h3>
                    <p className={`mt-2 text-sm font-semibold ${isPopular || isVip ? 'text-gray-200' : 'text-gray-500'}`}>
                      {pkg.audience}
                    </p>
                  </div>

                  <p className="text-4xl font-extrabold tracking-tight">{pkg.price}</p>

                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <BadgeCheck className={`h-5 w-5 mt-0.5 shrink-0 ${isPopular || isVip ? 'text-emerald-300' : 'text-emerald-500'}`} />
                        <span className={`text-sm sm:text-[15px] leading-snug ${isPopular || isVip ? 'text-gray-100' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {pkg.closingLine && (
                    <div className="rounded-xl border border-[#a9853f]/40 bg-black/25 p-3">
                      <p className="text-sm leading-snug text-[#f4e6c3]">{pkg.closingLine}</p>
                    </div>
                  )}

                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm sm:text-base font-bold transition-colors ${
                      isPopular
                        ? 'bg-white text-[#122338] hover:bg-gray-100'
                        : isVip
                          ? 'bg-[#b89043] text-[#16110a] hover:bg-[#cda253]'
                          : 'bg-[#1f2933] text-white hover:bg-[#16202a]'
                    }`}
                  >
                    {pkg.cta}
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-6 sm:px-7 sm:py-7 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#13543a]">{t('packages.guaranteeTitle')}</h3>
          <p className="mt-3 text-sm sm:text-base font-semibold text-[#13543a]">
            {t('packages.guaranteeBody1')}
          </p>
          <p className="mt-1 text-sm sm:text-base text-[#176045]">
            {t('packages.guaranteeBody2')}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#13543a]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            {t('packages.guaranteeBadge')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelocationPackagesSection;
