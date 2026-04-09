import React from 'react';
import {
  ArrowRight,
  DollarSign,
  Users,
  Globe,
  Zap,
  CheckCircle } from
'lucide-react';
export function InfluencerSection() {
  const perks = [
  {
    icon: DollarSign,
    text: 'Earn commissions on every booking you refer'
  },
  {
    icon: Globe,
    text: 'Promote top travel brands — flights, hotels, insurance & more'
  },
  {
    icon: Zap,
    text: 'Free to join, instant access, no experience needed'
  },
  {
    icon: Users,
    text: 'Join thousands of travel creators already earning'
  }];

  return (
    <section
      id="influencer"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1f2933] text-white">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Instagram-style Image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-2xl border border-white/10 hidden lg:block"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[2/3]">
              <picture>
                <source
                  srcSet="/ChatGPT_Image_Feb_21,_2026,_12_29_52_PM-400w.webp 400w, /ChatGPT_Image_Feb_21,_2026,_12_29_52_PM-800w.webp 800w, /ChatGPT_Image_Feb_21,_2026,_12_29_52_PM.webp 1024w"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  type="image/webp" />
                <img
                  src="/ChatGPT_Image_Feb_21,_2026,_12_29_52_PM.png"
                  alt="Travel influencer creating content"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width="1024"
                  height="1536"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format&fit=crop&fm=webp';
                  }} />
              </picture>
              
              {/* Instagram-style overlay badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      @netaneltoursvip
                    </p>
                    <p className="text-white/70 text-xs">
                      Travel Creator & Affiliate Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 w-fit">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-300">
                For Travel Influencers
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Turn Your Passion for Travel Into Real Income 💸
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Are you a travel creator, blogger, or influencer? Join the same
              affiliate program I use and start earning commissions every time
              your audience books flights, hotels, insurance, and more — through
              your own referral links.
            </p>

            {/* Perks */}
            <div className="space-y-4 mb-10">
              {perks.map((perk, index) =>
              <div key={index} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <perk.icon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300 text-base leading-snug pt-1.5">
                    {perk.text}
                  </p>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="https://www.travelpayouts.com/?marker=701463"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer-when-downgrade"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1f2933] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg w-full sm:w-auto">
              
              Join Now & Start Earning <ArrowRight className="h-5 w-5" />
            </a>

            <p className="mt-4 text-xs text-gray-500 text-center sm:text-left">
              Free to join · No minimum followers required · Instant approval
            </p>
          </div>
        </div>
      </div>
    </section>);

}