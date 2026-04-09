import { useEffect, useState, useRef } from 'react';
import { Search, Globe, X } from 'lucide-react';
import { countryApps, CountryApps } from '../data/countryApps';
export function TravelToolboxSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryApps | null>(
    null
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Filter countries based on search
  const filteredCountries = countryApps.filter((country) =>
  country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node))
      {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const handleSelectCountry = (country: CountryApps) => {
    setSelectedCountry(country);
    setSearchQuery('');
    setIsDropdownOpen(false);
  };
  const clearSelection = () => {
    setSelectedCountry(null);
    setSearchQuery('');
  };
  const getRankBadgeClass = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      // Gold
      case 1:
        return 'bg-gray-100 text-gray-600 border-gray-300';
      // Silver
      case 2:
        return 'bg-orange-100 text-orange-600 border-orange-300';
      // Bronze
      default:
        return 'bg-gray-50 text-gray-500 border-gray-200';
      // Plain
    }
  };
  return (
    <section
      id="travel-toolbox"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2933] mb-4">
            Travel Toolbox 🧰
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Search any country to discover the must-have apps before you land.
          </p>
        </div>

        {/* Search and Selection Area */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative" ref={dropdownRef}>
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                placeholder="Search a country... (e.g. Thailand)"
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none text-lg transition-all" />
              
              {searchQuery &&
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 p-1 rounded-full hover:bg-gray-100 text-gray-400 transition-colors">
                
                  <X className="h-5 w-5" />
                </button>
              }
            </div>

            {/* Dropdown */}
            {isDropdownOpen && searchQuery &&
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredCountries.length > 0 ?
              filteredCountries.map((country) =>
              <button
                key={country.name}
                onClick={() => handleSelectCountry(country)}
                className="w-full text-left px-6 py-3 hover:bg-gray-50 flex items-center gap-3 transition-colors border-b border-gray-100 last:border-0">
                
                      <span className="text-2xl">{country.flag}</span>
                      <span className="text-[#1f2933] font-medium text-lg">
                        {country.name}
                      </span>
                    </button>
              ) :

              <div className="px-6 py-4 text-gray-500 text-center">
                    No countries found matching "{searchQuery}"
                  </div>
              }
              </div>
            }
          </div>

          {/* Quick Selection Chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {countryApps.map((country) =>
            <button
              key={country.name}
              onClick={() => handleSelectCountry(country)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${selectedCountry?.name === country.name ? 'bg-[#1f2933] border-[#1f2933] text-white shadow-md scale-105' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}>
              
                <span>{country.flag}</span>
                <span className="font-medium text-sm">{country.name}</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Display */}
        {selectedCountry ?
        <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1f2933] flex items-center gap-3">
                <span className="text-4xl md:text-5xl drop-shadow-sm">
                  {selectedCountry.flag}
                </span>
                {selectedCountry.name}
              </h3>
              <button
              onClick={clearSelection}
              className="p-2 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear selection">
              
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCountry.categories.map((category, idx) =>
            <div
              key={idx}
              className={`rounded-xl border ${category.borderColor} ${category.color} p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}>
              
                  <div className="flex items-center gap-3 mb-6">
                    <div
                  className={`w-12 h-12 rounded-full ${category.iconBg} flex items-center justify-center text-2xl shadow-sm border ${category.borderColor}`}>
                  
                      {category.icon}
                    </div>
                    <h4 className={`text-xl font-bold ${category.textColor}`}>
                      {category.name}
                    </h4>
                  </div>

                  <ul className="space-y-4">
                    {category.apps.map((app, appIdx) =>
                <li
                  key={appIdx}
                  className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-white/40">
                  
                        <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${getRankBadgeClass(appIdx)}`}>
                    
                          {appIdx + 1}
                        </div>
                        <div>
                          <p className="font-bold text-[#1f2933] leading-tight">
                            {app.name}
                          </p>
                          <p className="text-sm text-gray-500 mt-0.5">
                            {app.note}
                          </p>
                        </div>
                      </li>
                )}
                  </ul>
                </div>
            )}
            </div>
          </div> /* Default State */ :

        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-10 w-10 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-[#1f2933] mb-2">
              Select a destination
            </h3>
            <p className="text-gray-500">
              Choose a country above to see the best apps for your trip.
            </p>
          </div>
        }
      </div>
    </section>);

}