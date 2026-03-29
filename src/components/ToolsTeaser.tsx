import React from 'react';
import {
  Smartphone,
  CheckSquare,
  Calculator,
  Shield,
  ArrowRight } from
'lucide-react';
interface ToolsTeaserProps {
  onNavigate: (page: string) => void;
}
export function ToolsTeaser({ onNavigate }: ToolsTeaserProps) {
  const tools = [
  {
    title: 'Country App Finder',
    description:
    'Discover the best local apps for food, rides, and payments.',
    icon: Smartphone,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Packing Checklist',
    description:
    'Smart packing lists tailored to your trip type and duration.',
    icon: CheckSquare,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  {
    title: 'Budget Calculator',
    description:
    'Estimate daily costs for accommodation, food, and transport.',
    icon: Calculator,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    title: 'Visa Quick Check',
    description:
    'Instantly check visa requirements and official application links.',
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
            Traveler Tools 🔧
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Interactive tools to help you plan smarter — app finder, packing
            lists, budget calculator, and visa checker.
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
            
            Explore All Tools
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>);

}