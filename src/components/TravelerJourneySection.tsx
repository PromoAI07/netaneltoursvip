import { useEffect } from 'react';
import { useLanguage } from '../i18n';
import {
  Hotel,
  Plane,
  Shield,
  Ticket,
  Car,
  HeartPulse,
  Luggage,
  Smartphone,
  ChevronDown,
  ArrowRight } from
'lucide-react';
// Helper: builds a responsive srcset for local /path/to/image.webp files
function buildWebpSrcSet(imageUrl: string): string | undefined {
  if (!imageUrl.startsWith('/') || !imageUrl.endsWith('.webp')) return undefined;
  const base = imageUrl.slice(0, -5); // strip .webp
  return `${base}-400w.webp 400w, ${base}-800w.webp 800w, ${imageUrl} 1536w`;
}
function toPngFallback(imageUrl: string): string {
  if (imageUrl.startsWith('/') && imageUrl.endsWith('.webp')) {
    return imageUrl.slice(0, -5) + '.png';
  }
  return imageUrl;
}
// --- Reusable Card Components ---
interface BaseCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}
interface StandardCardProps extends BaseCardProps {
  buttonText: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
}
function StandardCard({
  step,
  title,
  description,
  buttonText,
  icon: Icon,
  link,
  imageUrl,
  imageAlt
}: StandardCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#4b5563] transition-all duration-300 hover:scale-[1.02] hover:shadow-md h-full flex flex-col">
      <div className="aspect-[3/2] w-full overflow-hidden relative bg-gray-100">
        <picture>
          {buildWebpSrcSet(imageUrl) && (
            <source
              srcSet={buildWebpSrcSet(imageUrl)}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
              type="image/webp" />
          )}
          <img
            src={toPngFallback(imageUrl)}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
            width="1536"
            height="1024"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://picsum.photos/800/533?grayscale';
            }} />
        </picture>
        
        {/* Step Badge */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-[#1f2933] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-white z-10">
          {step}
        </div>
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm z-10">
          <Icon className="h-5 w-5 text-[#4b5563]" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#1f2933] mb-2">{title}</h3>
        <p className="text-gray-500 mb-6 text-sm flex-grow">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 border border-gray-300 rounded text-[#1f2933] font-medium hover:bg-[#1f2933] hover:text-white transition-colors flex items-center justify-center group-hover:border-[#1f2933]">
          
          {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>);

}
interface DualActionCardProps extends BaseCardProps {
  buttons: {
    text: string;
    link: string;
  }[];
  imageUrl: string;
  imageAlt: string;
}
function DualActionCard({
  step,
  title,
  description,
  icon: Icon,
  buttons,
  imageUrl,
  imageAlt
}: DualActionCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#4b5563] transition-all duration-300 hover:scale-[1.02] hover:shadow-md h-full flex flex-col">
      <div className="aspect-[3/2] w-full overflow-hidden relative bg-gray-100">
        <picture>
          {buildWebpSrcSet(imageUrl) && (
            <source
              srcSet={buildWebpSrcSet(imageUrl)}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
              type="image/webp" />
          )}
          <img
            src={toPngFallback(imageUrl)}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
            width="1536"
            height="1024"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://picsum.photos/800/533?grayscale';
            }} />
        </picture>
        
        <div className="absolute top-4 left-4 w-10 h-10 bg-[#1f2933] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-white z-10">
          {step}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm z-10">
          <Icon className="h-5 w-5 text-[#4b5563]" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#1f2933] mb-2">{title}</h3>
        <p className="text-gray-500 mb-6 text-sm flex-grow">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {buttons.map((btn, idx) =>
          <a
            key={idx}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 border border-gray-300 rounded text-[#1f2933] font-medium hover:bg-[#1f2933] hover:text-white transition-colors flex items-center justify-center text-sm text-center group-hover:border-[#1f2933]">
            
              {btn.text}
            </a>
          )}
        </div>
      </div>
    </div>);

}
interface IconCardProps extends BaseCardProps {
  buttonText: string;
  onAction: () => void;
}
function IconCard({
  step,
  title,
  description,
  buttonText,
  icon: Icon,
  onAction
}: IconCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#4b5563] transition-all duration-300 hover:scale-[1.02] hover:shadow-md h-full flex flex-col">
      <div className="aspect-[3/2] w-full relative bg-[#f5f5f7] flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <Icon className="h-12 w-12 text-[#1f2933]" />
        </div>
        <div className="absolute top-4 left-4 w-10 h-10 bg-[#1f2933] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-white z-10">
          {step}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#1f2933] mb-2">{title}</h3>
        <p className="text-gray-500 mb-6 text-sm flex-grow">{description}</p>
        <button
          onClick={onAction}
          className="w-full py-3 px-4 border border-gray-300 rounded text-[#1f2933] font-medium hover:bg-[#1f2933] hover:text-white transition-colors flex items-center justify-center group-hover:border-[#1f2933]">
          
          {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>);

}
// --- Main Section Component ---
export function TravelerJourneySection() {
  const { t } = useLanguage();
  // Keep the event listener so navbar links still scroll here
  useEffect(() => {
    const handleOpenPhase = () => {
      const element = document.getElementById('services');
      if (element) {
        const navbarHeight = 80;
        const top =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    };
    window.addEventListener('openTravelerPhase', handleOpenPhase);
    return () =>
    window.removeEventListener('openTravelerPhase', handleOpenPhase);
  }, []);
  const scrollToVisa = () => {
    const element = document.getElementById('visa-help');
    if (element) {
      const navbarHeight = 80;
      const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2933] mb-6">
            {t('journey.heading')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-4">
            {t('journey.subheading')}
          </p>
          <div className="inline-block bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full font-medium">
            {t('journey.note')}
          </div>
        </div>

        <div className="space-y-12">
          {/* Row 1: Steps 1, 2, 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StandardCard
              step={1}
              title={t('journey.flightsTitle')}
              description={t('journey.flightsDesc')}
              buttonText={t('journey.flightsBtn')}
              icon={Plane}
              link="https://trip.tp.st/By8d4T6V"
              imageUrl="/file_00000000c43c71faaed3da2abf2efc90.webp"
              imageAlt="Booking Flights Anywhere in the World with Netanel" />
            
            <StandardCard
              step={2}
              title={t('journey.hotelsTitle')}
              description={t('journey.hotelsDesc')}
              buttonText={t('journey.hotelsBtn')}
              icon={Hotel}
              link="https://booking.tp.st/fE9TPCct"
              imageUrl="/ChatGPT_Image_Feb_21,_2026,_11_38_15_AM.webp"
              imageAlt="Hotels and Stays by Booking.com with Netanel" />
            
            <StandardCard
              step={3}
              title={t('journey.dealsTitle')}
              description={t('journey.dealsDesc')}
              buttonText={t('journey.dealsBtn')}
              icon={Luggage}
              link="https://trip.tp.st/bHOWSgz6"
              imageUrl="/ChatGPT_Image_Feb_21,_2026,_11_35_49_AM.webp"
              imageAlt="Flight and Hotel Deals with Netanel" />
            
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center opacity-30">
            <ChevronDown className="h-10 w-10 text-[#1f2933] animate-bounce" />
          </div>

          {/* Row 2: Steps 4, 5, 6 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard
              step={4}
              title={t('journey.visaTitle')}
              description={t('journey.visaDesc')}
              buttonText={t('journey.visaBtn')}
              icon={Shield}
              onAction={scrollToVisa} />
            
            <StandardCard
              step={5}
              title={t('journey.insuranceTitle')}
              description={t('journey.insuranceDesc')}
              buttonText={t('journey.insuranceBtn')}
              icon={HeartPulse}
              link="https://ektatraveling.tp.st/nODljNJv"
              imageUrl="/ChatGPT_Image_Feb_21,_2026,_12_04_42_PM.webp"
              imageAlt="Travel Insurance Worldwide Coverage" />
            
            <DualActionCard
              step={6}
              title={t('journey.rideTitle')}
              description={t('journey.rideDesc')}
              icon={Car}
              imageUrl="/file_000000004d2471faa18d09ce93a2c86d.webp"
              imageAlt="Rental Cars and Transfers"
              buttons={[
              {
                text: t('journey.rentCar'),
                link: 'https://discovercars.tp.st/CY3Ty5Yz'
              },
              {
                text: t('journey.bookTransfer'),
                link: 'https://holidaytaxis.tp.st/PumDgPOV'
              }]
              } />
            
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center opacity-30">
            <ChevronDown className="h-10 w-10 text-[#1f2933] animate-bounce" />
          </div>

          {/* Row 3: Steps 7, 8 (Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <DualActionCard
              step={7}
              title={t('journey.experiencesTitle')}
              description={t('journey.experiencesDesc')}
              icon={Ticket}
              imageUrl="/ChatGPT_Image_Feb_21,_2026,_11_50_43_AM.webp"
              imageAlt="Tickets and Attractions"
              buttons={[
              {
                text: t('journey.exploreTickets'),
                link: 'https://tiqets.tp.st/JAQlFtfb'
              },
              {
                text: t('journey.findGuide'),
                link: 'https://getyourguide.tp.st/UAhQqSZ7'
              }]
              } />
            
            <StandardCard
              step={8}
              title={t('journey.esimTitle')}
              description={t('journey.esimDesc')}
              buttonText={t('journey.esimBtn')}
              icon={Smartphone}
              link="https://airalo.tp.st/sbw9crL4"
              imageUrl="/ChatGPT_Image_Feb_21,_2026,_11_59_00_AM.webp"
              imageAlt="eSIM Card Deals by Airalo" />
            
          </div>
        </div>
      </div>
    </section>);

}