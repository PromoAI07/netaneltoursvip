import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface PackageTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: PackageTier[] = [
  {
    name: 'Basic Consultation',
    price: '$297',
    description: 'Get clear answers and a personalized action plan for your move to Asia.',
    features: [
      '60-minute strategy call',
      'Visa type recommendation',
      'City comparison (cost, lifestyle, safety)',
      'Housing search tips & red flags',
      'Written relocation action plan',
      'WhatsApp follow-up (48h)'
    ]
  },
  {
    name: 'Remote Relocation',
    price: '$890',
    description: 'Full remote support — from visa to apartment, handled before you land.',
    features: [
      'Everything in Basic',
      'Complete visa process guidance',
      'Apartment search & vetting',
      'Local SIM, bank & setup guide',
      'Scam prevention checklist',
      'WhatsApp support (30 days)',
      '3 planning sessions'
    ],
    highlighted: true
  },
  {
    name: 'VIP Concierge',
    price: '$2,500',
    description: 'White-glove relocation — I meet you on arrival and handle everything personally.',
    features: [
      'Everything in Remote Relocation',
      'Personal concierge on arrival',
      'In-person apartment tours',
      'Guided neighborhood walkthrough',
      'Local network introductions',
      'Airport pickup coordination',
      'Priority WhatsApp (60 days)',
      'Emergency 24/7 support line'
    ]
  }
];

export function RelocationPackages() {
  return (
    <section id="relocate" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1f2933]/8 border border-[#1f2933]/15 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#4b5563]">
              Relocation Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2933] mb-4">
            Choose Your Relocation Package
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From a quick consultation to a full white-glove move — pick the
            level of support that fits your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg ${
                tier.highlighted
                  ? 'border-[#1f2933] shadow-md scale-[1.02]'
                  : 'border-gray-200'
              }`}
            >
              {tier.highlighted && (
                <div className="bg-[#1f2933] text-white text-center py-2 text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1f2933] mb-1">
                  {tier.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{tier.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-[#1f2933]">
                    {tier.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">/ package</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/netaneltoursvip/new-meetin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-lg font-bold text-center flex items-center justify-center transition-colors ${
                    tier.highlighted
                      ? 'bg-[#1f2933] text-white hover:bg-[#374151]'
                      : 'border border-gray-300 text-[#1f2933] hover:bg-[#1f2933] hover:text-white'
                  }`}
                >
                  Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
