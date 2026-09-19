import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Footer({ onOpenReel }) {
  return (
    <footer className="bg-[#07090E] text-[#94A3B8] text-xs font-sans border-t border-white/[0.06] select-none py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Brand Lockup */}
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#0D1117] border border-white/10 p-1 flex items-center justify-center">
              <img src="/outarch-icon.png" alt="OUTARCH" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <span className="font-display font-bold text-base text-white tracking-tight">
              OUTARCH
            </span>
          </div>

          <p className="font-mono text-xs font-bold text-white tracking-wider">
            BUILD WITHOUT LOSING CONTROL.
          </p>

          <p className="text-[#64748B] text-xs leading-relaxed">
            Local developer command center for running, observing, and supervising multi-terminal processes and autonomous AI agents.
          </p>
        </div>

        {/* Clean Essential Links */}
        <div className="flex flex-wrap gap-12 font-medium">
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white font-bold block">
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
            <span className="font-mono text-[11px] uppercase tracking-wider text-white font-bold block">
              Resources
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#download-section" className="hover:text-white transition-colors">Download Desktop</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Mobile Companion</a></li>
              <li><a href="https://github.com/aroyog321-cloud/outarch" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1"><span>GitHub</span><ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-10 mt-12 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#64748B]">
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
