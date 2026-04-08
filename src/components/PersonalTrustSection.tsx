import React, { lazy } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Globe,
  Clock,
  Shield,
  User } from
'lucide-react';
export function PersonalTrustSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-sm lg:aspect-[3/4]">
            <img
             src="/ChatGPT_Image_Feb_21,_2026,_12_27_05_PM.webp"
              alt="Netanel traveling the world"
              className="w-full h-auto lg:h-full lg:object-cover lg:object-top"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 50vw"
              width="800"
              height="1067" />
            
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="md:text-4xl font-bold text-[#1f2933] mb-8 text-[28px]">
              Why Choose Us for Your Relocation to Asia
            </h2>

            <div className="space-y-4 text-[#4b5563] text-base md:text-lg leading-relaxed mb-8">
              <p>
                I'm Netanel, based right here in Asia. I don't just give advice from afar — I provide real, local support to help you relocate to Thailand or Vietnam without the hassle.
              </p>
              <p>
                Moving across the world can be overwhelming. From navigating confusing visa rules and finding the right neighborhood, to dealing with language barriers and local paperwork, the process is full of potential traps for foreigners.
              </p>
              <p>
                I help you skip the frustration. By working with me, you save time, save money, and avoid common scams that many newcomers fall for when relocating to Asia.
              </p>
              <p>
                Whether you need a simple consultation to plan your move, or full VIP concierge support when you land, I connect you with trusted local resources — lawyers, real estate agents, and services — ensuring your transition from tourist to resident is seamless.
              </p>
              <p className="font-medium text-[#1f2933]">
                Don't guess your way through relocating to Asia. Get expert help from someone who lives here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => document.getElementById('relocation-packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1f2933] text-white px-8 py-4 rounded font-semibold hover:bg-[#374151] transition-colors flex items-center justify-center">
                
                View Relocation Packages for Asia <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=972529566211"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer-when-downgrade"
                className="border border-gray-300 text-[#1f2933] px-8 py-4 rounded font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  17+ Years Travel Experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  Worldwide Destination Expertise
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  Personal VIP Concierge Support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  Real Traveler, Real Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}