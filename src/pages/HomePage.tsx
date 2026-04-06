import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { RelocationPackagesSection } from '../components/RelocationPackagesSection';
import { PersonalTrustSection } from '../components/PersonalTrustSection';
import { TravelerJourneySection } from '../components/TravelerJourneySection';
import { ToolsTeaser } from '../components/ToolsTeaser';
import { RecommendedPlacesSection } from '../components/RecommendedPlacesSection';
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
        <PersonalTrustSection />
        <TravelerJourneySection />
        <ToolsTeaser onNavigate={onNavigate as any} />
        <RecommendedPlacesSection />
        <ConversionSection />
        <VisaAssistanceSection />
        <BlogSection onNavigate={onNavigate as any} />
        <InfluencerSection />
        <SocialMediaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}