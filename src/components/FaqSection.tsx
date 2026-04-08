import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How do I relocate to Thailand as a foreigner?',
    answer:
      'To relocate to Thailand as a foreigner, you typically start with a tourist or non-immigrant visa, then explore long-term options such as the Thailand Elite Visa, retirement visa, or education visa. Working with a local relocation expert helps you navigate the paperwork, find trustworthy housing, and avoid common mistakes.',
  },
  {
    question: 'What is the cost of living in Vietnam for expats?',
    answer:
      'Expats in Vietnam can live comfortably for $800–$1,500 per month depending on the city. Da Nang and Hanoi are more affordable than Ho Chi Minh City. Costs typically break down as: rent ($300–$700), food ($200–$400), transport ($50–$100), and leisure. The overall cost of living in Vietnam remains one of the lowest in Asia.',
  },
  {
    question: 'Can I get visa help for Thailand or Vietnam?',
    answer:
      'Yes. We provide visa guidance for Thailand and Vietnam — including tourist visas, e-visas, extensions, and border run tips. We direct you to the correct official channels and trusted resources so you never get stuck at immigration.',
  },
  {
    question: 'What relocation services do you offer for Asia?',
    answer:
      'We offer three tiers of Asia relocation services: Basic Consultation (from ~$297) for a focused 1-on-1 strategy call, Remote Relocation (~$890–$1,490) for end-to-end guidance including housing and 30 days of WhatsApp support, and VIP Concierge (~$2,500+) for full hands-on local execution with on-ground presence in Thailand or Vietnam.',
  },
  {
    question: 'Is Thailand or Vietnam better for digital nomads?',
    answer:
      'Both are excellent choices. Thailand (especially Chiang Mai and Bangkok) has a mature digital nomad infrastructure with co-working spaces, reliable internet, and a large expat community. Vietnam (Da Nang and Ho Chi Minh City) offers slightly lower costs and a vibrant local culture. The best choice depends on your lifestyle, budget, and visa situation — we can help you decide.',
  },
  {
    question: 'How long does it take to relocate to Asia?',
    answer:
      'With proper planning, you can complete an initial relocation to Thailand or Vietnam in 4–8 weeks. This includes visa arrangement, finding accommodation, setting up a local bank account, and getting oriented. Our relocation packages are designed to compress this timeline and remove the guesswork.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2933] mb-4">
            Frequently Asked Questions About Relocating to Asia
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Common questions from foreigners planning to move to Thailand or Vietnam.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#1f2933] text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
