import React from 'react';
import { Play, Shield, Terminal, ArrowRight, Sparkles } from 'lucide-react';

export default function BrandMomentSection({ onOpenReel }) {
  return (
    <section className="py-28 bg-[#050608] border-b border-[#c3d3e4]/10 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[#a9ddc4]/3 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Showcase Area */}
        <div className="flex flex-col items-center text-center space-y-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c3d3e4]/15 bg-[#10131A] text-[11px] font-mono text-[#95a2b1]">
            <Sparkles className="w-3.5 h-3.5 text-[#afc6f3]" />
            <span>THE OUTARCH IDENTITY</span>
          </div>

          {/* Glitch Wordmark Hero */}
          <div className="relative py-8 px-6 group cursor-pointer" onClick={onOpenReel}>
            <div className="max-w-2xl mx-auto">
              <img 
                src="/outarch-wordmark.png" 
                alt="OUTARCH Wordmark" 
                className="w-full max-w-xl mx-auto drop-shadow-[0_0_35px_rgba(169,221,196,0.15)] group-hover:drop-shadow-[0_0_50px_rgba(175,198,243,0.3)] transition-all duration-300"
              />
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#afc6f3] opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-3.5 h-3.5" />
              <span>Click to view cinematic logo animation reel</span>
            </div>
          </div>

          {/* Slogan */}
          <div className="max-w-3xl space-y-3">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              BUILD WITHOUT LOSING CONTROL.
            </h3>
            <p className="text-[#95a2b1] text-sm sm:text-base font-mono max-w-xl mx-auto">
              The developer command center engineered for observation, execution, orchestration, and calm resolution.
            </p>
          </div>

          {/* Brand Grid: App Icon, Brand Sheet & Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-left font-mono text-xs mt-8">
            
            <div className="p-5 rounded-xl bg-[#0B0D11] border border-[#c3d3e4]/10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#10131A] border border-[#c3d3e4]/20 p-2 flex items-center justify-center flex-shrink-0 shadow-lg">
                <img src="/outarch-icon.png" alt="Icon" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-white font-bold block text-sm">App Glyph</span>
                <span className="text-[11px] text-[#95a2b1]">ConPTY Dock & Tray Icon</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0B0D11] border border-[#c3d3e4]/10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#10131A] border border-[#c3d3e4]/20 p-2 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield className="w-7 h-7 text-[#a9ddc4]" />
              </div>
              <div>
                <span className="text-white font-bold block text-sm">EngineAPI Security</span>
                <span className="text-[11px] text-[#a9ddc4]">Zero Raw Node In Renderer</span>
              </div>
            </div>

            <div 
              onClick={onOpenReel}
              className="p-5 rounded-xl bg-[#10131A] border border-[#afc6f3]/30 hover:border-[#afc6f3]/60 transition-all flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#161B24] border border-[#afc6f3]/30 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <Play className="w-6 h-6 text-[#afc6f3]" />
              </div>
              <div>
                <span className="text-white font-bold block text-sm flex items-center gap-1.5">
                  Launch Reel
                </span>
                <span className="text-[11px] text-[#afc6f3]">Watch Brand Sting Video</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
