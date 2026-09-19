import React, { useEffect, useState } from 'react';

/**
 * AtmosphericNebula
 * 1. Multi-layered ambient drifting radial gradients (Purple, Blue, Emerald, Indigo)
 * 2. Subtle fixed-position SVG noise/grain filter to give tactile physical depth
 * 3. Parallax scroll depth separating atmospheric glows from foreground UI
 */
export default function AtmosphericNebula() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

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
    <>
      {/* 1. Multi-Layered Animated Nebula Mesh */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
        aria-hidden="true"
      >
        {/* Layer A: Top-Left AI Purple Nebula (Drifting + Parallax) */}
        <div
          className="absolute -top-[20%] -left-[10%] w-[900px] h-[900px] rounded-full opacity-[0.14] blur-[130px] animate-nebula-drift-1"
          style={{
            background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.8) 0%, rgba(139, 92, 246, 0.4) 45%, transparent 70%)',
            transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
          }}
        />

        {/* Layer B: Top-Right Blue Observing Nebula (Drifting + Parallax) */}
        <div
          className="absolute top-[5%] -right-[15%] w-[950px] h-[950px] rounded-full opacity-[0.13] blur-[140px] animate-nebula-drift-2"
          style={{
            background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 75%)',
            transform: `translate3d(0, ${scrollY * -0.05}px, 0)`,
          }}
        />

        {/* Layer C: Mid-Left Emerald / Cyan Horizon Glow */}
        <div
          className="absolute top-[45%] -left-[15%] w-[850px] h-[850px] rounded-full opacity-[0.09] blur-[150px] animate-nebula-drift-3"
          style={{
            background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.7) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 70%)',
            transform: `translate3d(0, ${scrollY * 0.04}px, 0)`,
          }}
        />

        {/* Layer D: Bottom-Right Deep Violet / Indigo Core */}
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[1000px] h-[1000px] rounded-full opacity-[0.12] blur-[160px] animate-nebula-drift-1"
          style={{
            background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.8) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 75%)',
            transform: `translate3d(0, ${scrollY * -0.06}px, 0)`,
          }}
        />

        {/* Layer E: Ultra-Subtle Vignetted Technical Coordinate Grid */}
        <div 
          className="absolute inset-0 bg-tech-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_20%,transparent_90%)]" 
        />
      </div>

      {/* 2. Fixed-Position Tactile Film Noise Texture Filter */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.038] mix-blend-screen select-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </>
  );
}
