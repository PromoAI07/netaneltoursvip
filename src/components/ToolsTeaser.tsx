import {
  Smartphone,
  CheckSquare,
  Calculator,
  Shield,
  ArrowRight } from
'lucide-react';
import { useLanguage } from '../i18n';
interface ToolsTeaserProps {
  onNavigate: (page: string) => void;
}
export function ToolsTeaser({ onNavigate }: ToolsTeaserProps) {
  const { t } = useLanguage();
  const tools = [
  {
    title: t('tools.appFinder'),
    description: t('tools.appFinderDesc'),
    icon: Smartphone,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: t('tools.packingChecklist'),
    description: t('tools.packingDesc'),
    icon: CheckSquare,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  {
    title: t('tools.budgetCalc'),
    description: t('tools.budgetDesc'),
    icon: Calculator,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    title: t('tools.visaCheck'),
    description: t('tools.visaCheckDesc'),
    icon: Shield,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }];

  return (
    <section
      id="travel-toolbox"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2933] mb-4">
            {t('tools.heading')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t('tools.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool, index) =>
          <div
            key={index}
            onClick={() => onNavigate('tools')}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#4b5563] transition-all duration-300 cursor-pointer group flex flex-col items-center text-center">
            
              <div
              className={`w-16 h-16 rounded-full ${tool.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              
                <tool.icon className={`h-8 w-8 ${tool.color}`} />
              </div>
              <h3 className="text-xl font-bold text-[#1f2933] mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('tools')}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1f2933] text-white font-bold rounded-md hover:bg-[#374151] transition-colors group">
            
            {t('tools.exploreAll')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>);

}