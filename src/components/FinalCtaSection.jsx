import React, { useState } from 'react';
import { Download, Copy, Check, Apple, Monitor, Cpu } from 'lucide-react';

export default function FinalCtaSection() {
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('windows');

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      arch: 'x64 (Win 10/11)',
      filename: 'Outarch-Setup-2.19.0.exe',
      icon: Monitor
    },
    {
      id: 'mac-arm',
      name: 'macOS Apple Silicon',
      arch: 'ARM64 (M1/M2/M3/M4)',
      filename: 'outarch-2.19.0-arm64.dmg',
      icon: Apple
    },
    {
      id: 'mac-intel',
      name: 'macOS Intel',
      arch: 'x86_64',
      filename: 'outarch-2.19.0-x64.dmg',
      icon: Apple
    },
    {
      id: 'linux',
      name: 'Linux',
      arch: 'x86_64 (.AppImage)',
      filename: 'outarch-2.19.0-x86_64.AppImage',
      icon: Cpu
    }
  ];

  const currentPlatform = platforms.find(p => p.id === selectedPlatform) || platforms[0];
  const installCmd = 'curl -fsSL https://outarch.dev/install.sh | bash';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download-section" className="py-32 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Big Closing Statement (Conclusion of the narrative) */}
      <div className="max-w-4xl mx-auto text-center">
        
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-6">
          // Deployment
        </span>

        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[0.95] mb-8">
          BUILD WITHOUT <br />
          <span className="text-[#8B93A1]">LOSING CONTROL.</span>
        </h2>

        <p className="font-sans text-[#8B93A1] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Step into the command center. Run multi-terminal processes, observe autonomous agent swarms, and enforce human sign-off on your local hardware.
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
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isSelected 
                    ? 'bg-[#F4F6F8] text-[#050608] font-medium' 
                    : 'bg-[#080A0F] border border-[#1A1E26] text-[#8B93A1] hover:text-[#F4F6F8]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{plat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Download Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`#download-${currentPlatform.id}`}
            onClick={(e) => {
              e.preventDefault();
              alert(`OUTARCH 2.19.0 for ${currentPlatform.name} (${currentPlatform.filename}) is ready.`);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg bg-[#F4F6F8] hover:bg-white text-[#050608] font-medium text-sm tracking-tight transition-all active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Download for {currentPlatform.name}</span>
          </a>
        </div>

        {/* 1-Line CLI Installer snippet */}
        <div className="max-w-xl mx-auto rounded-lg bg-[#080A0F] border border-[#1A1E26] p-4 flex items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3 overflow-x-auto text-[#8B93A1]">
            <span className="text-[#F4F6F8] font-bold">$</span>
            <span className="text-[#F4F6F8] select-all">{installCmd}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#10131A] hover:bg-[#161B24] border border-white/10 text-[#8B93A1] hover:text-[#F4F6F8] transition-colors flex-shrink-0"
            title="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#10b981]" />
                <span className="text-[11px] text-[#10b981]">Copied</span>
              </>
            ) : (
              <span className="text-[11px]">Copy</span>
            )}
          </button>
        </div>

        {/* Metadata Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#8B93A1]">
          <span>Windows 10/11 · macOS 12+ · Linux x86_64</span>
          <span>•</span>
          <span>100% Local Execution</span>
          <span>•</span>
          <span>Version 2.19.0</span>
        </div>

      </div>

    </section>
  );
}
