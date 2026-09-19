import React from 'react';
import { Download, Smartphone, Check, Shield, Cpu, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';

export default function PricingSection({ onOpenDownload }) {
  const downloadTiers = [
    {
      id: 'desktop-app',
      name: 'OUTARCH Desktop Application',
      category: 'WINDOWS · MACOS · LINUX',
      tagline: 'Complete standalone command center with native PTY session engine, multi-pane workspace canvas, and AI agent sandbox.',
      badge: 'OFFICIAL BUILD',
      badgeColor: 'badge-running',
      icon: '/assets/outarch-glitch-icon.png',
      cta: 'Download for Windows (Preview)',
      platforms: ['Windows (x64)', 'macOS (Apple Silicon & Intel)', 'Linux (.AppImage / .deb)'],
      features: [
        'Multi-pane monospace canvas (1, 2, 4, 6-pane, mosaic)',
        'Fullscreen Focus Mode (Alt+F) & Embedded browser (Alt+B)',
        'Workspace Recipes DAG engine with readiness checks',
        'Needs You triage queue with CrashLens diagnostics',
        'Secure local MCP Gateway for Claude Code & agents',
        'Multi-LLM Vault with native OS keychain encryption'
      ]
    },
    {
      id: 'mobile-companion',
      name: 'OUTARCH Mobile Companion',
      category: 'ANDROID NATIVE APK',
      tagline: 'Encrypted local LAN companion app for real-time alert push notifications and remote decision triage.',
      badge: 'MOBILE COMPANION',
      badgeColor: 'badge-observing',
      icon: '/assets/outarch-glitch-icon.png',
      cta: 'Download Android APK',
      platforms: ['Android (.APK)', 'Encrypted Local LAN', 'Biometric Sign-off'],
      features: [
        'Real-time push alerts for crashed or blocked workers',
        '1-click remote approval for Needs You triage items',
        'Live worker status and memory telemetry pulse',
        'Zero cloud relay dependencies (strictly local network)',
        'Instant pairing via Desktop Groundstation QR code'
      ]
    }
  ];

  return (
    <section id="download-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none relative z-10">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <Download className="w-3.5 h-3.5" />
          <span className="font-bold tracking-widest uppercase">GET OUTARCH</span>
        </div>
        <h2 
          className="font-display font-black text-white tracking-[-0.035em] uppercase leading-[0.96]"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
        >
          Download <span className="text-neon-cyan">OUTARCH</span>.
        </h2>
        <p className="font-sans text-zinc-300 text-base sm:text-lg mt-5 leading-relaxed">
          Install the desktop command center on your workstation and download the Android companion app for encrypted local LAN supervision.
        </p>
      </div>

      {/* Download Bento Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Desktop Application Card */}
        <div className="lg:col-span-7 bento-card p-7 sm:p-9 flex flex-col justify-between border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-md ${downloadTiers[0].badgeColor}`}>
                {downloadTiers[0].badge}
              </span>
              <span className="font-mono text-xs text-cyan-400 font-bold">DESKTOP WORKSTATION</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 p-2 flex items-center justify-center flex-shrink-0">
                <img src={downloadTiers[0].icon} alt="" className="w-full h-full object-contain filter drop-shadow-[0_0_10px_#00F0FF]" />
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {downloadTiers[0].name}
                </h3>
                <span className="font-mono text-xs text-zinc-400">{downloadTiers[0].category}</span>
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {downloadTiers[0].tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {downloadTiers[0].platforms.map((plat, pIdx) => (
                <span key={pIdx} className="font-mono text-[11px] px-3 py-1.5 rounded-lg bg-black/60 border border-cyan-500/20 text-cyan-200 font-medium">
                  {plat}
                </span>
              ))}
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-zinc-300 mb-8">
              {downloadTiers[0].features.map((f, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-zinc-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton
              onClick={onOpenDownload}
              strength={0.2}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-primary text-xs font-mono font-bold tracking-tight flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              <Download className="w-4 h-4 text-black" />
              <span>{downloadTiers[0].cta}</span>
            </MagneticButton>
            <span className="text-[11px] font-mono text-zinc-400">
              SHA-256 Verified · 100% Free & Open Source
            </span>
          </div>
        </div>

        {/* Mobile Companion Card */}
        <div className="lg:col-span-5 bento-card p-7 sm:p-9 flex flex-col justify-between border-purple-500/30 hover:border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-md ${downloadTiers[1].badgeColor}`}>
                {downloadTiers[1].badge}
              </span>
              <Smartphone className="w-4 h-4 text-purple-400" />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 p-2 flex items-center justify-center flex-shrink-0">
                <img src={downloadTiers[1].icon} alt="" className="w-full h-full object-contain filter drop-shadow-[0_0_10px_#A855F7]" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  {downloadTiers[1].name}
                </h3>
                <span className="font-mono text-xs text-purple-400">{downloadTiers[1].category}</span>
              </div>
            </div>

            <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6">
              {downloadTiers[1].tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {downloadTiers[1].platforms.map((plat, pIdx) => (
                <span key={pIdx} className="font-mono text-[11px] px-3 py-1.5 rounded-lg bg-black/60 border border-purple-500/20 text-purple-200 font-medium">
                  {plat}
                </span>
              ))}
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-zinc-300 mb-8">
              {downloadTiers[1].features.map((f, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-zinc-200">
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-purple-400" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton
              onClick={onOpenDownload}
              strength={0.2}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-cyber-outline text-xs font-mono font-bold text-purple-300 hover:border-purple-400 tracking-tight flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span>{downloadTiers[1].cta}</span>
            </MagneticButton>
          </div>
        </div>

      </div>

    </section>
  );
}
