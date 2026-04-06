import React from 'react';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/netaneltoursvip/new-meeting';

interface Tier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for solo travelers who want a solid plan without the stress.',
    features: [
      'Personalized trip itinerary',
      'Flight & hotel recommendations',
      'WhatsApp support during planning',
      'Destination tips & local insights',
    ],
  },
  {
    name: 'Premium',
    price: '$999',
    description: 'The most popular choice — a complete travel plan built around you.',
    features: [
      'Everything in Starter',
      'Full booking assistance',
      'Visa guidance & travel insurance help',
      'Restaurant & experience recommendations',
      '24/7 WhatsApp support during your trip',
    ],
    highlighted: true,
  },
  {
    name: 'VIP Concierge',
    price: '$2,490',
    description: 'White-glove service for travelers who want everything handled.',
    features: [
      'Everything in Premium',
      'End-to-end booking management',
      'Priority 24/7 personal concierge',
      'Airport transfers & car rental coordination',
      'Emergency support & rebooking assistance',
      'Post-trip follow-up',
    ],
  },
];

export function PricingTiersSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2933] mb-4">
            Choose Your Travel Plan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Book a free call with me and let's build your perfect trip together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl overflow-hidden flex flex-col ${
                tier.highlighted
                  ? 'border-2 border-[#1f2933] shadow-xl scale-[1.02]'
                  : 'border border-gray-200 shadow-sm'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {tier.highlighted && (
                <div className="bg-[#1f2933] text-white text-center py-2 text-sm font-bold tracking-wide flex items-center justify-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  Most Popular
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1f2933] mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#1f2933]">
                    {tier.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">/ per trip</span>
                </div>
                <p className="text-gray-500 text-sm mb-8">{tier.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-lg font-bold text-center flex items-center justify-center transition-colors ${
                    tier.highlighted
                      ? 'bg-[#1f2933] text-white hover:bg-[#374151]'
                      : 'border-2 border-[#1f2933] text-[#1f2933] hover:bg-[#1f2933] hover:text-white'
                  }`}
                >
                  Book a Call <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
