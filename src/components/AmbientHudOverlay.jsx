import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Command } from 'lucide-react';

export default function AmbientHudOverlay({ onOpenCommandPalette }) {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 select-none hidden xl:block font-mono text-[10px] text-[#8B93A1]">
      {/* Top Left Indicator */}
      <div className="absolute top-20 left-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
        <span>OUTARCH // ENGINE v2.19.0</span>
      </div>

      {/* Top Right Indicator */}
      <div className="absolute top-20 right-6 flex items-center gap-2">
        <Shield className="w-3 h-3 text-[#8B93A1]" />
        <span>100% LOCAL SOVEREIGN</span>
      </div>

      {/* Bottom Left Indicator */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2">
        <Terminal className="w-3 h-3 text-[#8B93A1]" />
        <span>CONPTY DAEMON: BOUND</span>
      </div>

      {/* Bottom Right Live UTC Time & Command Palette Trigger */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4 pointer-events-auto">
        <span>{utcTime}</span>
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-1 px-2 py-1 rounded bg-[#0B0D11] border border-white/10 hover:border-white/20 text-[#D8DDE5] hover:text-white transition-colors"
          title="Open Command Palette"
        >
          <Command className="w-3 h-3" />
          <span>K</span>
        </button>
      </div>
    </div>
  );
}
