import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const gyroTarget = useRef({
    x: 0,
    y: 0
  });
  const gyroCurrent = useRef({
    x: 0,
    y: 0
  });
  const rafRef = useRef<number | null>(null);
  const [gyroOffset, setGyroOffset] = useState({
    x: 0,
    y: 0
  });
  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Gyroscope + mouse fallback with smooth lerp
  useEffect(() => {
    const MAX_SHIFT = 60; // max px the image can shift in any direction
    // Smooth animation loop (lerp) — throttled to ~30fps on mobile
    const isMobile = window.innerWidth < 768;
    const frameInterval = isMobile ? 2 : 1; // skip every other frame on mobile
    let frameCount = 0;
    const animate = () => {
      frameCount++;
      if (frameCount % frameInterval === 0) {
        const lerpFactor = 0.12;
        gyroCurrent.current.x +=
        (gyroTarget.current.x - gyroCurrent.current.x) * lerpFactor;
        gyroCurrent.current.y +=
        (gyroTarget.current.y - gyroCurrent.current.y) * lerpFactor;
        setGyroOffset({
          x: gyroCurrent.current.x,
          y: gyroCurrent.current.y
        });
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    // Device orientation (gyroscope) — image moves OPPOSITE to tilt
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0; // left/right tilt (-90 to 90)
      const beta = e.beta ?? 0; // forward/back tilt (-180 to 180)
      // Clamp and normalize: tilt right → image goes left (negative x)
      const clampedGamma = Math.max(-30, Math.min(30, gamma));
      const clampedBeta = Math.max(-30, Math.min(30, beta - 20)); // offset for natural hold angle
      gyroTarget.current.x = -(clampedGamma / 30) * MAX_SHIFT;
      gyroTarget.current.y = -(clampedBeta / 30) * (MAX_SHIFT * 0.6);
    };
    // Mouse parallax fallback for desktop
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx; // -1 to 1
      const dy = (e.clientY - cy) / cy; // -1 to 1
      gyroTarget.current.x = -dx * MAX_SHIFT;
      gyroTarget.current.y = -dy * (MAX_SHIFT * 0.6);
    };
    // iOS 13+ requires permission
    const requestGyro = async () => {
      if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof (DeviceOrientationEvent as any).requestPermission === 'function')
      {
        try {
          const permission = await (
          DeviceOrientationEvent as any).
          requestPermission();
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation, {
              passive: true
            });
          }
        } catch {
          // Permission denied or not available — use mouse fallback
          window.addEventListener('mousemove', handleMouseMove, {
            passive: true
          });
        }
      } else if (window.DeviceOrientationEvent) {
        // Android / non-iOS — no permission needed
        window.addEventListener('deviceorientation', handleOrientation, {
          passive: true
        });
      } else {
        // Desktop fallback
        window.addEventListener('mousemove', handleMouseMove, {
          passive: true
        });
      }
    };
    requestGyro();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element)
    element.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      className="relative w-full bg-[#1f2933] overflow-hidden"
      style={{
        minHeight: '100svh'
      }}>
      
      {/* Background Image — gyro + scroll parallax */}
      <div
        className="absolute z-0"
        style={{
          top: '-20%',
          left: '-20%',
          right: '-20%',
          bottom: '-20%',
          transform: `translateX(${gyroOffset.x}px) translateY(${scrollY * 0.3 + gyroOffset.y}px)`,
          willChange: 'transform',
          transition: 'none'
        }}>
        
        <img
          src="/1000133315.png"
          alt="World travel destinations collage"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
          width="1920"
          height="1080" />
        
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-32 min-h-[100svh]">
        <span className="text-white/70 text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6">
          Your Relocation Partner in Asia
        </span>

        {/* Silver radiant shine title */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight max-w-5xl mx-auto leading-tight"
          style={{
            background:
            'linear-gradient(90deg, #c0c0c0 0%, #f8f8f8 25%, #ffffff 50%, #f0f0f0 75%, #a8a8a8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 2px 12px rgba(255,255,255,0.25))'
          }}>

          Move to Asia.
          <br />
          Skip the Mistakes.
        </h1>

        {/* Sub-headline */}
        <p
          className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          style={{
            textShadow:
            '0 1px 12px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7)'
          }}>

          I live in Southeast Asia and help people relocate — visas, housing,
          local setup, and everything in between. Save months of confusion
          and thousands in avoidable mistakes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto">
          <button
            onClick={() => scrollToSection('relocate')}
            className="flex-1 bg-white text-[#1f2933] px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">

            Relocate to Asia <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="flex-1 border border-white/80 text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">

            Travel Tools
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/50" />
      </div>
    </section>);

}