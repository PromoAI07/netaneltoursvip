import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

export function RelocationPackagesSection() {
  return (
    <section id="relocation-packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2933] mb-6">
            Asia Relocation Packages
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore our Asia relocation packages and choose the right level of support for your move. Whether you are relocating to Thailand or Vietnam, our expert relocation services in Asia give you the on-ground guidance you need to settle in with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Basic Package */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[#1f2933] mb-2">Basic Consultation</h3>
            <div className="text-gray-500 mb-6 text-sm">Actionable advice & strategy</div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-[#1f2933]">~$297</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">1-on-1 strategy call</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Visa options & housing overview</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Custom step-by-step action plan</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Answers to all your pressing questions</span>
              </li>
            </ul>
            <a
              href="https://calendly.com/netaneltoursvip/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border border-[#1f2933] rounded text-[#1f2933] font-bold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Middle Tier (Most Popular) */}
          <div className="bg-[#1f2933] border border-[#1f2933] rounded-2xl p-8 shadow-xl transform lg:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#1f2933] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center shadow-md">
              <Star className="w-3 h-3 mr-1 fill-current" /> Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Remote Relocation</h3>
            <div className="text-gray-300 mb-6 text-sm">End-to-end guidance & support</div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">~$890</span>
              <span className="text-gray-400 text-lg"> to $1,490</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Everything in Basic</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Housing hunt assistance & lease review</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Dedicated WhatsApp support for 30 days</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Introductions to trusted local lawyers & agents</span>
              </li>
            </ul>
            <a
              href="https://calendly.com/netaneltoursvip/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-white rounded text-[#1f2933] font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* VIP Package */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[#1f2933] mb-2">VIP Concierge</h3>
            <div className="text-gray-500 mb-6 text-sm">Full hands-on local execution</div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-[#1f2933]">~$2,500+</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Everything in Remote Relocation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">On-ground assistance upon arrival</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Airport pickup & temporary housing setup</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Personal accompaniment to view properties & sign leases</span>
              </li>
            </ul>
            <a
              href="https://calendly.com/netaneltoursvip/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border border-[#1f2933] rounded text-[#1f2933] font-bold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
