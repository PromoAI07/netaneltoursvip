import React from 'react';
import { Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#1f2933] text-white py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Netanel Tours VIP</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Your personal global luxury travel concierge. Customized trips,
              exclusive deals, and VIP support worldwide.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact me</h4>
            <div className="space-y-3">
              <a
                href="mailto:NetanelToursVip@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors">
                
                <Mail className="h-5 w-5 mr-2" />
                <span>NetanelToursVip@gmail.com</span>
              </a>
              <div className="flex items-center text-gray-400">
                <span className="text-sm">Available 24/7 for VIP clients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 Netanel Tours VIP. All rights reserved.</p>
        </div>
      </div>
    </footer>);

}