import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { RelocationPackagesSection } from '../components/RelocationPackagesSection';
import { TrustSection } from '../components/TrustSection';
import { TravelerJourneySection } from '../components/TravelerJourneySection';
import { ToolsTeaser } from '../components/ToolsTeaser';
import { RecommendedPlacesSection } from '../components/RecommendedPlacesSection';
import { PersonalTrustSection } from '../components/PersonalTrustSection';
import { ConversionSection } from '../components/ConversionSection';
import { VisaAssistanceSection } from '../components/VisaAssistanceSection';
import { InfluencerSection } from '../components/InfluencerSection';
import { SocialMediaSection } from '../components/SocialMediaSection';
import { BlogSection } from '../components/BlogSection';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Footer } from '../components/Footer';
interface HomePageProps {
  onNavigate: (page: 'home' | 'blog' | 'article' | 'tools', id?: string) => void;
}
export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-[#1f2933]">
      <Navbar onNavigate={onNavigate} />
      <main>
        <HeroSection />
        <RelocationPackagesSection />
        <TrustSection />
        {/* Disclaimer */}
        <div className="bg-white border-t border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
            All bookings (flights, hotels, etc.) are done through trusted partners. You may be redirected to complete bookings and can always return to manage everything in one place.
          </p>
        </div>
        <TravelerJourneySection />
        <ToolsTeaser onNavigate={onNavigate as any} />
        <RecommendedPlacesSection />
        <PersonalTrustSection />
        <ConversionSection />
        <VisaAssistanceSection />
        <BlogSection onNavigate={onNavigate as any} />
        <InfluencerSection />
        <SocialMediaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>);

}