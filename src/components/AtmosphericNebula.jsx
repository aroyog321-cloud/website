import React, { useEffect, useState } from 'react';
import { useCockpit } from '../context/CockpitContext';

/**
 * Advanced Atmospheric Background Architecture:
 * Layer 1 (The Base): #07090E with fixed SVG noise filter overlay (opacity 2.8%)
 * Layer 2 (The Atmosphere): 3 large, slowly drifting and pulsing ambient orbs with theme reactivity
 * Layer 3 (The Grid): Coordinate grid with linear/radial alpha mask fading toward all screen edges
 */
export default function AtmosphericNebula() {
  const [scrollY, setScrollY] = useState(0);
  const { activeTheme } = useCockpit();

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

  // Theme Gradients
  const getThemeGradients = () => {
    switch (activeTheme) {
      case 'supernova':
        return {
          orb1: 'radial-gradient(circle at center, rgba(244, 63, 94, 0.9) 0%, rgba(249, 115, 22, 0.5) 45%, transparent 70%)',
          orb2: 'radial-gradient(circle at center, rgba(234, 179, 8, 0.85) 0%, rgba(239, 68, 68, 0.45) 50%, transparent 75%)',
          orb3: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.8) 0%, rgba(244, 63, 94, 0.4) 50%, transparent 70%)',
        };
      case 'matrix':
        return {
          orb1: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.95) 0%, rgba(16, 185, 129, 0.5) 45%, transparent 70%)',
          orb2: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.85) 0%, rgba(34, 197, 94, 0.4) 50%, transparent 75%)',
          orb3: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.4) 50%, transparent 70%)',
        };
      case 'cyberpunk':
        return {
          orb1: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.9) 0%, rgba(168, 85, 247, 0.5) 45%, transparent 70%)',
          orb2: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.9) 0%, rgba(59, 130, 246, 0.45) 50%, transparent 75%)',
          orb3: 'radial-gradient(circle at center, rgba(244, 63, 94, 0.8) 0%, rgba(139, 92, 246, 0.4) 50%, transparent 70%)',
        };
      default:
        return {
          orb1: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.9) 0%, rgba(139, 92, 246, 0.45) 45%, transparent 70%)',
          orb2: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.85) 0%, rgba(99, 102, 241, 0.4) 50%, transparent 75%)',
          orb3: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.75) 0%, rgba(6, 182, 212, 0.35) 50%, transparent 70%)',
        };
    }
  };

  const gradients = getThemeGradients();

  return (
    <>
      {/* 1. Base Layer + Multi-Orb Atmosphere */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#07090E]"
        aria-hidden="true"
      >
        {/* Orb 1: Top-Left Ambient Orb (Pulse & Drift) */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[850px] h-[850px] rounded-full opacity-[0.15] blur-[140px] animate-orb-pulse-1 transition-all duration-700"
          style={{
            background: gradients.orb1,
            transform: `translate3d(0, ${scrollY * 0.06}px, 0)`,
          }}
        />

        {/* Orb 2: Bottom-Right Ambient Orb (Pulse & Drift) */}
        <div
          className="absolute -bottom-[15%] -right-[10%] w-[950px] h-[950px] rounded-full opacity-[0.14] blur-[150px] animate-orb-pulse-2 transition-all duration-700"
          style={{
            background: gradients.orb2,
            transform: `translate3d(0, ${scrollY * -0.05}px, 0)`,
          }}
        />

        {/* Orb 3: Center-Bottom Ambient Orb (Pulse & Drift) */}
        <div
          className="absolute top-[60%] left-[25%] w-[800px] h-[800px] rounded-full opacity-[0.10] blur-[160px] animate-orb-pulse-3 transition-all duration-700"
          style={{
            background: gradients.orb3,
            transform: `translate3d(0, ${scrollY * 0.03}px, 0)`,
          }}
        />

        {/* Layer 3: Tech Grid with Radial Edge Fade-Out Mask */}
        <div 
          className="absolute inset-0 bg-tech-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_15%,transparent_85%)]" 
        />
      </div>

      {/* Layer 1 Overprint: Fixed Physical SVG Noise Overlay (2.8% Opacity) */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.028] mix-blend-screen select-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </>
  );
}
