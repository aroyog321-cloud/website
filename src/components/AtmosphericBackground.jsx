import React, { useEffect, useState } from 'react';

/**
 * AtmosphericBackground
 * Premium, cinematic dark backdrop with layered depth, soft radial color fields,
 * and subtle technical coordinate grid.
 * (Deep Navy #05060A -> #080B12 with controlled Blue / Violet / Teal illumination)
 */
export default function AtmosphericBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY || window.pageYOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#05060A]" aria-hidden="true">
      {/* 1. Top Hero Atmosphere: Deep Navy + Soft Sky Blue & Violet Ambient Field */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] rounded-full blur-[140px] opacity-70 pointer-events-none transition-transform duration-700"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.14) 0%, rgba(168, 85, 247, 0.09) 45%, rgba(20, 184, 166, 0.04) 70%, transparent 85%)',
          transform: `translate3d(-50%, ${scrollY * 0.04}px, 0)`,
        }}
      />

      {/* 2. Middle Section Atmosphere: Subtle Teal & Emerald Illumination for Live Control Loop */}
      <div 
        className="absolute top-[40%] -left-[10%] w-[850px] h-[850px] rounded-full blur-[160px] opacity-50 pointer-events-none transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.10) 0%, rgba(56, 189, 248, 0.06) 50%, transparent 75%)',
          transform: `translate3d(0, ${scrollY * -0.03}px, 0)`,
        }}
      />

      {/* 3. Lower Section Atmosphere: Deep Indigo & Violet Grounding Field */}
      <div 
        className="absolute bottom-[5%] -right-[10%] w-[900px] h-[900px] rounded-full blur-[170px] opacity-45 pointer-events-none transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.10) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 80%)',
          transform: `translate3d(0, ${scrollY * 0.02}px, 0)`,
        }}
      />

      {/* 4. Technical Coordinate Grid with Soft Edge Fade */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-35 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,#000_20%,transparent_90%)]" 
      />

      {/* 5. Subtle Tactile Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
