import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function ConversionSection() {
  return (
    <section
      id="plan-trip"
      className="relative py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
    >
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70&fm=webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px) brightness(0.55)',
          transform: 'scale(1.08)',
        }}
        aria-hidden="true"
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <div className="inline-block bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-10 shadow-xl border border-white/10">
          <Calendar className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Start Your Relocation to Asia Today
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Book a 1-on-1 consultation to discuss your move to Thailand or Vietnam. Get expert advice, avoid expensive mistakes, and let's map out your relocation to Asia.
          </p>
          <a
            href="https://calendly.com/netaneltoursvip/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-[#1f2933] font-bold py-4 px-8 rounded-md hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Help Moving to Thailand or Vietnam <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}