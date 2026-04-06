import React from 'react';
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
              src="/ChatGPT_Image_Feb_21,_2026,_12_27_05_PM.png"
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
              Not Just Online Advice — Real Help, On the Ground
            </h2>

            <div className="space-y-4 text-[#4b5563] text-base md:text-lg leading-relaxed mb-8">
              <p>
                I'm Netanel. I live in Southeast Asia — Thailand and Vietnam
                are my home base. I've spent 17+ years navigating visas,
                finding apartments, setting up bank accounts, and helping
                people avoid the costly mistakes that come with relocating
                to a new country.
              </p>
              <p>
                Most "relocation advice" online is outdated, vague, or
                written by people who've never actually lived here. I do
                this every day — on the ground, in person, with real
                connections to landlords, visa agents, and local services.
              </p>
              <p>
                I've helped people save thousands by steering them away from
                scams, overpriced housing, and bad neighborhoods. Whether
                you're planning a permanent move or testing the waters for a
                few months, I'll make sure you land smoothly.
              </p>
              <p className="font-medium text-[#1f2933]">
                Stop Googling. Start living in Asia — with someone who's
                already done it.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => {
                  document.getElementById('relocate')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#1f2933] text-white px-8 py-4 rounded font-semibold hover:bg-[#374151] transition-colors flex items-center justify-center">

                See Relocation Packages <ArrowRight className="ml-2 h-5 w-5" />
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
                  <Globe className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  Based in Southeast Asia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  17+ Years Living Abroad
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  Visa, Housing & Setup Help
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-[#4b5563]" />
                </div>
                <span className="text-sm font-medium text-[#1f2933]">
                  Real On-Ground Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}