import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const packages = [
  {
    title: 'Start Smart',
    subtitle: 'Basic Consultation',
    price: '$297',
    features: [
      '1:1 relocation strategy call (60–90 min)',
      'Visa + entry guidance (Thailand / Vietnam)',
      'Best areas to live based on your lifestyle',
      'Real cost breakdown (rent, living, hidden costs)',
      'Avoid mistakes checklist',
      'Personalized action plan',
    ],
    footer: 'Perfect if: you want clarity before making the move',
    buttonText: 'Book Your Call',
    highlighted: false,
  },
  {
    title: 'Done With You',
    subtitle: 'Remote Support',
    price: '$890 – $1,490',
    features: [
      'Everything in Basic',
      'Personalized apartment shortlist',
      'Trusted agents + landlord connections',
      'Virtual tours (if available)',
      'Negotiation guidance',
      'SIM card, transport, banking setup guidance',
      'WhatsApp support during your move',
    ],
    footer: 'Perfect if: you want guidance + real support remotely',
    buttonText: 'Get Guided Step-by-Step',
    highlighted: true,
  },
  {
    title: 'VIP Relocation',
    subtitle: 'Full Concierge',
    price: 'From $2,500 + expenses',
    features: [
      'Everything in previous tiers',
      'Physical apartment scouting (on-location)',
      'Video walkthroughs + honest feedback',
      'In-person negotiation for best deals',
      'Airport pickup coordination',
      'Move-in setup (contracts, utilities, deposits)',
      'Local setup support (SIM, transport, essentials)',
      'Priority access + emergency help',
    ],
    footer: 'Perfect if: you want a smooth, stress-free relocation',
    buttonText: 'Apply for VIP Relocation',
    highlighted: false,
  },
];

export function RelocationPackagesSection() {
  return (
    <section id="relocation-packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1f2933] mb-4">
          3 Ways to Move to Asia with Me
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Choose the level of support that fits your situation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col rounded-2xl p-6 sm:p-8 transition-shadow ${
                pkg.highlighted
                  ? 'bg-[#1f2933] text-white shadow-2xl ring-2 ring-white/20 scale-[1.02] md:scale-105'
                  : 'bg-white text-[#1f2933] shadow-lg hover:shadow-xl'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-[#1f2933] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  {pkg.title}
                </h3>
                <p className={`text-sm ${pkg.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                  {pkg.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold">{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        pkg.highlighted ? 'text-amber-400' : 'text-emerald-500'
                      }`}
                    />
                    <span className={pkg.highlighted ? 'text-white/90' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`text-xs italic mb-6 ${
                  pkg.highlighted ? 'text-white/60' : 'text-gray-400'
                }`}
              >
                {pkg.footer}
              </p>

              <button
                className={`w-full py-3.5 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2 ${
                  pkg.highlighted
                    ? 'bg-amber-400 text-[#1f2933] hover:bg-amber-300'
                    : 'bg-[#1f2933] text-white hover:bg-[#2d3a47]'
                }`}
              >
                {pkg.buttonText}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
