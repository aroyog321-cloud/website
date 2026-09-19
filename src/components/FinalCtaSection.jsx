import React, { useState } from 'react';
import { 
  Download, 
  Terminal, 
  Copy, 
  Check, 
  Apple, 
  Monitor, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function FinalCtaSection() {
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('mac-arm');

  const platforms = [
    {
      id: 'mac-arm',
      name: 'macOS Apple Silicon',
      arch: 'ARM64 (M1/M2/M3/M4)',
      filename: 'outarch-2.19.0-arm64.dmg',
      size: '84.2 MB',
      icon: Apple
    },
    {
      id: 'mac-intel',
      name: 'macOS Intel',
      arch: 'x86_64',
      filename: 'outarch-2.19.0-x64.dmg',
      size: '88.1 MB',
      icon: Apple
    },
    {
      id: 'windows',
      name: 'Windows',
      arch: 'x64 (Win 10/11)',
      filename: 'Outarch-Setup-2.19.0.exe',
      size: '92.4 MB',
      icon: Monitor
    },
    {
      id: 'linux',
      name: 'Linux',
      arch: 'x86_64 (.AppImage / .deb)',
      filename: 'outarch-2.19.0-x86_64.AppImage',
      size: '79.6 MB',
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
    <section id="download-section" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      
      {/* Big Closing Banner */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0e1526] via-[#090d18] to-[#05070d] border border-blue-500/40 p-8 sm:p-16 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_60px_rgba(59,130,246,0.15)] text-center">
        
        {/* Ambient background light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 font-mono text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT DEPLOYMENT</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight mb-6">
            Stop Babysitting Terminals. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Step Into The Cockpit.
            </span>
          </h2>

          <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Download the sovereign developer cockpit for your operating system or install directly via CLI in seconds.
          </p>

          {/* Platform Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 font-mono text-xs">
            {platforms.map((plat) => {
              const Icon = plat.icon;
              const isSelected = selectedPlatform === plat.id;
              return (
                <button
                  key={plat.id}
                  onClick={() => setSelectedPlatform(plat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all ${
                    isSelected 
                      ? 'bg-blue-600 text-white font-bold border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                      : 'bg-[#0b0f19] border-[#182236] text-zinc-400 hover:text-white hover:bg-[#121828]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{plat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Direct Download Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`#download-${currentPlatform.id}`}
              onClick={(e) => {
                e.preventDefault();
                alert(`OUTARCH ${currentPlatform.name} package (${currentPlatform.filename}) ready for download.`);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-bold tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>Download {currentPlatform.name}</span>
              <span className="text-xs text-blue-200">({currentPlatform.size})</span>
            </a>
          </div>

          {/* 1-Line CLI Installer snippet */}
          <div className="max-w-xl mx-auto rounded-xl bg-[#06080e] border border-[#1b2336] p-4 flex items-center justify-between gap-4 font-mono text-xs shadow-inner">
            <div className="flex items-center gap-3 overflow-x-auto text-zinc-300">
              <span className="text-blue-400 font-bold">$</span>
              <span className="text-zinc-200 select-all">{installCmd}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121826] hover:bg-[#1c263c] border border-[#222e46] text-zinc-300 hover:text-white transition-colors flex-shrink-0"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Verified Guarantee Checklist */}
          <div className="mt-10 pt-8 border-t border-[#161f32] flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Cryptographically Signed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>SHA-256 Checksums Verified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Zero Cloud Telemetry</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
