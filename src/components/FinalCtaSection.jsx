import React, { useState } from 'react';
import { Download, Smartphone, Check, Apple, Monitor, Cpu, Terminal, Sparkles, ChevronRight, Shield, Layers } from 'lucide-react';

export default function FinalCtaSection() {
  const [selectedPlatform, setSelectedPlatform] = useState('windows');

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      arch: 'x64 (Win 10/11)',
      filename: 'OPEN_OUTARCH_WINDOWS.cmd / Electron Installer',
      icon: Monitor,
      type: 'desktop'
    },
    {
      id: 'mac-arm',
      name: 'macOS Apple Silicon',
      arch: 'ARM64 (M1/M2/M3/M4)',
      filename: 'outarch-2.19.0-arm64.dmg',
      icon: Apple,
      type: 'desktop'
    },
    {
      id: 'linux',
      name: 'Linux',
      arch: 'x86_64 (.AppImage / .deb)',
      filename: 'outarch-2.19.0-x86_64.AppImage',
      icon: Cpu,
      type: 'desktop'
    },
    {
      id: 'android',
      name: 'Android Mobile Companion',
      arch: 'Android 10+ (.apk)',
      filename: 'outarch-companion-2.19.0.apk',
      icon: Smartphone,
      type: 'mobile'
    }
  ];

  const currentPlatform = platforms.find(p => p.id === selectedPlatform) || platforms[0];

  return (
    <section id="download-cta" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06] relative">
      
      {/* Ambient background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00F5A0]/15 via-[#00E5FF]/20 to-[#A855F7]/15 blur-[120px] -z-10 pointer-events-none" />

      {/* Big Closing Statement */}
      <div className="max-w-4xl mx-auto text-center spotlight-card p-10 sm:p-16 rounded-3xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] bg-[#060914]">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-6 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUTARCH 2.19.0 PRODUCTION DEPLOYMENT</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[0.96] mb-6 text-titanium">
          STOP WATCHING TERMINALS. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00F5A0] to-[#A855F7]">
            START CONTROLLING THE SYSTEM.
          </span>
        </h2>

        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Step into the developer command center. Launch automated DAG recipes, supervise autonomous AI agents via MCP, toggle fullscreen focus mode, and receive remote push approvals on your phone.
        </p>

        {/* Platform Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8 font-sans text-xs">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            const isSelected = selectedPlatform === plat.id;
            return (
              <button
                key={plat.id}
                onClick={() => setSelectedPlatform(plat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all font-semibold ${
                  isSelected 
                    ? 'bg-white text-[#030509] shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105' 
                    : 'bg-[#080D18]/90 border border-white/10 text-[#94A3B8] hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{plat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={`#download-${currentPlatform.id}`}
            onClick={(e) => {
              e.preventDefault();
              alert(`OUTARCH 2.19.0 download initiated for ${currentPlatform.name} (${currentPlatform.filename}).`);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5A0] text-[#030509] font-black text-xs font-mono tracking-tight transition-all active:scale-[0.98] shadow-[0_0_25px_rgba(0,245,160,0.4)] btn-shimmer"
          >
            <Download className="w-4 h-4" />
            <span>Download for {currentPlatform.name}</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#download-android"
            onClick={(e) => {
              e.preventDefault();
              alert('OUTARCH Mobile Companion Android APK (outarch-companion-2.19.0.apk) download initiated.');
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0B1322] hover:bg-[#121E36] border border-[#00E5FF]/30 text-xs font-mono text-white font-bold transition-all shadow-md"
          >
            <Smartphone className="w-4 h-4 text-[#00E5FF]" />
            <span>Get Android APK</span>
          </a>
        </div>

        {/* Major Feature Assurance Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#CBD5E1]">
          <span className="flex items-center gap-1.5 text-[#00F5A0]">
            <Check className="w-3.5 h-3.5" />
            <span>Workspace Recipes DAG</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#00E5FF]">
            <Check className="w-3.5 h-3.5" />
            <span>Encrypted Mobile Companion</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#C084FC]">
            <Check className="w-3.5 h-3.5" />
            <span>Secure MCP Gateway</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#38BDF8]">
            <Check className="w-3.5 h-3.5" />
            <span>Focus Mode (Alt+F)</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#FFB800]">
            <Check className="w-3.5 h-3.5" />
            <span>BYOK Multi-LLM Vault</span>
          </span>
        </div>

      </div>

    </section>
  );
}
