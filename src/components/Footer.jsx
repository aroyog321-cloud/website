import React from 'react';
import { ExternalLink, Terminal, Shield, Sparkles } from 'lucide-react';
import GlitchLogo from './GlitchLogo';

export default function Footer({ onOpenReel }) {
  return (
    <footer className="bg-[#050608] text-zinc-400 text-xs font-sans border-t border-white/[0.08] select-none py-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 relative z-10">
        
        {/* Brand Lockup */}
        <div className="space-y-4 max-w-sm">
          <GlitchLogo size="normal" />

          <p className="font-mono text-xs font-bold text-cyan-300 tracking-wider">
            STOP WATCHING LOGS. SUPERVISE BY EXCEPTION.
          </p>

          <p className="text-zinc-400 text-xs leading-relaxed">
            Local-first developer command center for orchestrating, observing, and supervising multi-terminal processes and autonomous AI agents with zero telemetry.
          </p>
        </div>

        {/* Clean Essential Links */}
        <div className="flex flex-wrap gap-12 font-medium">
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 font-bold block">
              Cockpit Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#cockpit" className="hover:text-cyan-300 transition-colors">Hero & Canvas</a></li>
              <li><a href="#control-loop" className="hover:text-cyan-300 transition-colors">Control Loop</a></li>
              <li><a href="#features" className="hover:text-cyan-300 transition-colors">Feature Breakdown</a></li>
              <li><a href="#brand-system" className="hover:text-cyan-300 transition-colors">Brand Identity Kit</a></li>
              <li><a href="#architecture" className="hover:text-cyan-300 transition-colors">Architecture (4-Tier)</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">Developer FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 font-bold block">
              Downloads & Ecosystem
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#download-section" className="hover:text-cyan-300 transition-colors">Windows Desktop (.exe)</a></li>
              <li><a href="#download-section" className="hover:text-cyan-300 transition-colors">Mobile LAN Companion (.apk)</a></li>
              <li><a href="#download-section" className="hover:text-cyan-300 transition-colors">VS Code Extension Bridge</a></li>
              <li><a href="/assets/outarch-brand-sheet.png" download="outarch-brand-sheet.png" className="hover:text-cyan-300 transition-colors flex items-center gap-1"><span>Brand Assets (4K)</span><Sparkles className="w-3 h-3 text-pink-400" /></a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-10 mt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500 relative z-10">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>© {new Date().getFullYear()} OUTARCH Cockpit. 100% Local & Encrypted.</span>
        </div>
        <div className="text-zinc-400">
          Native ConPTY Engine // Zero-Telemetry
        </div>
      </div>

    </footer>
  );
}
