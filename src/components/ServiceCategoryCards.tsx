import React from 'react';
import {
  Hotel,
  Plane,
  Shield,
  Ticket,
  Car,
  Wrench,
  ArrowRight,
  HeartPulse,
  Luggage,
  Compass,
  Smartphone } from
'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ElementType;
  imageUrl: string;
  imageAlt: string;
  link?: string;
}
function ServiceCard({
  title,
  description,
  buttonText,
  icon: Icon,
  imageUrl,
  imageAlt,
  link
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#4b5563] transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
      {/* Image */}
      <div className="aspect-[3/2] w-full overflow-hidden relative bg-gray-100">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://picsum.photos/800/533?grayscale';
          }} />
        
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
          <Icon className="h-5 w-5 text-[#4b5563]" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1f2933] mb-2">{title}</h3>
        <p className="text-gray-500 mb-6 text-sm">{description}</p>
        {link ?
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full py-3 px-4 border border-gray-300 rounded text-[#1f2933] font-medium hover:bg-[#1f2933] hover:text-white transition-colors flex items-center justify-center group-hover:border-[#1f2933]">
          
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </a> :

        <button className="w-full py-3 px-4 border border-gray-300 rounded text-[#1f2933] font-medium hover:bg-[#1f2933] hover:text-white transition-colors flex items-center justify-center group-hover:border-[#1f2933]">
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        }
      </div>
    </div>);

}
export function ServiceCategoryCards() {
  const services = [
  {
    title: 'Hotels & Stays',
    description: 'Luxury hotels and resorts worldwide with exclusive perks.',
    buttonText: 'Book Stays',
    icon: Hotel,
    link: 'https://booking.tp.st/fE9TPCct',
    imageUrl:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Luxury resort with infinity pool'
  },
  {
    title: 'Flights',
    description:
    'Best deals on business and first-class flights to any destination.',
    buttonText: 'Search Flights',
    icon: Plane,
    link: 'https://trip.tp.st/5YaW4BnM',
    imageUrl:
    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Airplane wing view above the clouds'
  },
  {
    title: 'Travel Insurance',
    description: 'Medical coverage and travel protection for peace of mind.',
    buttonText: 'Get Insurance',
    icon: HeartPulse,
    link: 'https://ektatraveling.tp.st/nODljNJv',
    imageUrl:
    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Medical travel insurance and health protection'
  },
  {
    title: 'Tickets & Attractions',
    description:
    'Theme parks, guided tours, and exclusive local experiences.',
    buttonText: 'Explore Tickets',
    icon: Ticket,
    link: 'https://tiqets.tp.st/JAQlFtfb',
    imageUrl:
    'https://images.unsplash.com/photo-1536768139911-e290a59011e4?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'People enjoying a theme park roller coaster'
  },
  {
    title: 'Rent a Car Anywhere',
    description: 'Affordable car rentals worldwide for total travel freedom.',
    buttonText: 'Rent a Car',
    icon: Car,
    link: 'https://discovercars.tp.st/CY3Ty5Yz',
    imageUrl:
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Car rental on a scenic road'
  },
  {
    title: 'Easy & Cheap Transfers Worldwide',
    description:
    'Affordable airport transfers and transportation anywhere in the world.',
    buttonText: 'Book Transfer',
    icon: Wrench,
    link: 'https://holidaytaxis.tp.st/PumDgPOV',
    imageUrl:
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Airport taxi transfer service'
  },
  {
    title: 'Flight & Hotel Deals',
    description: 'Bundled flight and hotel packages at unbeatable prices.',
    buttonText: 'View Deals',
    icon: Luggage,
    link: 'https://trip.tp.st/n4DUvkUj',
    imageUrl:
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Tropical vacation flight and hotel deal'
  },
  {
    title: 'Get Your Guide Anywhere',
    description:
    'Local guides, walking tours, and unique experiences worldwide.',
    buttonText: 'Find a Guide',
    icon: Compass,
    link: 'https://getyourguide.tp.st/UAhQqSZ7',
    imageUrl:
    'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Travelers exploring with a local guide'
  },
  {
    title: 'eSIM Card Deals',
    description: 'Stay connected anywhere with affordable eSIM data plans.',
    buttonText: 'Get eSIM',
    icon: Smartphone,
    link: 'https://airalo.tp.st/sbw9crL4',
    imageUrl:
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Smartphone with eSIM for travel connectivity'
  }];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2933] mb-4">
            Travel & Relocation Booking Tools for Asia
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Everything you need to move to Thailand or Vietnam — flights, accommodation, insurance, car hire, and local experiences. All trusted partner links in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
            icon={service.icon}
            link={service.link}
            imageUrl={service.imageUrl}
            imageAlt={service.imageAlt} />

          )}
        </div>
      </div>
    </section>);

}