import React, { useState, useEffect } from 'react';

export default function GlitchLogo({ onComplete, className = "" }) {
  const [phase, setPhase] = useState('glitching'); // 'dormant', 'glitching', 'reconstructing', 'clean'
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial boot sequence
    const t1 = setTimeout(() => setPhase('glitching'), 200);
    const t2 = setTimeout(() => setPhase('reconstructing'), 2200);
    const t3 = setTimeout(() => {
      setPhase('clean');
      if (onComplete) onComplete();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const triggerGlitch = () => {
    if (phase === 'clean') {
      setPhase('glitching');
      setTimeout(() => setPhase('reconstructing'), 800);
      setTimeout(() => setPhase('clean'), 1300);
    }
  };

  const isGlitching = phase === 'glitching' || isHovered;
  const isReconstructing = phase === 'reconstructing';

  return (
    <div 
      className={`relative inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={triggerGlitch}
      title="Click to trigger quantum glitch sequence"
    >
      {/* Outer ambient glow */}
      <div className={`absolute -inset-8 bg-blue-500/10 blur-2xl rounded-full transition-opacity duration-700 pointer-events-none ${
        isGlitching ? 'opacity-90 scale-110' : 'opacity-20'
      }`} />

      {/* Main Logo Container */}
      <div className="relative flex items-center justify-center p-4">
        
        {/* Base / Clean Logo */}
        <div className={`relative flex items-center gap-4 transition-all duration-500 ${
          isGlitching ? 'opacity-85' : 'opacity-100'
        }`}>
          {/* OUTARCH Cockpit Shield Icon */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            {/* Primary SVG Logo Symbol */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <defs>
                <linearGradient id="logo-core-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="logo-rim-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Outer structural shield bracket */}
              <path 
                d="M 22 18 L 78 18 C 84 18 88 22 88 28 L 88 72 C 88 78 84 82 78 82 L 22 82 C 16 82 12 78 12 72 L 12 28 C 12 22 16 18 22 18 Z" 
                fill="#0B0E14" 
                stroke="url(#logo-rim-grad)" 
                strokeWidth="3"
              />
              {/* Internal aperture blades representing developer command center */}
              <polygon points="28,32 50,22 72,32 72,68 50,78 28,68" fill="none" stroke="#2563EB" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="14" fill="#0E131F" stroke="#60A5FA" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="6" fill="#3B82F6" className="animate-pulse" />
              {/* Telemetry tick marks */}
              <line x1="50" y1="22" x2="50" y2="30" stroke="#93C5FD" strokeWidth="2" />
              <line x1="50" y1="70" x2="50" y2="78" stroke="#93C5FD" strokeWidth="2" />
              <line x1="28" y1="50" x2="36" y2="50" stroke="#93C5FD" strokeWidth="2" />
              <line x1="64" y1="50" x2="72" y2="50" stroke="#93C5FD" strokeWidth="2" />
            </svg>
          </div>

          {/* Wordmark */}
          <div className="flex flex-col">
            <span className="font-mono text-3xl md:text-5xl font-black tracking-[0.2em] text-white flex items-center">
              OUTARCH
              <span className="inline-block w-2.5 h-2.5 ml-2 bg-blue-500 rounded-full animate-ping opacity-75" />
            </span>
            <span className="font-mono text-xs md:text-sm font-semibold tracking-[0.35em] text-blue-400/80 uppercase mt-0.5">
              Developer Cockpit
            </span>
          </div>
        </div>

        {/* RGB Split Overlay 1: Cyan / Blue Shift */}
        {isGlitching && (
          <div 
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none opacity-80 mix-blend-screen transform -translate-x-1.5 translate-y-0.5 animate-glitch-1 filter hue-rotate-180"
            aria-hidden="true"
          >
            <div className="flex items-center gap-4 text-cyan-400">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded border-2 border-cyan-400/80 bg-cyan-950/20" />
              <div className="flex flex-col">
                <span className="font-mono text-3xl md:text-5xl font-black tracking-[0.2em] text-cyan-300">
                  OUTARCH
                </span>
                <span className="font-mono text-xs md:text-sm tracking-[0.35em] text-cyan-400 uppercase">
                  Developer Cockpit
                </span>
              </div>
            </div>
          </div>
        )}

        {/* RGB Split Overlay 2: Magenta / Red Shift */}
        {isGlitching && (
          <div 
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none opacity-70 mix-blend-screen transform translate-x-1.5 -translate-y-0.5 animate-glitch-2 filter"
            aria-hidden="true"
          >
            <div className="flex items-center gap-4 text-pink-500">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded border-2 border-pink-500/80 bg-pink-950/20" />
              <div className="flex flex-col">
                <span className="font-mono text-3xl md:text-5xl font-black tracking-[0.2em] text-pink-400">
                  OUTARCH
                </span>
                <span className="font-mono text-xs md:text-sm tracking-[0.35em] text-pink-500 uppercase">
                  Developer Cockpit
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Scanline Beam Sweep */}
        {isGlitching && (
          <div 
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/90 to-transparent shadow-[0_0_15px_#60A5FA] pointer-events-none animate-pulse"
            style={{ top: `${(Math.sin(Date.now() / 200) + 1) * 45}%` }}
          />
        )}
      </div>

      {/* Reconstructing Status line */}
      <div className="h-5 flex items-center justify-center mt-1">
        {phase === 'glitching' && (
          <span className="font-mono text-[11px] text-blue-400 tracking-wider flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            SYNCHRONIZING PROTOCOL V1...
          </span>
        )}
        {phase === 'reconstructing' && (
          <span className="font-mono text-[11px] text-emerald-400 tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            STABILIZED // ENGINE LINKED
          </span>
        )}
        {phase === 'clean' && (
          <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            CLICK TO RE-CALIBRATE
          </span>
        )}
      </div>
    </div>
  );
}
