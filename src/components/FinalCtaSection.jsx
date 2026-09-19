import React, { useState } from 'react';
import { Download, Smartphone, Check, Apple, Monitor, Cpu, ChevronRight, Sparkles } from 'lucide-react';

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
      name: 'Android Companion',
      arch: 'Android 10+ (.apk)',
      filename: 'outarch-companion-2.19.0.apk',
      icon: Smartphone,
      type: 'mobile'
    }
  ];

  const currentPlatform = platforms.find(p => p.id === selectedPlatform) || platforms[0];

  return (
    <section id="download-cta" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06] relative">
      
      {/* Big Closing Statement */}
      <div className="max-w-4xl mx-auto text-center p-8 sm:p-14 rounded-xl border border-white/10 bg-[#0D1117] shadow-xl">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-mono text-[#10B981] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUTARCH 2.19.0 OFFICIAL RELEASE</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase leading-[0.96] mb-6 text-titanium">
          STOP WATCHING TERMINALS. <br />
          <span className="text-[#94A3B8]">
            START CONTROLLING THE SYSTEM.
          </span>
        </h2>

        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Step into the developer command center. Launch automated DAG recipes, supervise autonomous AI agents via MCP, toggle fullscreen focus mode, and receive remote push approvals on your phone.
        </p>

        {/* Platform Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 font-sans text-xs">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            const isSelected = selectedPlatform === plat.id;
            return (
              <button
                key={plat.id}
                onClick={() => setSelectedPlatform(plat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all font-medium ${
                  isSelected 
                    ? 'bg-white text-[#07090E] font-bold shadow-sm' 
                    : 'bg-[#080A0F] border border-white/5 text-[#94A3B8] hover:text-white hover:border-white/15'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{plat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <a
            href={`#download-${currentPlatform.id}`}
            onClick={(e) => {
              e.preventDefault();
              alert(`OUTARCH 2.19.0 download initiated for ${currentPlatform.name} (${currentPlatform.filename}).`);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg btn-primary text-[#07090E] font-bold text-xs font-mono tracking-tight transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download for {currentPlatform.name}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#download-android"
            onClick={(e) => {
              e.preventDefault();
              alert('OUTARCH Mobile Companion Android APK (outarch-companion-2.19.0.apk) download initiated.');
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#131822] hover:bg-[#1A2230] border border-white/10 text-xs font-mono text-white font-bold transition-all"
          >
            <Smartphone className="w-4 h-4 text-[#38BDF8]" />
            <span>Get Android APK</span>
          </a>
        </div>

        {/* Major Feature Assurance Strip */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-[#94A3B8]">
          <span className="flex items-center gap-1.5 text-[#10B981]">
            <Check className="w-3.5 h-3.5" />
            <span>Workspace Recipes DAG</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#38BDF8]">
            <Check className="w-3.5 h-3.5" />
            <span>Encrypted Mobile Companion</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#A855F7]">
            <Check className="w-3.5 h-3.5" />
            <span>Secure MCP Gateway</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#38BDF8]">
            <Check className="w-3.5 h-3.5" />
            <span>Focus Mode (Alt+F)</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#F59E0B]">
            <Check className="w-3.5 h-3.5" />
            <span>BYOK Multi-LLM Vault</span>
          </span>
        </div>

      </div>

    </section>
  );
}
