import React from 'react';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/netaneltoursvip/new-meeting';

interface PlanProps {
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  popular?: boolean;
}

function PlanCard({ name, tagline, price, priceSuffix, features, popular }: PlanProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        popular
          ? 'bg-[#1f2933] text-white border-[#1f2933] shadow-2xl'
          : 'bg-white text-[#1f2933] border-gray-200 shadow-sm'
      }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white text-[#1f2933] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md border border-gray-100">
          <Star className="h-3.5 w-3.5 fill-current" />
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-1 ${popular ? 'text-white' : 'text-[#1f2933]'}`}>
          {name}
        </h3>
        <p className={`text-sm ${popular ? 'text-gray-300' : 'text-gray-500'}`}>{tagline}</p>
      </div>

      <div className="mb-8">
        <span className={`text-4xl font-extrabold ${popular ? 'text-white' : 'text-[#1f2933]'}`}>
          {price}
        </span>
        {priceSuffix && (
          <span className={`ml-2 text-lg ${popular ? 'text-gray-400' : 'text-gray-400'}`}>
            {priceSuffix}
          </span>
        )}
      </div>

      <ul className="space-y-3 mb-10 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle
              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${popular ? 'text-green-400' : 'text-green-500'}`}
            />
            <span className={`text-sm leading-snug ${popular ? 'text-gray-200' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={CALENDLY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-base transition-colors ${
          popular
            ? 'bg-white text-[#1f2933] hover:bg-gray-100'
            : 'bg-white text-[#1f2933] border-2 border-[#1f2933] hover:bg-[#1f2933] hover:text-white'
        }`}>
        Get Started <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

export function OffersSection() {
  const plans: PlanProps[] = [
    {
      name: 'Basic Consultation',
      tagline: 'Actionable advice & strategy',
      price: '~$297',
      features: [
        '1-on-1 strategy call',
        'Visa options & housing overview',
        'Custom step-by-step action plan',
        'Answers to all your pressing questions',
      ],
    },
    {
      name: 'Remote Relocation',
      tagline: 'End-to-end guidance & support',
      price: '~$890',
      priceSuffix: '– $1,490',
      features: [
        'Everything in Basic',
        'Housing hunt assistance & lease review',
        'Dedicated WhatsApp support for 30 days',
        'Introductions to trusted local lawyers & agents',
      ],
      popular: true,
    },
    {
      name: 'VIP Concierge',
      tagline: 'Full hands-on local execution',
      price: '~$2,500+',
      features: [
        'Everything in Remote Relocation',
        'On-ground assistance upon arrival',
        'Airport pickup & temporary housing setup',
        'Personal accompaniment to view properties & sign leases',
      ],
    },
  ];

  return (
    <section id="offers" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2933] mb-4">
            Relocate with Confidence
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the right level of support to make your move to Asia smooth, safe, and
            stress-free. I provide real on-ground expertise to help you settle in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
