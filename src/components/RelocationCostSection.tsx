import { useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type CountryKey = 'vietnam' | 'thailand';

interface HeadlineStat {
  value: string;
  label: string;
}

interface PainPoint {
  id: string;
  title: string;
  avgLoss: string;
  description: string;
  stat: string;
  timeWasted: string;
  source: string;
}

interface TableRow {
  category: string;
  withoutService: string;
  withService: string;
  save: string;
}

interface ScamStatRow {
  scamType: string;
  percentHit: string;
  avgLoss: string;
}

interface CountryData {
  label: string;
  flag: string;
  flagImage: string;
  headlineStats: HeadlineStat[];
  painPoints: PainPoint[];
  scamRows: ScamStatRow[];
  savingsRows: TableRow[];
  totalSavingsCallout: string;
}

const relocationData: Record<CountryKey, CountryData> = {
  vietnam: {
    label: 'Vietnam',
    flag: '🇻🇳',
    flagImage: 'https://flagcdn.com/w40/vn.webp',
    headlineStats: [
      { value: '72%', label: 'Expats hit with rental fraud' },
      { value: '$15,000+', label: 'Average land scam loss' },
      { value: '6–10 weeks', label: 'Average solo settling time' },
    ],
    painPoints: [
      {
        id: '#01',
        title: 'Fake Apartment Listings',
        avgLoss: '$500–$2,000',
        description:
          "Scammers post professional photos of properties they don't own. You send a deposit. They vanish. Or you arrive and the listing doesn't exist.",
        stat: '72% of expats encounter rental fraud attempts',
        timeWasted: '2–4 weeks',
        source: 'VietRent 2024 Survey',
      },
      {
        id: '#02',
        title: 'Forged Pink Book (Property Docs)',
        avgLoss: '$1,000–$5,000',
        description:
          'Vietnam\'s only legal proof of ownership is the Giấy chứng nhận (Pink Book). Scammers forge it to rent properties they don\'t legally own.',
        stat: '37% of expats sign fraudulent rental agreements annually',
        timeWasted: 'Months of legal dispute',
        source: 'VietRent 2024',
      },
      {
        id: '#03',
        title: 'Utility Price Gouging',
        avgLoss: '$50–$200/month overpaid',
        description:
          'Landlords install fake meters or bill electricity and water at 3–5x the government rate. You only discover this after signing the lease.',
        stat: 'Affects majority of independent renters in HCMC & Hanoi',
        timeWasted: 'Ongoing monthly loss',
        source: 'Living in Vietnam Reports',
      },
      {
        id: '#04',
        title: 'Mold, Structural Damage & Hidden Unit Problems',
        avgLoss: '$200–$800',
        description:
          'Photos look perfect. Reality is mold-infested, broken AC, water damage. Zero recourse after signing.',
        stat: 'Very common in budget-mid tier listings on Facebook & Airbnb',
        timeWasted: '2–3 weeks',
        source: 'Expat Community Reports',
      },
      {
        id: '#05',
        title: 'Fake Lawyer / Business Setup Fraud',
        avgLoss: '$1,500–$5,000',
        description:
          'Unlicensed consultants charge $1,500–$5,000 to register a business. Documents are fake. No company is actually registered. You have no legal entity.',
        stat: 'Common in HCMC and Da Nang startup circles',
        timeWasted: '3–6 months',
        source: 'Duong Business Consulting',
      },
      {
        id: '#06',
        title: 'Land Ownership Illusion',
        avgLoss: '$5,000–$50,000+',
        description:
          'Agents sell foreigners land through a "local nominee." Legally unenforceable. Foreigners CANNOT own land in Vietnam. Any agent saying otherwise is lying.',
        stat: 'All nominee land arrangements are void and fraudulent under Vietnamese law',
        timeWasted: 'Years of legal battle',
        source: '2024 Vietnam Land Law / Rumavi 2026',
      },
      {
        id: '#07',
        title: 'Visa & Work Permit Scams',
        avgLoss: '$300–$1,500',
        description:
          '"Fast visa processing" agents take your money and data. No visa materializes. Your data gets sold. You end up stranded or overstaying illegally.',
        stat: 'Top-5 reported scam category in Vietnam 2024',
        timeWasted: '2–6 weeks',
        source: 'Vietnam.vn State of Scams 2024',
      },
      {
        id: '#08',
        title: 'Airport & Transport Price Gouging',
        avgLoss: '$30–$150 per ride',
        description:
          'Unregistered drivers use rigged meters or refuse meters entirely. New arrivals with luggage are prime day-one targets.',
        stat: 'Documented 3–10x overcharge on legitimate fares',
        timeWasted: 'Day one',
        source: 'Vietnam Teaching Jobs / Expat Reports 2024',
      },
      {
        id: '#09',
        title: 'Deposit Theft',
        avgLoss: '$500–$2,000',
        description:
          'Landlords fabricate damage claims to keep your security deposit. They know foreigners rarely fight back legally.',
        stat: '60% of expats report deposit disputes',
        timeWasted: '1–2 months',
        source: 'VietRent & Vietnam Teaching Jobs 2024',
      },
      {
        id: '#10',
        title: 'Agent Double-Dipping / Bait & Switch',
        avgLoss: '$200–$600 extra/month',
        description:
          'Agent shows you one listing, claims it\'s gone, walks you into a worse pricier unit. Multiple agents list the same property, inflating prices.',
        stat: 'Standard practice in local agency market',
        timeWasted: '1–3 weeks',
        source: 'MVP Vietnam / Living in Vietnam',
      },
      {
        id: '#11',
        title: 'Currency Exchange & Bank Fraud',
        avgLoss: '$100–$500',
        description:
          'Street exchangers give counterfeit dong or invalid outdated bills. You hand over USD and walk away with worthless paper.',
        stat: 'Widespread in tourist-heavy areas',
        timeWasted: 'Immediate',
        source: 'Prime Travel Vietnam 2025',
      },
      {
        id: '#12',
        title: 'Fake Investment / Business Partner Deals',
        avgLoss: '$2,000–$20,000+',
        description:
          'Crypto and franchise schemes target newly-arrived expats. Exploits greed and loneliness. Often linked to romance manipulation.',
        stat: 'Vietnam online scams cost users ~$740M USD equivalent in 2024',
        timeWasted: 'Weeks to months',
        source: 'Vietnam.vn / Whitehat Community 2024',
      },
    ],
    scamRows: [
      { scamType: 'Deposit Theft', percentHit: '60%', avgLoss: '$1,200' },
      { scamType: 'Rental Fraud / Forged Docs', percentHit: '37–72%', avgLoss: '$2,800' },
      { scamType: 'Fake Lawyer / Biz Setup', percentHit: 'Est. 1 in 5 solo starters', avgLoss: '$3,500' },
      { scamType: 'Land Nominee Fraud', percentHit: 'Most nominee arrangements', avgLoss: '$15,000+' },
      { scamType: 'Visa / Work Permit Scam', percentHit: 'Top-5 category nationally', avgLoss: '$700' },
      { scamType: 'Airport Taxi Overcharge', percentHit: '~80% of new arrivals', avgLoss: '$80' },
      { scamType: 'Utility Overbilling', percentHit: 'Majority of solo renters', avgLoss: '$1,200/yr' },
      { scamType: 'Bait & Switch Listings', percentHit: 'Very common', avgLoss: '$400/mo extra' },
      { scamType: 'Currency Exchange Fraud', percentHit: 'Common in tourist areas', avgLoss: '$250' },
      { scamType: 'Fake Investment / Crypto', percentHit: 'Growing rapidly', avgLoss: '$8,000+' },
    ],
    savingsRows: [
      {
        category: 'Apartment Search',
        withoutService: '4–6 weeks, 2–3 scam encounters',
        withService: '1 verified unit in days, zero deposit risk',
        save: '$1,500–$4,000',
      },
      {
        category: 'Utility Bills',
        withoutService: 'Overbilled 3–5x monthly',
        withService: 'Verified government-rate contracts',
        save: '$1,200/year',
      },
      {
        category: 'Lawyer / Business Setup',
        withoutService: 'Unverified consultant, $3,500 avg loss',
        withService: 'Vetted licensed lawyer',
        save: '$1,500–$5,000',
      },
      {
        category: 'Land / Property Diligence',
        withoutService: 'No verification, nominee scam risk',
        withService: 'Pink Book checked',
        save: '$5,000–$50,000+',
      },
      {
        category: 'Visa & Work Permit',
        withoutService: 'Fake agent, lost money + data breach',
        withService: 'Licensed immigration support',
        save: '$700–$1,500',
      },
      {
        category: 'Airport Transfer',
        withoutService: 'Scam taxi day one',
        withService: 'Secure private pickup',
        save: '$80–$150',
      },
      {
        category: 'Time Cost',
        withoutService: '6–10 weeks settling in alone',
        withService: '1–2 weeks with full support',
        save: '$3,000–$8,000',
      },
      {
        category: 'Stress & Safety',
        withoutService: 'Unknown neighborhoods',
        withService: 'Curated areas, trusted network',
        save: 'Priceless',
      },
    ],
    totalSavingsCallout: 'Conservative total savings: $14,000–$69,000+ | ROI: 5x–23x on a $2,000–$3,000 service',
  },
  thailand: {
    label: 'Thailand',
    flag: '🇹🇭',
    flagImage: 'https://flagcdn.com/w40/th.webp',
    headlineStats: [
      { value: '60%', label: 'Thais and expats hit by scams in 2025 (Global Anti-Scam Alliance report)' },
      { value: '$3.2B USD', label: 'Total national scam losses (≈115 billion baht)' },
      { value: '110,000+', label: 'Companies with foreign investment under nominee scrutiny (DBD 2026)' },
    ],
    painPoints: [
      {
        id: '#01',
        title: 'Fake Apartment & Condo Listings',
        avgLoss: '$500–$2,500',
        description:
          'Scammers post stolen photos on Facebook Marketplace and LINE groups at below-market prices. You transfer a deposit. The "landlord" blocks you and disappears.',
        stat: 'Surging with tourism boom (12M+ foreign arrivals early 2025)',
        timeWasted: '2–4 weeks',
        source: 'Portail-Asie Thailand Scams 2026 / Expat reports',
      },
      {
        id: '#02',
        title: 'All-Thai Rental Contracts with Hidden Clauses',
        avgLoss: '$1,000–$4,000',
        description:
          'Most rental contracts are drafted in Thai only. Foreigners sign agreements with hidden penalties, eviction clauses, and landlord escape routes they never knew existed.',
        stat: "Thailand's rental sector has no unified regulatory framework",
        timeWasted: 'Months of dispute',
        source: 'Pattaya Prestige Properties / ThaiLaw.org 2025',
      },
      {
        id: '#03',
        title: 'Deposit Theft',
        avgLoss: '$600–$2,500',
        description:
          'Landlords invent damage claims to keep your full deposit on exit. Foreign tenants are specifically targeted.',
        stat: 'Among top 3 expat complaints in Bangkok, Phuket, Pattaya, Chiang Mai',
        timeWasted: '1–3 months',
        source: 'ThaiLaw.org / Expat.com Reports 2025',
      },
      {
        id: '#04',
        title: 'Nominee Land & Business Structure Fraud',
        avgLoss: '$10,000–$500,000+',
        description:
          'Lawyers and agents sell foreigners the idea of owning land or running a business through a Thai nominee shareholder. Using nominee structures to bypass foreign ownership restrictions is illegal under the Foreign Business Act.',
        stat: '820 illegal nominee businesses prosecuted (Sept 2024–Jan 2025) with 12.5 billion baht (~$350M USD) damages; 110,000+ companies under scrutiny in 2026',
        timeWasted: 'Months to years',
        source: 'The Nation Thailand / DBD / Lexology 2025–2026',
      },
      {
        id: '#05',
        title: 'The "30+30+30 Year Lease" Legal Fiction',
        avgLoss: '$50,000–$300,000+',
        description:
          'Agents sell foreigners a 90-year lease structured as three 30-year terms. Only the first 30 years are legally enforceable.',
        stat: 'Widespread practice sold across Phuket, Koh Samui, Pattaya',
        timeWasted: 'Long-term legal exposure',
        source: 'SamuiForSale Legal Analysis / LexBangkok 2025',
      },
      {
        id: '#06',
        title: 'Fake Visa & Work Permit Agents',
        avgLoss: '$500–$2,000',
        description:
          'Fake TDAC (digital arrival card) websites, fake education visa agents, and fake work permit services take upfront fees and deliver nothing.',
        stat: '10% of foreign arrivals used fake TDAC sites (Immigration Bureau Mar 2026) — potential $100M losses',
        timeWasted: '2–8 weeks',
        source: 'Thai Immigration Bureau / ThaiExaminer 2026',
      },
      {
        id: '#07',
        title: 'Jet Ski & Vehicle Damage Scams',
        avgLoss: '$300–$2,000 per incident',
        description:
          'Rented jet ski or motorbike is returned in normal condition. Vendor claims pre-existing damage and demands cash on the spot. Police sometimes complicit.',
        stat: 'Endemic in Phuket and Pattaya — decades-old but still actively reported in 2026',
        timeWasted: 'Immediate to several days',
        source: 'Portail-Asie / Expat.com Community Reports 2026',
      },
      {
        id: '#08',
        title: 'Tuk-Tuk & Taxi Gold Shop Scam',
        avgLoss: '$200–$3,000 in fake purchases',
        description:
          'Driver offers a "free tour" or heavily discounted ride. Takes you to a fake gem or gold shop where you are pressured into buying worthless merchandise.',
        stat: 'One of the longest-running tourist and expat scams in Bangkok — still active daily',
        timeWasted: 'Day one',
        source: 'Expat.com / Multiple Verified Reports 2025–2026',
      },
      {
        id: '#09',
        title: 'Investment & Romance Scam ("Pig Butchering")',
        avgLoss: '$5,000–$50,000+',
        description:
          'Scammer builds romantic or friendship relationship online, then introduces a fake crypto or forex platform.',
        stat: 'Investment scams represent the majority of financial fraud losses; 60% of Thais already victimized in 2025',
        timeWasted: 'Months',
        source: 'Bangkok Post / Chulalongkorn University / GASA 2025',
      },
      {
        id: '#10',
        title: 'Illegal Business Operations Leading to Arrest',
        avgLoss: '$5,000–$100,000+',
        description:
          'Foreigners unknowingly run businesses in restricted sectors under the Foreign Business Act. Authorities raid and shut them down.',
        stat: '820 illegal foreign-operated businesses prosecuted Sept 2024–Jan 2025',
        timeWasted: 'Months to years',
        source: 'The Nation Thailand / DSI Reports 2025–2026',
      },
      {
        id: '#11',
        title: 'Currency & ATM Skimming Fraud',
        avgLoss: '$100–$800',
        description: 'ATM skimming devices and dynamic currency conversion at ATMs. Street money changers offer fake bills.',
        stat: 'Widespread in tourist corridors',
        timeWasted: 'Immediate',
        source: 'Portail-Asie Thailand Scams 2026',
      },
      {
        id: '#12',
        title: 'Immigration Overstay Traps',
        avgLoss: '$1,000–$5,000',
        description:
          'Visa run agents provide incorrect information. Foreigners overstay unknowingly. Raids increased sharply in 2025.',
        stat: 'Multiple coordinated raids across Thai islands in 2025',
        timeWasted: 'Weeks to months',
        source: 'ThaiEmbassy.com / ThaiVisa Reports 2025–2026',
      },
    ],
    scamRows: [
      { scamType: 'Deposit Theft', percentHit: 'Top 3 complaint category', avgLoss: '$1,500' },
      { scamType: 'Fake Rental Listings', percentHit: 'Surging with tourism boom', avgLoss: '$1,800' },
      { scamType: 'Nominee Land / Biz Fraud', percentHit: '110,000+ companies checked', avgLoss: '$50,000–$350,000+' },
      { scamType: '30+30+30 Lease Fiction', percentHit: 'Widespread in key areas', avgLoss: '$100,000+' },
      { scamType: 'Fake Visa / TDAC Agents', percentHit: '10% of foreign arrivals', avgLoss: '$1,000' },
      { scamType: 'Jet Ski / Vehicle Damage', percentHit: 'Endemic in Phuket & Pattaya', avgLoss: '$800' },
      { scamType: 'Tuk-Tuk Gold Shop Scam', percentHit: 'Active in Bangkok daily', avgLoss: '$1,200' },
      { scamType: 'Romance / Pig Butchering', percentHit: 'Majority of fraud losses', avgLoss: '$15,000+' },
      { scamType: 'Illegal Business Raid', percentHit: '820 prosecuted', avgLoss: '$30,000+' },
      { scamType: 'ATM / Currency Fraud', percentHit: 'Widespread in tourist areas', avgLoss: '$400' },
    ],
    savingsRows: [
      {
        category: 'Apartment Search',
        withoutService: 'Fake listings, Thai-only contracts',
        withService: 'Verified units, bilingual contracts',
        save: '$2,000–$5,000',
      },
      {
        category: 'Lease / Property Legal Review',
        withoutService: '30+30+30 fiction, nominee risk',
        withService: 'Proper legal structure',
        save: '$50,000–$300,000+',
      },
      {
        category: 'Business Setup',
        withoutService: 'Illegal nominee, FBA violation',
        withService: 'Compliant legal entity',
        save: '$5,000–$100,000+',
      },
      {
        category: 'Visa & Work Permit',
        withoutService: 'Fake agent, overstay, deportation risk',
        withService: 'Licensed immigration support',
        save: '$1,000–$5,000',
      },
      {
        category: 'Airport Transfer',
        withoutService: 'Scam taxi, gold shop detour',
        withService: 'Secure vetted private pickup',
        save: '$100–$200',
      },
      {
        category: 'Vehicle Rental',
        withoutService: 'Jet ski damage scam',
        withService: 'Trusted vetted vendors only',
        save: '$500–$2,000',
      },
      {
        category: 'Time Cost',
        withoutService: '8–12 weeks settling alone',
        withService: '1–2 weeks guided',
        save: '$4,000–$10,000',
      },
      {
        category: 'Legal & Safety Net',
        withoutService: 'No contacts, no recourse',
        withService: 'Local lawyer + network on call',
        save: 'Priceless',
      },
    ],
    totalSavingsCallout:
      'Conservative total savings: $20,000–$400,000+ | ROI: 10x–100x on a $2,000–$3,000 service',
  },
};

export function RelocationCostSection() {
  const [activeCountry, setActiveCountry] = useState<CountryKey>('vietnam');
  const [openPainPoint, setOpenPainPoint] = useState<string | null>(null);
  const countryKeys = Object.keys(relocationData) as CountryKey[];
  const countryButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeData = relocationData[activeCountry];

  const handleCountryButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + countryKeys.length) % countryKeys.length;
    setActiveCountry(countryKeys[nextIndex]);
    countryButtonRefs.current[nextIndex]?.focus();
  };

  return (
    <section id="relocation-cost" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1f2933]/15 bg-[#f5f5f7] px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#1f2933]">
            Reality Check
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1f2933]">
            The Real Cost of Relocating to Asia Alone
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Verified scam exposure, financial losses, and timeline risks for expats moving independently.
          </p>
        </div>

        <div
          className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 mb-3 pb-2 pr-4 scroll-px-4 snap-x snap-proximity"
          aria-label="Relocation country options"
          aria-describedby="relocation-country-scroll-hint"
        >
          {countryKeys.map((key, index) => {
            const country = relocationData[key];
            const isActive = activeCountry === key;
            return (
              <button
                key={key}
                ref={(element) => {
                  countryButtonRefs.current[index] = element;
                }}
                onClick={() => setActiveCountry(key)}
                onKeyDown={(event) => handleCountryButtonKeyDown(event, index)}
                aria-pressed={isActive}
                className={`snap-start flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#1f2933] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <img
                  src={country.flagImage}
                  alt={`${country.label} flag`}
                  className="h-4 w-6 rounded-sm object-cover border border-black/10"
                  loading="lazy"
                />
                <span>{country.flag}</span>
                <span>{country.label}</span>
              </button>
            );
          })}
        </div>
        <p id="relocation-country-scroll-hint" className="mb-10 text-xs text-gray-500 md:hidden">
          Scroll horizontally to see all options.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {activeData.headlineStats.map((item) => (
            <div key={item.value + item.label} className="rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#122338]">{item.value}</p>
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-[#f5f5f7] p-4 sm:p-6 lg:p-8 mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2933] mb-5">12 Pain Points</h3>
          <div className="space-y-3">
            {activeData.painPoints.map((point) => {
              const key = `${activeCountry}-${point.id}`;
              const isOpen = openPainPoint === key;
              return (
                <div key={key} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenPainPoint(isOpen ? null : key)}
                    className="w-full text-left px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-1">{point.id}</p>
                      <h4 className="text-base sm:text-lg font-bold text-[#1f2933]">{point.title}</h4>
                    </div>
                    <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-3 shrink-0">
                      <span className="rounded-full bg-red-50 border border-red-100 text-red-700 text-xs sm:text-sm font-bold px-3 py-1.5">
                        Avg Loss: {point.avgLoss}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-gray-100 bg-gray-50/60 space-y-2">
                      <p className="text-gray-700 leading-relaxed">{point.description}</p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-[#1f2933]">Stat:</span> {point.stat}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-[#1f2933]">Time Wasted:</span> {point.timeWasted}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-[#1f2933]">Source:</span> {point.source}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="min-w-0 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f2933]">Scam Statistics</h3>
            </div>
            <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <table className="w-full text-sm min-w-[560px]">
                <thead className="bg-[#f8fafc] text-[#1f2933]">
                  <tr>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold">Scam Type</th>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold">% Expats Hit</th>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold">Avg Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {activeData.scamRows.map((row) => (
                    <tr key={row.scamType} className="border-t border-gray-100 text-gray-700 align-top">
                      <td className="px-4 sm:px-6 py-3 font-medium">{row.scamType}</td>
                      <td className="px-4 sm:px-6 py-3">{row.percentHit}</td>
                      <td className="px-4 sm:px-6 py-3">{row.avgLoss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f2933]">What You Save</h3>
            </div>
            <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <table className="w-full text-sm min-w-[620px]">
                <thead className="bg-[#f8fafc] text-[#1f2933]">
                  <tr>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold">Category</th>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold">Without Service</th>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold">With Service</th>
                    <th className="text-left px-4 sm:px-6 py-3 font-semibold">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {activeData.savingsRows.map((row) => (
                    <tr key={row.category} className="border-t border-gray-100 text-gray-700 align-top">
                      <td className="px-4 sm:px-6 py-3 font-medium">{row.category}</td>
                      <td className="px-4 sm:px-6 py-3">{row.withoutService}</td>
                      <td className="px-4 sm:px-6 py-3">{row.withService}</td>
                      <td className="px-4 sm:px-6 py-3 font-semibold text-[#1f2933]">{row.save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6 text-center">
          <p className="text-lg sm:text-xl font-extrabold text-[#13543a]">{activeData.totalSavingsCallout}</p>
        </div>
      </div>
    </section>
  );
}

export default RelocationCostSection;
