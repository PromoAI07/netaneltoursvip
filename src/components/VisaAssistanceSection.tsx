import React from 'react';
import { CheckCircle, FileText } from 'lucide-react';
export function VisaAssistanceSection() {
  const services = [
  {
    text: 'Tourist visa guidance for Thailand & Vietnam'
  },
  {
    text: 'E-visa direction — step-by-step to official portals'
  },
  {
    text: 'Visa extension information & options'
  },
  {
    text: 'Border run guidance & timing tips'
  },
  {
    text: 'Updated entry requirements & latest rules'
  }];

  return (
    <section
      id="visa-help"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
        'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)'
      }}>
      
      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        .passport-card {
          transform-style: preserve-3d;
          perspective: 1000px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .visa-stamp {
          mask-image: radial-gradient(black, transparent 70%);
          -webkit-mask-image: radial-gradient(black, transparent 70%);
        }
      `}</style>

      {/* ─── Background Decorations ─── */}

      {/* Floating Passport 1 (Left) */}
      <div
        className="absolute top-20 left-[-40px] md:left-10 w-32 h-44 bg-[#1a4731] rounded-lg border-2 border-yellow-400/70 passport-card hidden sm:flex flex-col items-center justify-start pt-4 z-0"
        style={{
          transform: 'rotateY(15deg) rotateX(10deg) rotateZ(-10deg)',
          animation: 'float 6s ease-in-out infinite',
          opacity: 0.85,
          boxShadow:
          '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(250,204,21,0.15)'
        }}
        aria-hidden="true">
        
        <div className="text-[10px] text-yellow-300 font-serif tracking-widest mb-2 font-bold">
          PASSPORT
        </div>
        <div className="w-16 h-16 rounded-full border border-yellow-400/50 bg-white/10 flex items-center justify-center mb-4 overflow-hidden">
          <img
            src="https://flagcdn.com/w80/th.png"
            alt="Thailand flag"
            className="w-12 h-8 object-cover rounded" />
          
        </div>
        <div className="text-[9px] text-yellow-200 tracking-widest font-bold mb-2">
          THAILAND
        </div>
        <div className="w-20 h-0.5 bg-yellow-400/40 mb-1"></div>
        <div className="w-14 h-0.5 bg-yellow-400/30"></div>
      </div>

      {/* Floating Passport 2 (Right) */}
      <div
        className="absolute bottom-40 right-[-20px] md:right-20 w-32 h-44 bg-[#3a1a1a] rounded-lg border-2 border-yellow-400/70 passport-card hidden sm:flex flex-col items-center justify-start pt-4 z-0"
        style={{
          transform: 'rotateY(-15deg) rotateX(5deg) rotateZ(10deg)',
          animation: 'float-delayed 7s ease-in-out infinite',
          animationDelay: '1s',
          opacity: 0.85,
          boxShadow:
          '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(250,204,21,0.15)'
        }}
        aria-hidden="true">
        
        <div className="text-[10px] text-yellow-300 font-serif tracking-widest mb-2 font-bold">
          PASSPORT
        </div>
        <div className="w-16 h-16 rounded-full border border-yellow-400/50 bg-white/10 flex items-center justify-center mb-4 overflow-hidden">
          <img
            src="https://flagcdn.com/w80/vn.png"
            alt="Vietnam flag"
            className="w-12 h-8 object-cover rounded" />
          
        </div>
        <div className="text-[9px] text-yellow-200 tracking-widest font-bold mb-2">
          VIETNAM
        </div>
        <div className="w-20 h-0.5 bg-yellow-400/40 mb-1"></div>
        <div className="w-14 h-0.5 bg-yellow-400/30"></div>
      </div>

      {/* Blurred Visa Stamp 1 */}
      <div
        className="absolute top-10 right-10 w-64 h-64 rounded-full border-4 border-white/5 flex items-center justify-center rotate-12 opacity-10 pointer-events-none select-none"
        aria-hidden="true">
        
        <div className="w-56 h-56 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center">
          <span className="text-4xl font-black text-white/10 tracking-widest rotate-[-15deg]">
            APPROVED
          </span>
        </div>
      </div>

      {/* Blurred Visa Stamp 2 */}
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full border-4 border-white/5 flex items-center justify-center -rotate-12 opacity-10 pointer-events-none select-none"
        aria-hidden="true">
        
        <div className="w-72 h-72 rounded-full border-2 border-double border-white/10 flex items-center justify-center">
          <span className="text-4xl font-black text-white/10 tracking-widest rotate-[15deg]">
            ENTRY
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          {/* Flag icons */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg overflow-hidden p-2">
                <img
                  src="https://flagcdn.com/w160/th.png"
                  alt="Thailand flag"
                  className="w-full h-full object-cover rounded-lg" />
                
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">
                Thailand
              </span>
            </div>
            <span className="text-white/40 text-2xl font-light pb-6">×</span>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg overflow-hidden p-2">
                <img
                  src="https://flagcdn.com/w160/vn.png"
                  alt="Vietnam flag"
                  className="w-full h-full object-cover rounded-lg" />
                
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">
                Vietnam
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-lg">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-200">
              Official Visa Guidance
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Visa Help for Your Move to
            <br className="hidden sm:block" />{' '}
            <span className="text-yellow-300">Thailand or Vietnam</span>
          </h2>
          <p className="text-blue-100/90 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Don't get stuck at immigration. I'll guide you to the right official
            channels and trusted visa solutions for foreigners relocating to Asia.
          </p>
        </div>

        {/* Main card - Frosted Glass */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden relative group">
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            {/* Left: Services list */}
            <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/20">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-300" />
                What I Can Help With
              </h3>
              <ul className="space-y-5">
                {services.map((service, index) =>
                <li key={index} className="flex items-start gap-4 group/item">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-blue-500/40 transition-colors">
                      <CheckCircle className="h-3.5 w-3.5 text-blue-200" />
                    </div>
                    <span className="text-gray-200 text-base leading-snug font-light group-hover/item:text-white transition-colors">
                      {service.text}
                    </span>
                  </li>
                )}
              </ul>

              {/* Disclaimer */}
              <div className="mt-10 p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-gray-400 leading-relaxed">
                  <span className="font-semibold text-blue-200">Note:</span> I
                  do not issue visas. I provide guidance and direct you to the
                  right official channels and trusted resources for the visa you
                  need.
                </p>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                Get visa guidance for Thailand or Vietnam — directed to the right place fast.
              </h3>
              <p className="text-gray-300 text-base mb-10 leading-relaxed font-light">
                Whether you're relocating long-term to Thailand or planning an extended stay in
                Vietnam, I'll point you to the correct visa options — quickly and clearly.
              </p>

              {/* Primary CTA */}
              <a
                href="https://wa.me/972529566211?text=Hi%20I%20would%20like%20some%20help%20with%20visa%20related,%20thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-white text-lg hover:opacity-90 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/20 mb-6 relative overflow-hidden group/btn"
                style={{
                  backgroundColor: '#25D366'
                }}>
                
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <svg
                  className="w-6 h-6 flex-shrink-0 relative z-10"
                  viewBox="0 0 24 24"
                  fill="white">
                  
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10">Message Me on WhatsApp</span>
              </a>

              <p className="text-xs text-center text-gray-400 font-medium tracking-wide uppercase">
                Available 24/7 · Fast response · Free guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}