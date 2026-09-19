import React, { useEffect, useState } from 'react';
import { useCockpit } from '../context/CockpitContext';

/**
 * AtmosphericNebula
 * High-voltage Cyberpunk Obsidian Atmosphere:
 * - Multi-tiered cosmic aurora fields (Cyan, Magenta, Violet, Emerald)
 * - Perspective coordinate tech grid with dynamic opacity pulse
 * - Fixed fine grain noise texture overlay
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

  // Theme Gradients with rich saturation
  const getThemeGradients = () => {
    switch (activeTheme) {
      case 'supernova':
        return {
          orb1: 'radial-gradient(circle at center, rgba(244, 63, 94, 0.45) 0%, rgba(249, 115, 22, 0.25) 45%, transparent 70%)',
          orb2: 'radial-gradient(circle at center, rgba(234, 179, 8, 0.40) 0%, rgba(239, 68, 68, 0.20) 50%, transparent 75%)',
          orb3: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.35) 0%, rgba(244, 63, 94, 0.20) 50%, transparent 70%)',
        };
      case 'matrix':
        return {
          orb1: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.45) 0%, rgba(16, 185, 129, 0.25) 45%, transparent 70%)',
          orb2: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.40) 0%, rgba(34, 197, 94, 0.20) 50%, transparent 75%)',
          orb3: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.20) 50%, transparent 70%)',
        };
      case 'cyberpunk':
        return {
          orb1: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.50) 0%, rgba(168, 85, 247, 0.30) 45%, transparent 70%)',
          orb2: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.50) 0%, rgba(59, 130, 246, 0.25) 50%, transparent 75%)',
          orb3: 'radial-gradient(circle at center, rgba(244, 63, 94, 0.40) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 70%)',
        };
      default:
        // High-Energy Default Cyberpunk Cyan/Magenta/Violet
        return {
          orb1: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.35) 0%, rgba(56, 189, 248, 0.18) 45%, transparent 70%)',
          orb2: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.32) 0%, rgba(168, 85, 247, 0.18) 50%, transparent 75%)',
          orb3: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.30) 0%, rgba(0, 240, 255, 0.15) 50%, transparent 70%)',
        };
    }
  };

  const gradients = getThemeGradients();

  return (
    <>
      {/* 1. Base Layer + Multi-Orb Atmosphere */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#050608]"
        aria-hidden="true"
      >
        {/* Orb 1: Top-Left Neon Cyan Aurora (Pulse & Drift) */}
        <div
          className="absolute -top-[10%] -left-[10%] w-[900px] h-[900px] rounded-full blur-[140px] animate-orb-pulse-1 transition-all duration-700 pointer-events-none"
          style={{
            background: gradients.orb1,
            transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
          }}
        />

        {/* Orb 2: Bottom-Right Laser Magenta Aurora (Pulse & Drift) */}
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[1000px] h-[1000px] rounded-full blur-[150px] animate-orb-pulse-2 transition-all duration-700 pointer-events-none"
          style={{
            background: gradients.orb2,
            transform: `translate3d(0, ${scrollY * -0.04}px, 0)`,
          }}
        />

        {/* Orb 3: Center-Bottom Electric Violet Nebula */}
        <div
          className="absolute top-[40%] left-[20%] w-[850px] h-[850px] rounded-full blur-[160px] animate-orb-pulse-3 transition-all duration-700 pointer-events-none"
          style={{
            background: gradients.orb3,
            transform: `translate3d(0, ${scrollY * 0.02}px, 0)`,
          }}
        />

        {/* Layer 3: Tech Coordinate Grid with Perspective Fade Mask */}
        <div 
          className="absolute inset-0 bg-tech-grid opacity-45 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_45%,#000_20%,transparent_90%)]" 
        />

        {/* Subtle Horizontal Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 240, 255, 0.03) 3px, rgba(0, 240, 255, 0.03) 4px)'
          }}
        />
      </div>

      {/* Layer 4: Fixed Physical SVG Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.035] mix-blend-screen select-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </>
  );
}
