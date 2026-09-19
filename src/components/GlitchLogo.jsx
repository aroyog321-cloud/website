import React from 'react';

/**
 * BrandLogo / GlitchLogo
 * Premium, polished brand lockup featuring the official OUTARCH icon and typography.
 * Supports compact mode for Navbar/Footer and display mode for Hero.
 */
export default function GlitchLogo({ className = "", size = "normal" }) {
  const isCompact = size === "compact";

  return (
    <div className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {/* OUTARCH Icon Badge */}
      <div className={`relative ${isCompact ? 'w-7 h-7' : 'w-10 h-10'} rounded-lg bg-[#0A0E17] border border-white/15 p-1 flex items-center justify-center group-hover:border-sky-500/40 transition-all duration-200 shadow-sm`}>
        <img 
          src="/outarch-icon.png" 
          alt="OUTARCH Logo" 
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Wordmark Lockup */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2">
          <span className={`font-display ${isCompact ? 'text-sm' : 'text-xl'} font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors`}>
            OUTARCH
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-90" />
        </div>
        {!isCompact && (
          <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase font-medium">
            Developer Command Center
          </span>
        )}
      </div>
    </div>
  );
}
