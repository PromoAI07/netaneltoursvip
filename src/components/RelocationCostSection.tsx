import { useState } from 'react';
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
    headlineStats: [
      { value: '60%', label: 'Thais and expats hit by fraud in 2024' },
      { value: '$350,000+', label: 'Average illegal nominee property loss when seized' },
      { value: '49,000', label: 'Businesses currently under nominee investigation' },
    ],
    painPoints: Array.from({ length: 12 }, (_, index) => ({
      id: `#${String(index + 1).padStart(2, '0')}`,
      title:
        index === 0
          ? 'Fake Apartment & Condo Listings'
          : `Thailand Pain Point ${String(index + 1).padStart(2, '0')}`,
      avgLoss: 'Not listed in provided extract',
      description:
        index === 0
          ? 'Scammers post stolen photos... (full details as provided in the source brief)'
          : 'Full Thailand pain point details are referenced in the provided source brief.',
      stat: 'Not listed in provided extract',
      timeWasted: 'Not listed in provided extract',
      source: 'Provided Thailand source brief',
    })),
    scamRows: [
      {
        scamType: 'Fraud exposure (2024)',
        percentHit: '60% of Thais and expats',
        avgLoss: 'Not listed in provided extract',
      },
      {
        scamType: 'Illegal nominee property seizure',
        percentHit: 'Not listed in provided extract',
        avgLoss: '$350,000+',
      },
      {
        scamType: 'Businesses under nominee investigation',
        percentHit: '49,000 businesses',
        avgLoss: 'Not listed in provided extract',
      },
    ],
    savingsRows: [
      {
        category: 'Thailand savings breakdown',
        withoutService: 'Full per-category details are in the provided source brief',
        withService: 'Full per-category details are in the provided source brief',
        save: 'See source brief',
      },
    ],
    totalSavingsCallout: 'Thailand total savings and ROI callout follow the full source brief values provided for this section.',
  },
};

export function RelocationCostSection() {
  const [activeCountry, setActiveCountry] = useState<CountryKey>('vietnam');
  const [openPainPoint, setOpenPainPoint] = useState<string | null>('vietnam-#01');

  const activeData = relocationData[activeCountry];

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

        <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 mb-10 pb-2">
          {(Object.keys(relocationData) as CountryKey[]).map((key) => {
            const country = relocationData[key];
            const isActive = activeCountry === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCountry(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#1f2933] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>{country.flag}</span>
                <span>{country.label}</span>
              </button>
            );
          })}
        </div>

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
                    className="w-full text-left px-4 sm:px-6 py-4 flex items-start sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-1">{point.id}</p>
                      <h4 className="text-base sm:text-lg font-bold text-[#1f2933]">{point.title}</h4>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
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
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f2933]">Scam Statistics</h3>
            </div>
            <div className="overflow-x-auto">
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

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f2933]">What You Save</h3>
            </div>
            <div className="overflow-x-auto">
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
