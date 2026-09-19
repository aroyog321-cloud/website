import React from 'react';
import { Download, Smartphone, Monitor, Check, ArrowRight, Sparkles, Shield, Cpu, ExternalLink } from 'lucide-react';

export default function PricingSection({ onOpenDownload }) {
  const downloadTiers = [
    {
      id: 'desktop-app',
      name: 'OUTARCH Desktop Application',
      category: 'WINDOWS · MACOS · LINUX',
      tagline: 'Complete standalone command center with native PTY session engine and multi-pane workspace canvas.',
      badge: 'OFFICIAL PREVIEW (v2.19.0)',
      badgeColor: 'text-[#00F5A0] bg-[#00F5A0]/10 border-[#00F5A0]/30 shadow-[0_0_12px_rgba(0,245,160,0.2)]',
      cta: 'Download for Desktop',
      ctaAction: onOpenDownload,
      platforms: ['Windows 10/11 (x64)', 'macOS (Apple Silicon & Intel)', 'Linux (.AppImage / .deb)'],
      features: [
        'Multi-pane monospace canvas (1, 2, 4, 6-pane, mosaic)',
        'Fullscreen Focus Mode (Alt+F) & Embedded browser (Alt+B)',
        'Workspace Recipes DAG engine with readiness checks',
        'Needs You triage queue with CrashLens diagnostics',
        'Secure local MCP Gateway for Claude Code & agents',
        'BYOK Multi-LLM Vault with OS keychain DPAPI encryption'
      ]
    },
    {
      id: 'mobile-companion',
      name: 'OUTARCH Mobile Companion',
      category: 'ANDROID NATIVE APK',
      tagline: 'Encrypted local LAN companion app for real-time alert push notifications and remote decision triage.',
      badge: 'MOBILE COMPANION',
      badgeColor: 'text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30 shadow-[0_0_12px_rgba(0,229,255,0.2)]',
      cta: 'Download Android APK',
      ctaAction: onOpenDownload,
      platforms: ['Android 10+ (Direct .APK Download)', 'Encrypted Local LAN Gateway'],
      features: [
        'Real-time push alerts for crashed or blocked workers',
        '1-click remote approval for Needs You triage items',
        'Live worker CPU and memory telemetry pulse',
        'Zero cloud relay dependencies (strictly local network)',
        'Instant pairing via Desktop Groundstation QR code'
      ]
    }
  ];

  return (
    <section id="download-section" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-xs font-mono text-[#00F5A0] mb-4 shadow-[0_0_12px_rgba(0,245,160,0.2)]">
          <Download className="w-3.5 h-3.5" />
          <span>DIRECT APPLICATION DOWNLOADS</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-titanium tracking-tight uppercase leading-[1.02]">
          Download OUTARCH.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          Install the desktop command center on your workstation and download the Android companion app for encrypted local LAN supervision.
        </p>
      </div>

      {/* Download Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Desktop Application Card */}
        <div className="lg:col-span-7 rounded-3xl spotlight-card spotlight-card-emerald p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[#00F5A0]/30 bg-[#060A14] relative">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full border ${downloadTiers[0].badgeColor}`}>
                {downloadTiers[0].badge}
              </span>
              <span className="font-mono text-xs text-[#94A3B8] font-bold">DESKTOP WORKSTATION</span>
            </div>

            <h3 className="font-display text-3xl font-black text-white mb-2">
              {downloadTiers[0].name}
            </h3>

            <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed mb-6">
              {downloadTiers[0].tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {downloadTiers[0].platforms.map((plat, pIdx) => (
                <span key={pIdx} className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#0B1322] border border-white/10 text-white font-medium">
                  {plat}
                </span>
              ))}
            </div>

            <div className="space-y-3 font-sans text-xs text-[#CBD5E1] mb-8">
              {downloadTiers[0].features.map((f, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-[#F1F5F9]">
                  <div className="w-5 h-5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00F5A0]" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.06]">
            <button
              onClick={downloadTiers[0].ctaAction}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5A0] text-[#030509] text-xs font-bold font-mono tracking-tight transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(0,245,160,0.35)] flex items-center justify-center gap-2 btn-shimmer"
            >
              <Download className="w-4 h-4" />
              <span>{downloadTiers[0].cta}</span>
            </button>
          </div>
        </div>

        {/* Mobile Companion Card */}
        <div className="lg:col-span-5 rounded-3xl spotlight-card p-8 sm:p-10 flex flex-col justify-between shadow-xl border border-[#00E5FF]/30 bg-[#060A14]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full border ${downloadTiers[1].badgeColor}`}>
                {downloadTiers[1].badge}
              </span>
              <span className="font-mono text-xs text-[#00E5FF] font-bold">ANDROID CLIENT</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-2">
              {downloadTiers[1].name}
            </h3>

            <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed mb-6">
              {downloadTiers[1].tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {downloadTiers[1].platforms.map((plat, pIdx) => (
                <span key={pIdx} className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#0B1322] border border-white/10 text-[#00E5FF] font-medium">
                  {plat}
                </span>
              ))}
            </div>

            <div className="space-y-3 font-sans text-xs text-[#CBD5E1] mb-8">
              {downloadTiers[1].features.map((f, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00E5FF]" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.06]">
            <button
              onClick={downloadTiers[1].ctaAction}
              className="w-full px-6 py-4 rounded-2xl bg-[#0F1728] hover:bg-[#162238] border border-[#00E5FF]/40 hover:border-[#00E5FF] text-white text-xs font-bold font-mono tracking-tight transition-all active:scale-[0.98] shadow-[0_0_15px_rgba(0,229,255,0.2)] flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-[#00E5FF]" />
              <span>{downloadTiers[1].cta}</span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
