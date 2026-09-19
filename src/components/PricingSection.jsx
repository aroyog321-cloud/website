import React from 'react';
import { Download, Smartphone, Check } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function PricingSection({ onOpenDownload }) {
  const downloadTiers = [
    {
      id: 'desktop-app',
      name: 'OUTARCH Desktop Application',
      category: 'WINDOWS · MACOS · LINUX',
      tagline: 'Complete standalone command center with native PTY session engine and multi-pane workspace canvas.',
      badge: 'OFFICIAL BUILD',
      badgeColor: 'badge-running',
      cta: 'Download for Desktop',
      ctaAction: onOpenDownload,
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
      cta: 'Download Android APK',
      ctaAction: onOpenDownload,
      platforms: ['Android (.APK)', 'Encrypted Local LAN'],
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
    <section id="download-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Section Header with Fluid Typography */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-mono text-[#10B981] mb-4 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(16,185,129,0.2)]">
          <Download className="w-3.5 h-3.5" />
          <span>GET OUTARCH</span>
        </div>
        <h2 
          className="font-display font-black text-titanium tracking-[-0.035em] uppercase leading-[0.96]"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
        >
          Download OUTARCH.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          Install the desktop command center on your workstation and download the Android companion app for encrypted local LAN supervision.
        </p>
      </div>

      {/* Download Bento Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Desktop Application Card (Major 7-col Bento) */}
        <div className="lg:col-span-7 bento-card p-7 sm:p-9 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-md ${downloadTiers[0].badgeColor}`}>
                {downloadTiers[0].badge}
              </span>
              <span className="font-mono text-xs text-[#64748B] font-bold">DESKTOP WORKSTATION</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              {downloadTiers[0].name}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6">
              {downloadTiers[0].tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {downloadTiers[0].platforms.map((plat, pIdx) => (
                <span key={pIdx} className="font-mono text-[11px] px-3 py-1.5 rounded-lg bg-[#080A0F]/80 border border-white/10 text-white font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  {plat}
                </span>
              ))}
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#CBD5E1] mb-8">
              {downloadTiers[0].features.map((f, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-[#E2E8F0]">
                  <div className="w-4 h-4 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#10B981]" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <MagneticButton
            onClick={downloadTiers[0].ctaAction}
            strength={0.2}
            className="w-full py-4 rounded-xl btn-primary text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(255,255,255,0.25),0_0_20px_rgba(16,185,129,0.2)]"
          >
            <Download className="w-4 h-4" />
            <span>{downloadTiers[0].cta}</span>
          </MagneticButton>
        </div>

        {/* Android Companion Card (5-col Bento) */}
        <div className="lg:col-span-5 bento-card p-7 sm:p-9 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-md ${downloadTiers[1].badgeColor}`}>
                {downloadTiers[1].badge}
              </span>
              <span className="font-mono text-xs text-[#64748B] font-bold">MOBILE HUD</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              {downloadTiers[1].name}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6">
              {downloadTiers[1].tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {downloadTiers[1].platforms.map((plat, pIdx) => (
                <span key={pIdx} className="font-mono text-[11px] px-3 py-1.5 rounded-lg bg-[#080A0F]/80 border border-white/10 text-white font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  {plat}
                </span>
              ))}
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#CBD5E1] mb-8">
              {downloadTiers[1].features.map((f, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-[#E2E8F0]">
                  <div className="w-4 h-4 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#38BDF8]" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <MagneticButton
            onClick={downloadTiers[1].ctaAction}
            strength={0.2}
            className="w-full py-4 rounded-xl bg-[#141C2B] hover:bg-[#1A253A] border border-white/20 text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_20px_rgba(56,189,248,0.15)]"
          >
            <Smartphone className="w-4 h-4 text-[#38BDF8]" />
            <span>{downloadTiers[1].cta}</span>
          </MagneticButton>
        </div>

      </div>

    </section>
  );
}
