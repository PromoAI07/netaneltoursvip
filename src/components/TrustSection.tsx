import React from 'react';
import { ShieldCheck } from 'lucide-react';

const reasons = [
  'Based in Asia with real local knowledge',
  'Saves clients time, money, and costly mistakes',
  'Trusted network for housing and services',
  'Avoids scams and overpriced deals',
  'Ongoing support when things go wrong',
];

export function TrustSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2933] mb-10">
          Why People Work with Me
        </h2>

        <ul className="space-y-4 text-left inline-block">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
              <ShieldCheck className="h-6 w-6 flex-shrink-0 text-emerald-500 mt-0.5" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
