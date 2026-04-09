import { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  Search,
  Globe,
  X,
  Check,
  Smartphone,
  CheckSquare,
  Calculator,
  Shield,
  ExternalLink } from
'lucide-react';
// Data Imports
import { countryApps, CountryApps } from '../data/countryApps';
import { getPackingList, tripTypes, durations } from '../data/packingData';
import { countryBudgets } from '../data/budgetData';
import {
  visaDatabase,
  passportCountries,
  destinationCountries,
  statusLabels,
  VisaStatus } from
'../data/visaData';
import { getRankBadgeClass } from '../utils/rankBadge';
interface ToolsPageProps {
  onNavigate: (page: 'home' | 'blog' | 'article' | 'tools', id?: string) => void;
}
type TabType = 'apps' | 'packing' | 'budget' | 'visa';
export function ToolsPage({ onNavigate }: ToolsPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('apps');
  // --- App Finder State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountryApp, setSelectedCountryApp] =
  useState<CountryApps | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filteredCountries = countryApps.filter((country) =>
  country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
  // --- Packing Checklist State ---
  const [selectedTripType, setSelectedTripType] = useState(tripTypes[0].value);
  const [selectedDuration, setSelectedDuration] = useState(durations[0].value);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const packingList = getPackingList(selectedTripType, selectedDuration);
  const totalItems = packingList.reduce((acc, cat) => acc + cat.items.length, 0);
  const packedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage =
  totalItems === 0 ? 0 : Math.round(packedItems / totalItems * 100);
  const toggleItem = (itemName: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };
  // Reset checkboxes when trip type or duration changes
  useEffect(() => {
    setCheckedItems({});
  }, [selectedTripType, selectedDuration]);
  // --- Budget Calculator State ---
  const [budgetCountry, setBudgetCountry] = useState(countryBudgets[0].name);
  const [travelStyle, setTravelStyle] = useState<
    'budget' | 'midRange' | 'luxury'>(
    'midRange');
  const selectedBudgetData =
  countryBudgets.find((c) => c.name === budgetCountry) || countryBudgets[0];
  const currentBudget = selectedBudgetData[travelStyle];
  const totalDaily = Object.values(currentBudget).reduce((a, b) => a + b, 0);
  const totalWeekly = totalDaily * 7;
  const budgetCategories = [
  {
    key: 'accommodation',
    label: 'Accommodation',
    color: 'bg-blue-500'
  },
  {
    key: 'food',
    label: 'Food & Drinks',
    color: 'bg-orange-500'
  },
  {
    key: 'transport',
    label: 'Transport',
    color: 'bg-green-500'
  },
  {
    key: 'activities',
    label: 'Activities',
    color: 'bg-purple-500'
  },
  {
    key: 'sim',
    label: 'SIM / Internet',
    color: 'bg-yellow-500'
  },
  {
    key: 'misc',
    label: 'Miscellaneous',
    color: 'bg-gray-500'
  }];

  // --- Visa Quick Check State ---
  const [passport, setPassport] = useState(passportCountries[0].value);
  const [destination, setDestination] = useState(destinationCountries[0].value);
  const visaInfo = visaDatabase[passport]?.[destination];
  const getVisaBadgeColor = (status: VisaStatus) => {
    switch (status) {
      case 'visa-free':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'voa':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'evisa':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'embassy':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-[#1f2933] flex flex-col">
      <Navbar onNavigate={onNavigate as any} forceDark={true} />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1f2933] mb-4">
              Traveler Tools 🧰
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything you need to plan smarter. Find local apps, generate
              packing lists, estimate budgets, and check visa requirements.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 mb-12 pb-2">
            {[
            {
              id: 'apps',
              label: 'App Finder',
              icon: Smartphone
            },
            {
              id: 'packing',
              label: 'Packing Checklist',
              icon: CheckSquare
            },
            {
              id: 'budget',
              label: 'Budget Calculator',
              icon: Calculator
            },
            {
              id: 'visa',
              label: 'Visa Quick Check',
              icon: Shield
            }].
            map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-[#1f2933] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            )}
          </div>

          {/* --- TAB 1: APP FINDER --- */}
          {activeTab === 'apps' &&
          <div className="animate-fade-in">
              <div className="max-w-3xl mx-auto mb-12">
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

                  {isDropdownOpen && searchQuery &&
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                      {filteredCountries.length > 0 ?
                  filteredCountries.map((country) =>
                  <button
                    key={country.name}
                    onClick={() => {
                      setSelectedCountryApp(country);
                      setSearchQuery('');
                      setIsDropdownOpen(false);
                    }}
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

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {countryApps.map((country) =>
                <button
                  key={country.name}
                  onClick={() => setSelectedCountryApp(country)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${selectedCountryApp?.name === country.name ? 'bg-[#1f2933] border-[#1f2933] text-white shadow-md' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                  
                      <span>{country.flag}</span>
                      <span className="font-medium text-sm">
                        {country.name}
                      </span>
                    </button>
                )}
                </div>
              </div>

              {selectedCountryApp ?
            <div className="animate-fade-in">
                  <div className="flex items-center justify-center gap-4 mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1f2933] flex items-center gap-3">
                      <span className="text-4xl md:text-5xl drop-shadow-sm">
                        {selectedCountryApp.flag}
                      </span>
                      {selectedCountryApp.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedCountryApp.categories.map((category, idx) =>
                <div
                  key={idx}
                  className={`rounded-xl border ${category.borderColor} ${category.color} p-6 shadow-sm`}>
                  
                        <div className="flex items-center gap-3 mb-6">
                          <div
                      className={`w-12 h-12 rounded-full ${category.iconBg} flex items-center justify-center text-2xl shadow-sm border ${category.borderColor}`}>
                      
                            {category.icon}
                          </div>
                          <h4
                      className={`text-xl font-bold ${category.textColor}`}>
                      
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
                </div> :

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
          }

          {/* --- TAB 2: PACKING CHECKLIST --- */}
          {activeTab === 'packing' &&
          <div className="animate-fade-in max-w-5xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Trip Type
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tripTypes.map((type) =>
                    <button
                      key={type.value}
                      onClick={() => setSelectedTripType(type.value)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${selectedTripType === type.value ? 'bg-[#1f2933] border-[#1f2933] text-white shadow-sm' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                      
                          <span>{type.icon}</span>
                          <span className="font-medium text-sm">
                            {type.label}
                          </span>
                        </button>
                    )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Duration
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {durations.map((duration) =>
                    <button
                      key={duration.value}
                      onClick={() => setSelectedDuration(duration.value)}
                      className={`px-4 py-2 rounded-full border transition-all font-medium text-sm ${selectedDuration === duration.value ? 'bg-[#1f2933] border-[#1f2933] text-white shadow-sm' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                      
                          {duration.label}
                        </button>
                    )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8 sticky top-20 z-10">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <h3 className="font-bold text-[#1f2933]">
                      Packing Progress
                    </h3>
                    <p className="text-sm text-gray-500">
                      {packedItems} of {totalItems} items packed
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-[#1f2933]">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progressPercentage}%`
                  }}>
                </div>
                </div>
              </div>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packingList.map((category, idx) =>
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                
                    <div className="bg-gray-50 px-5 py-4 border-b border-gray-200 flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <h4 className="font-bold text-[#1f2933]">
                        {category.name}
                      </h4>
                      <span className="ml-auto text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        {category.items.length}
                      </span>
                    </div>
                    <div className="p-2">
                      {category.items.map((item, itemIdx) => {
                    const isChecked = checkedItems[item.name] || false;
                    return (
                      <label
                        key={itemIdx}
                        onClick={() => toggleItem(item.name)}
                        className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${isChecked ? 'opacity-60' : ''}`}>
                        
                            <div
                          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 bg-white'}`}>
                          
                              {isChecked && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <div className="flex-1">
                              <span
                            className={`text-sm font-medium transition-all ${isChecked ? 'line-through text-gray-400' : 'text-[#1f2933]'}`}>
                            
                                {item.name}
                              </span>
                              {item.essential && !isChecked &&
                          <span className="ml-2 text-[10px] font-bold text-red-500 uppercase tracking-wider">
                                  Essential
                                </span>
                          }
                            </div>
                          </label>);

                  })}
                    </div>
                  </div>
              )}
              </div>
            </div>
          }

          {/* --- TAB 3: BUDGET CALCULATOR --- */}
          {activeTab === 'budget' &&
          <div className="animate-fade-in max-w-4xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Destination
                    </h3>
                    <select
                    value={budgetCountry}
                    onChange={(e) => setBudgetCountry(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none font-medium text-[#1f2933]">
                    
                      {countryBudgets.map((c) =>
                    <option key={c.name} value={c.name}>
                          {c.flag} {c.name}
                        </option>
                    )}
                    </select>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Travel Style
                    </h3>
                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-200">
                      {[
                    {
                      id: 'budget',
                      label: 'Budget'
                    },
                    {
                      id: 'midRange',
                      label: 'Mid-Range'
                    },
                    {
                      id: 'luxury',
                      label: 'Luxury'
                    }].
                    map((style) =>
                    <button
                      key={style.id}
                      onClick={() => setTravelStyle(style.id as any)}
                      className={`flex-1 py-2 px-2 text-sm font-medium rounded-lg transition-all ${travelStyle === style.id ? 'bg-white text-[#1f2933] shadow-sm border border-gray-200' : 'text-gray-500 hover:text-[#1f2933]'}`}>
                      
                          {style.label}
                        </button>
                    )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-[#1f2933] p-8 text-center text-white">
                  <h2 className="text-xl font-medium text-gray-300 mb-2">
                    Estimated Daily Budget
                  </h2>
                  <div className="text-5xl font-bold mb-2">
                    ${totalDaily}
                    <span className="text-2xl text-gray-400 font-normal">
                      /day
                    </span>
                  </div>
                  <p className="text-gray-400">~${totalWeekly} per week</p>
                </div>

                <div className="p-8">
                  {/* Stacked Bar Chart */}
                  <div className="w-full h-8 rounded-full overflow-hidden flex mb-8 border border-gray-200">
                    {budgetCategories.map((cat) => {
                    const amount =
                    currentBudget[cat.key as keyof typeof currentBudget];
                    const percentage = amount / totalDaily * 100;
                    return (
                      <div
                        key={cat.key}
                        className={`h-full ${cat.color} transition-all duration-500`}
                        style={{
                          width: `${percentage}%`
                        }}
                        title={`${cat.label}: $${amount}`}>
                      </div>);

                  })}
                  </div>

                  {/* Breakdown List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {budgetCategories.map((cat) => {
                    const amount =
                    currentBudget[cat.key as keyof typeof currentBudget];
                    const percentage = Math.round(amount / totalDaily * 100);
                    return (
                      <div
                        key={cat.key}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        
                          <div className="flex items-center gap-3">
                            <div
                            className={`w-4 h-4 rounded-full ${cat.color}`}>
                          </div>
                            <span className="font-medium text-[#1f2933]">
                              {cat.label}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#1f2933]">
                              ${amount}
                            </div>
                            <div className="text-xs text-gray-500">
                              {percentage}%
                            </div>
                          </div>
                        </div>);

                  })}
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-800">
                    <strong>Note:</strong> These are estimates in USD based on
                    average traveler data. Costs can vary widely based on
                    season, exact location, and personal habits. Flights are not
                    included.
                  </div>
                </div>
              </div>
            </div>
          }

          {/* --- TAB 4: VISA QUICK CHECK --- */}
          {activeTab === 'visa' &&
          <div className="animate-fade-in max-w-4xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Your Passport
                    </h3>
                    <select
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none font-medium text-[#1f2933]">
                    
                      {passportCountries.map((p) =>
                    <option key={p.value} value={p.value}>
                          {p.flag} {p.label}
                        </option>
                    )}
                    </select>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Destination
                    </h3>
                    <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4b5563] focus:border-transparent outline-none font-medium text-[#1f2933]">
                    
                      {destinationCountries.map((d) =>
                    <option key={d.value} value={d.value}>
                          {d.flag} {d.label}
                        </option>
                    )}
                    </select>
                  </div>
                </div>
              </div>

              {visaInfo ?
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl drop-shadow-sm">
                        {
                    destinationCountries.find(
                      (d) => d.value === destination
                    )?.flag
                    }
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#1f2933]">
                          {
                      destinationCountries.find(
                        (d) => d.value === destination
                      )?.label
                      }
                        </h2>
                        <p className="text-gray-500">
                          For{' '}
                          {
                      passportCountries.find((p) => p.value === passport)?.
                      label
                      }{' '}
                          passports
                        </p>
                      </div>
                    </div>
                    <div
                  className={`px-6 py-3 rounded-full border-2 font-bold text-lg text-center ${getVisaBadgeColor(visaInfo.status)}`}>
                  
                      {statusLabels[visaInfo.status]}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                          Max Stay
                        </div>
                        <div className="text-2xl font-bold text-[#1f2933]">
                          {visaInfo.maxStay}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                          Estimated Cost
                        </div>
                        <div className="text-2xl font-bold text-[#1f2933]">
                          {visaInfo.cost}
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-[#1f2933] mb-4">
                        Key Requirements
                      </h3>
                      <ul className="space-y-3">
                        {visaInfo.requirements.map((req, idx) =>
                    <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                    )}
                      </ul>
                    </div>

                    {visaInfo.notes &&
                <div className="mb-8 p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-sm text-yellow-800">
                        <strong>Note:</strong> {visaInfo.notes}
                      </div>
                }

                    {visaInfo.officialLink &&
                <a
                  href={visaInfo.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-6 py-4 bg-[#1f2933] text-white font-bold rounded-xl hover:bg-[#374151] transition-colors group">
                  
                        Official Application Portal
                        <ExternalLink className="ml-2 w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                }
                  </div>
                </div> :

            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <Shield className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#1f2933] mb-2">
                    No Data Available
                  </h3>
                  <p className="text-gray-500">
                    We don't have visa information for this specific combination
                    yet.
                  </p>
                </div>
            }
            </div>
          }
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>);

}