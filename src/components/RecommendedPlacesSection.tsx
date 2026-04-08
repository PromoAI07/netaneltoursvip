import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
interface Place {
  city: string;
  name: string;
  type?: string;
  bookingLink: string;
}
interface CountryGroup {
  country: string;
  flag: string;
  places: Place[];
}
const countryGroups: CountryGroup[] = [
{
  country: 'Thailand',
  flag: '🇹🇭',
  places: [
  {
    city: 'Bangkok',
    name: 'Sri Ayuttaya Guesthouse',
    type: 'Guesthouse',
    bookingLink: 'https://booking.tp.st/8Em0T5Mu'
  }
  // Add more Thailand places below:
  // { city: 'Chiang Mai', name: 'Place Name Here', type: 'Hotel', bookingLink: 'https://booking.tp.st/...' },
  ]
},
{
  country: 'Vietnam',
  flag: '🇻🇳',
  places: [
  {
    city: 'Da Nang',
    name: 'LAM Apartment & Hotel Danang',
    type: 'Hotel',
    bookingLink: 'https://booking.tp.st/myA3K5Pl'
  },
  {
    city: 'Da Nang',
    name: 'Harmony Homestay',
    type: 'Homestay',
    bookingLink: 'https://booking.tp.st/E348Kq6j'
  },
  {
    city: 'Da Nang',
    name: 'Platinum Hotel Da Nang',
    type: 'Hotel',
    bookingLink: 'https://booking.tp.st/1pDg9KRT'
  }
  // Add more Vietnam places below:
  // { city: 'Hanoi', name: 'Place Name Here', type: 'Hostel', bookingLink: 'https://booking.tp.st/...' },
  ]
}
// Add more countries below:
// { country: 'Indonesia', flag: '🇮🇩', places: [{ city: 'Bali', name: 'Place Name Here', type: 'Villa', bookingLink: 'https://booking.tp.st/...' }] },
];
// Group places by city within a country
function groupByCity(places: Place[]): Record<string, Place[]> {
  return places.reduce(
    (acc, place) => {
      if (!acc[place.city]) acc[place.city] = [];
      acc[place.city].push(place);
      return acc;
    },
    {} as Record<string, Place[]>
  );
}
export function RecommendedPlacesSection() {
  return (
    <section
      id="recommended"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7] border-t border-gray-200">
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#1f2933]/8 border border-[#1f2933]/15 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#4b5563]">
              Personally Vetted
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2933] mb-3">
            Personally Recommended Places to Stay in Asia
          </h2>
          <p className="text-[#4b5563] text-base md:text-lg max-w-2xl mx-auto">
            Real places I've personally stayed at in Thailand and Vietnam and recommend. Updated as I
            explore new destinations — ideal for expats and relocators scouting accommodation.
          </p>
        </div>

        {/* Countries side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {countryGroups.map((group) => {
            const citiesMap = groupByCity(group.places);
            const cities = Object.keys(citiesMap);
            return (
              <div
                key={group.country}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                
                {/* Country Header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50/60">
                  <span className="text-2xl">{group.flag}</span>
                  <h3 className="text-lg font-bold text-[#1f2933]">
                    {group.country}
                  </h3>
                  <span className="ml-auto text-xs text-gray-600 font-medium">
                    {group.places.length}{' '}
                    {group.places.length === 1 ? 'place' : 'places'}
                  </span>
                </div>

                {/* Cities + Places */}
                <div className="p-4 space-y-5">
                  {cities.map((city) =>
                  <div key={city}>
                      {/* City label */}
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-3.5 w-3.5 text-[#4b5563]" />
                        <span className="text-xs font-bold text-[#4b5563] uppercase tracking-widest">
                          {city}
                        </span>
                        <div className="flex-1 h-px bg-gray-100" />
                      </div>

                      {/* Places in this city */}
                      <div className="space-y-2 pl-1">
                        {citiesMap[city].map((place, idx) =>
                      <div
                        key={idx}
                        className="border border-gray-100 rounded-xl px-4 py-3 flex items-center justify-between gap-3 hover:border-[#4b5563] hover:shadow-sm transition-all duration-200">
                        
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-[#1f2933] leading-snug truncate">
                                {place.name}
                              </p>
                              {place.type &&
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full inline-block mt-1">
                                  {place.type}
                                </span>
                          }
                            </div>
                            <a
                          href={place.bookingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="flex items-center gap-1.5 px-4 py-2 bg-[#1f2933] text-white text-xs font-semibold rounded-lg hover:bg-[#374151] transition-colors flex-shrink-0 whitespace-nowrap">
                          
                              Book <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                      )}
                      </div>
                    </div>
                  )}
                </div>
              </div>);

          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          All booking links are affiliate links — you pay the same price, and it
          helps support my travels. Thank you! 🙏
        </p>
      </div>
    </section>);

}