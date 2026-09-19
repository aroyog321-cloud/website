import React, { useState, useEffect } from 'react';

export default function GlitchLogo({ onComplete, className = "" }) {
  const [phase, setPhase] = useState('glitching'); // 'glitching', 'stabilizing', 'clean'
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('stabilizing'), 1800);
    const t2 = setTimeout(() => {
      setPhase('clean');
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  const triggerGlitch = () => {
    if (phase === 'clean') {
      setPhase('glitching');
      setTimeout(() => setPhase('stabilizing'), 700);
      setTimeout(() => setPhase('clean'), 1200);
    }
  };

  const isGlitching = phase === 'glitching' || isHovered;

  return (
    <div 
      className={`relative inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={triggerGlitch}
      title="Click to trigger quantum glitch sequence"
    >
      {/* Outer ambient glow */}
      <div className={`absolute -inset-10 bg-blue-500/15 blur-3xl rounded-full transition-all duration-700 pointer-events-none ${
        isGlitching ? 'opacity-100 scale-110' : 'opacity-30 scale-95'
      }`} />

      {/* Main Logo Container */}
      <div className="relative flex items-center justify-center p-3">
        
        {/* Base / Clean Logo */}
        <div className={`relative flex items-center gap-4 transition-all duration-300 ${
          isGlitching ? 'opacity-90' : 'opacity-100'
        }`}>
          {/* OUTARCH Icon */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            <img 
              src="/outarch-icon.png" 
              alt="OUTARCH Logo Icon" 
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.style.display = 'block';
                }
              }}
            />
            {/* SVG Fallback */}
            <svg viewBox="0 0 100 100" className="w-full h-full hidden drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <defs>
                <linearGradient id="logo-rim-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path 
                d="M 22 18 L 78 18 C 84 18 88 22 88 28 L 88 72 C 88 78 84 82 78 82 L 22 82 C 16 82 12 78 12 72 L 12 28 C 12 22 16 18 22 18 Z" 
                fill="#0B0E14" 
                stroke="url(#logo-rim-grad)" 
                strokeWidth="3"
              />
              <polygon points="28,32 50,22 72,32 72,68 50,78 28,68" fill="none" stroke="#2563EB" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="14" fill="#0E131F" stroke="#60A5FA" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="6" fill="#3B82F6" className="animate-pulse" />
            </svg>
          </div>

          {/* Wordmark */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl md:text-5xl font-black tracking-[0.18em] text-white flex items-center">
                OUTARCH
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping opacity-75" />
            </div>
            <span className="font-mono text-[11px] md:text-xs font-semibold tracking-[0.35em] text-blue-400/90 uppercase mt-0.5">
              Developer Cockpit
            </span>
          </div>
        </div>

        {/* RGB Split Overlay 1: Cyan shift */}
        {isGlitching && (
          <div 
            className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none opacity-80 mix-blend-screen transform -translate-x-1 translate-y-0.5 animate-glitch-1 filter hue-rotate-180"
            aria-hidden="true"
          >
            <div className="flex items-center gap-4 text-cyan-400">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded border-2 border-cyan-400/80 bg-cyan-950/20" />
              <div className="flex flex-col text-left">
                <span className="font-display text-3xl md:text-5xl font-black tracking-[0.18em] text-cyan-300">
                  OUTARCH
                </span>
                <span className="font-mono text-[11px] md:text-xs tracking-[0.35em] text-cyan-400 uppercase">
                  Developer Cockpit
                </span>
              </div>
            </div>
          </div>
        )}

        {/* RGB Split Overlay 2: Magenta shift */}
        {isGlitching && (
          <div 
            className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none opacity-70 mix-blend-screen transform translate-x-1 -translate-y-0.5 animate-glitch-2 filter"
            aria-hidden="true"
          >
            <div className="flex items-center gap-4 text-pink-500">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded border-2 border-pink-500/80 bg-pink-950/20" />
              <div className="flex flex-col text-left">
                <span className="font-display text-3xl md:text-5xl font-black tracking-[0.18em] text-pink-400">
                  OUTARCH
                </span>
                <span className="font-mono text-[11px] md:text-xs tracking-[0.35em] text-pink-500 uppercase">
                  Developer Cockpit
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Scanline Beam */}
        {isGlitching && (
          <div 
            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_12px_#60A5FA] pointer-events-none animate-pulse"
            style={{ top: '50%' }}
          />
        )}
      </div>

      {/* Telemetry Status Line */}
      <div className="h-5 flex items-center justify-center mt-1">
        {phase === 'glitching' && (
          <span className="font-mono text-[10px] text-blue-400 tracking-wider flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            SYNCHRONIZING PTY DAEMON...
          </span>
        )}
        {phase === 'stabilizing' && (
          <span className="font-mono text-[10px] text-emerald-400 tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            PROTOCOL LINKED // 20 WORKERS ACTIVE
          </span>
        )}
        {phase === 'clean' && (
          <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            CLICK TO RE-CALIBRATE
          </span>
        )}
      </div>
    </div>
  );
}
