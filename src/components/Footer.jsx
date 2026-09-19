import React from 'react';
import { ExternalLink } from 'lucide-react';
import GlitchLogo from './GlitchLogo';

export default function Footer({ onOpenReel }) {
  return (
    <footer className="bg-[#05070B] text-slate-400 text-xs font-sans border-t border-white/[0.08] select-none py-16 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Brand Lockup */}
        <div className="space-y-4 max-w-sm">
          <GlitchLogo size="normal" />

          <p className="font-mono text-xs font-bold text-slate-200 tracking-wider">
            BUILD WITHOUT LOSING CONTROL.
          </p>

          <p className="text-slate-400 text-xs leading-relaxed">
            Local developer command center for running, observing, and supervising multi-terminal processes and autonomous AI agents.
          </p>
        </div>

        {/* Clean Essential Links */}
        <div className="flex flex-wrap gap-12 font-medium">
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-200 font-bold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#cockpit" className="hover:text-white transition-colors">Product</a></li>
              <li><a href="#control-loop" className="hover:text-white transition-colors">Control Loop</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-200 font-bold block">
              Platforms
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#download-section" className="hover:text-white transition-colors">Desktop Workstation</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Android Mobile Companion</a></li>
              <li><a href="https://github.com/aroyog321-cloud/outarch" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1"><span>GitHub Repository</span><ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-10 mt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
        <div>
          © {new Date().getFullYear()} OUTARCH Command Center.
        </div>
        <div>
          Local-First Developer Platform
        </div>
      </div>

    </footer>
  );
}
