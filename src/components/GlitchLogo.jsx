import React, { useState, useEffect } from 'react';

/**
 * GlitchLogo
 * Premium glitch logo component supporting both compact and display modes,
 * featuring real chromatic RGB split layers and scanline pulses.
 */
export default function GlitchLogo({ onComplete, className = "", size = "normal" }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Periodic random micro-glitches
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 350);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 600);
  };

  const isCompact = size === "compact";

  return (
    <div 
      className={`relative inline-flex items-center select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
      onClick={triggerGlitch}
      title="Click to trigger quantum glitch calibration"
    >
      {/* Outer ambient glow */}
      <div className={`absolute -inset-4 bg-cyan-500/20 blur-xl rounded-full transition-all duration-500 pointer-events-none ${
        isGlitching ? 'opacity-100 scale-110' : 'opacity-20 scale-95'
      }`} />

      {/* Main Container */}
      <div className="relative flex items-center gap-3">
        
        {/* OUTARCH Icon Avatar */}
        <div className={`relative ${isCompact ? 'w-8 h-8' : 'w-10 h-10 md:w-12 md:h-12'} flex items-center justify-center`}>
          <img 
            src="/assets/outarch-glitch-icon.png" 
            alt="OUTARCH Logo" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform"
            onError={(e) => {
              e.target.src = '/outarch-icon.png';
            }}
          />

          {/* RGB Split Slice 1 (Cyan) */}
          {isGlitching && (
            <div className="absolute inset-0 opacity-80 mix-blend-screen -translate-x-1 translate-y-0.5 animate-glitch-1 filter hue-rotate-180 pointer-events-none">
              <img src="/assets/outarch-glitch-icon.png" alt="" className="w-full h-full object-contain" />
            </div>
          )}

          {/* RGB Split Slice 2 (Magenta) */}
          {isGlitching && (
            <div className="absolute inset-0 opacity-70 mix-blend-screen translate-x-1 -translate-y-0.5 animate-glitch-2 pointer-events-none">
              <img src="/assets/outarch-glitch-icon.png" alt="" className="w-full h-full object-contain" />
            </div>
          )}
        </div>

        {/* Wordmark */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-display ${isCompact ? 'text-sm' : 'text-lg md:text-2xl'} font-black tracking-[0.12em] text-white flex items-center group-hover:text-cyan-300 transition-colors`}>
              OUTARCH
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-80" />
          </div>
          {!isCompact && (
            <span className="font-mono text-[9px] md:text-[10px] font-semibold tracking-[0.25em] text-cyan-400/90 uppercase">
              Command Cockpit
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
