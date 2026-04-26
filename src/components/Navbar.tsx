import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';
interface NavbarProps {
  onNavigate?: (
  page: 'home' | 'blog' | 'article' | 'tools',
  id?: string)
  => void;
  forceDark?: boolean;
}
export function Navbar({ onNavigate, forceDark = false }: NavbarProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    if (id === 'blog' && onNavigate) {
      onNavigate('blog');
      setIsOpen(false);
      setActiveDropdown(null);
      return;
    }
    if (id === 'tools' && onNavigate) {
      onNavigate('tools');
      setIsOpen(false);
      setActiveDropdown(null);
      return;
    }
    if (onNavigate && id !== 'blog' && id !== 'tools' && id !== 'top') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80;
          const top =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }
      }, 100);
      setIsOpen(false);
      setActiveDropdown(null);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
      setIsOpen(false);
      setActiveDropdown(null);
    } else if (id === 'top') {
      if (onNavigate) {
        onNavigate('home');
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };
  const handleDropdownEnter = (name: string) => {
    setActiveDropdown(name);
  };
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };
  const toggleMobileExpand = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };
  const dropdownBg = isScrolled ? 'bg-white/85' : 'bg-white/50';
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${forceDark ? 'bg-white border-b border-gray-200 py-2 shadow-sm' : isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => scrollToSection('top')}>
            
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${isScrolled || forceDark ? 'text-[#1f2933]' : 'text-white'}`}>
              
              {t('nav.brand')}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Travel Steps — scrolls to the services grid */}
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors ${isScrolled || forceDark ? 'text-[#1f2933] hover:text-[#4b5563]' : 'text-white/90 hover:text-white'}`}>
              
              {t('nav.travelSteps')}
            </button>

            {/* Traveler Tools Page Link */}
            <button
              onClick={() => scrollToSection('tools')}
              className={`font-medium transition-colors ${isScrolled || forceDark ? 'text-[#1f2933] hover:text-[#4b5563]' : 'text-white/90 hover:text-white'}`}>
              
              {t('nav.travelerTools')} 🔧
            </button>

            {/* Plan & Book Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('plan')}
              onMouseLeave={handleDropdownLeave}>
              
              <button
                className={`flex items-center font-medium transition-colors ${isScrolled || forceDark ? 'text-[#1f2933] hover:text-[#4b5563]' : 'text-white/90 hover:text-white'}`}>
                
                {t('nav.planBook')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'plan' &&
              <div className="absolute top-full left-0 pt-2 w-56">
                  <div
                  className={`rounded-md shadow-lg py-2 border border-white/30 animate-fade-in backdrop-blur-md ${dropdownBg}`}>
                  
                    <a
                    href="https://trip.tp.st/By8d4T6V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      ✈️ {t('nav.flights')}
                    </a>
                    <a
                    href="https://booking.tp.st/fE9TPCct"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      🏨 {t('nav.hotelsStays')}
                    </a>
                    <a
                    href="https://trip.tp.st/bHOWSgz6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      📦 {t('nav.flightHotelDeals')}
                    </a>
                    <a
                    href="https://discovercars.tp.st/CY3Ty5Yz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      🚗 {t('nav.carRentals')}
                    </a>
                    <a
                    href="https://holidaytaxis.tp.st/PumDgPOV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      🚐 {t('nav.airportTransfers')}
                    </a>
                    <a
                    href="https://ektatraveling.tp.st/nODljNJv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      🛡️ {t('nav.insurance')}
                    </a>
                    <a
                    href="https://airalo.tp.st/sbw9crL4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      📱 {t('nav.esim')}
                    </a>
                  </div>
                </div>
              }
            </div>

            {/* Experiences Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('experiences')}
              onMouseLeave={handleDropdownLeave}>
              
              <button
                className={`flex items-center font-medium transition-colors ${isScrolled || forceDark ? 'text-[#1f2933] hover:text-[#4b5563]' : 'text-white/90 hover:text-white'}`}>
                
                {t('nav.experiences')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'experiences' &&
              <div className="absolute top-full left-0 pt-2 w-56">
                  <div
                  className={`rounded-md shadow-lg py-2 border border-white/30 animate-fade-in backdrop-blur-md ${dropdownBg}`}>
                  
                    <a
                    href="https://tiqets.tp.st/JAQlFtfb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      🎟️ {t('nav.toursAttractions')}
                    </a>
                    <a
                    href="https://getyourguide.tp.st/UAhQqSZ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      🧭 {t('nav.getYourGuide')}
                    </a>
                  </div>
                </div>
              }
            </div>

            {/* Visa Help — direct link, no dropdown */}
            <button
              onClick={() => scrollToSection('visa-help')}
              className={`font-medium transition-colors ${isScrolled || forceDark ? 'text-[#1f2933] hover:text-[#4b5563]' : 'text-white/90 hover:text-white'}`}>
              
              {t('nav.visaHelp')}
            </button>

            {/* Community Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('community')}
              onMouseLeave={handleDropdownLeave}>
              
              <button
                className={`flex items-center font-medium transition-colors ${isScrolled || forceDark ? 'text-[#1f2933] hover:text-[#4b5563]' : 'text-white/90 hover:text-white'}`}>
                
                {t('nav.community')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'community' &&
              <div className="absolute top-full right-0 pt-2 w-56">
                  <div
                  className={`rounded-md shadow-lg py-2 border border-white/30 animate-fade-in backdrop-blur-md ${dropdownBg}`}>
                  
                    <button
                    onClick={() => scrollToSection('recommended')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      📍 {t('nav.recommendedPlaces')}
                    </button>
                    <button
                    onClick={() => scrollToSection('blog')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      ✍️ {t('nav.travelBlog')}
                    </button>
                    <button
                    onClick={() => scrollToSection('social-media')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      📲 {t('nav.socialMedia')}
                    </button>
                    <button
                    onClick={() => scrollToSection('influencer')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f2933]">
                    
                      💸 {t('nav.travelInfluencer')}
                    </button>
                  </div>
                </div>
              }
            </div>

            <LanguageSwitcher />
            <a
              href="https://calendly.com/netaneltoursvip/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-md font-medium transition-colors ${isScrolled || forceDark ? 'bg-[#1f2933] text-white hover:bg-[#374151]' : 'bg-white text-[#1f2933] hover:bg-gray-100'}`}>
              
              {t('nav.bookConsultation')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isScrolled || forceDark ? 'text-[#1f2933]' : 'text-white'}`}
              aria-label="Toggle menu">
              
              {isOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
      <div
        className={`lg:hidden border-b border-white/30 absolute top-full left-0 w-full shadow-lg max-h-[80vh] overflow-y-auto transition-all duration-300 ${isScrolled ? 'bg-white/85 backdrop-blur-md' : 'bg-white/50 backdrop-blur-md'}`}>
        
          <div className="px-4 pt-2 pb-6 space-y-1">
            <div className="pb-2 border-b border-gray-200/50">
              <LanguageSwitcher compact />
            </div>
            {/* Travel Steps */}
            <button
            onClick={() => scrollToSection('services')}
            className="flex justify-between items-center w-full text-left px-3 py-3 text-[#1f2933] hover:bg-white/40 rounded-md font-medium border-b border-gray-200/50">
            
              ✈️ {t('nav.travelStepsMobile')}
            </button>

            {/* Traveler Tools */}
            <button
            onClick={() => scrollToSection('tools')}
            className="flex justify-between items-center w-full text-left px-3 py-3 text-[#1f2933] hover:bg-white/40 rounded-md font-medium border-b border-gray-200/50">
            
              🔧 {t('nav.travelerToolsMobile')}
            </button>

            {/* Mobile: Plan & Book */}
            <div>
              <button
              onClick={() => toggleMobileExpand('plan')}
              className="flex justify-between items-center w-full text-left px-3 py-3 text-[#1f2933] hover:bg-white/40 rounded-md font-medium border-b border-gray-200/50">
              
                {t('nav.planBook')}
                <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileExpanded === 'plan' ? 'rotate-180' : ''}`} />
              
              </button>
              {mobileExpanded === 'plan' &&
            <div className="pl-6 bg-white/20">
                  <a
                href="https://trip.tp.st/By8d4T6V"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    ✈️ {t('nav.flights')}
                  </a>
                  <a
                href="https://booking.tp.st/fE9TPCct"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    🏨 {t('nav.hotelsStays')}
                  </a>
                  <a
                href="https://trip.tp.st/bHOWSgz6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    📦 {t('nav.flightHotelDeals')}
                  </a>
                  <a
                href="https://discovercars.tp.st/CY3Ty5Yz"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    🚗 {t('nav.carRentals')}
                  </a>
                  <a
                href="https://holidaytaxis.tp.st/PumDgPOV"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    🚐 {t('nav.airportTransfers')}
                  </a>
                  <a
                href="https://ektatraveling.tp.st/nODljNJv"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    🛡️ {t('nav.insurance')}
                  </a>
                  <a
                href="https://airalo.tp.st/sbw9crL4"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    📱 {t('nav.esim')}
                  </a>
                </div>
            }
            </div>

            {/* Mobile: Experiences */}
            <div>
              <button
              onClick={() => toggleMobileExpand('experiences')}
              className="flex justify-between items-center w-full text-left px-3 py-3 text-[#1f2933] hover:bg-white/40 rounded-md font-medium border-b border-gray-200/50">
              
                {t('nav.experiences')}
                <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileExpanded === 'experiences' ? 'rotate-180' : ''}`} />
              
              </button>
              {mobileExpanded === 'experiences' &&
            <div className="pl-6 bg-white/20">
                  <a
                href="https://tiqets.tp.st/JAQlFtfb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    🎟️ {t('nav.toursAttractions')}
                  </a>
                  <a
                href="https://getyourguide.tp.st/UAhQqSZ7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    🧭 {t('nav.getYourGuide')}
                  </a>
                </div>
            }
            </div>

            {/* Mobile: Visa Help */}
            <button
            onClick={() => scrollToSection('visa-help')}
            className="flex justify-between items-center w-full text-left px-3 py-3 text-[#1f2933] hover:bg-white/40 rounded-md font-medium border-b border-gray-200/50">
            
              🛂 {t('nav.visaHelp')}
            </button>

            {/* Mobile: Community */}
            <div>
              <button
              onClick={() => toggleMobileExpand('community')}
              className="flex justify-between items-center w-full text-left px-3 py-3 text-[#1f2933] hover:bg-white/40 rounded-md font-medium border-b border-gray-200/50">
              
                {t('nav.community')}
                <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileExpanded === 'community' ? 'rotate-180' : ''}`} />
              
              </button>
              {mobileExpanded === 'community' &&
            <div className="pl-6 bg-white/20">
                  <button
                onClick={() => scrollToSection('recommended')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    📍 {t('nav.recommendedPlaces')}
                  </button>
                  <button
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    ✍️ {t('nav.travelBlog')}
                  </button>
                  <button
                onClick={() => scrollToSection('social-media')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    📲 {t('nav.socialMedia')}
                  </button>
                  <button
                onClick={() => scrollToSection('influencer')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#1f2933]">
                
                    💸 {t('nav.travelInfluencer')}
                  </button>
                </div>
            }
            </div>

            <a
            href="https://calendly.com/netaneltoursvip/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left px-3 py-3 mt-4 bg-[#1f2933] text-white rounded-md font-medium text-center">
            
              {t('nav.bookConsultation')}
            </a>
          </div>
        </div>
      }
    </nav>);

}