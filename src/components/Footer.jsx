import React from 'react';
import { ExternalLink, Terminal, Shield, Check, Smartphone, Download } from 'lucide-react';

export default function Footer({ onOpenReel }) {
  return (
    <footer className="bg-[#030509] text-[#94A3B8] text-xs font-sans border-t border-white/[0.06] select-none">
      
      {/* Top Status Tape */}
      <div className="border-b border-white/[0.06] bg-[#070A12] py-3.5 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap font-mono text-[11px]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-[#00F5A0] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0] animate-pulse" />
              OUTARCH COCKPIT v2.19
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[#CBD5E1]">WORKSPACE RECIPES (DAG)</span>
            <span className="text-white/20">•</span>
            <span className="text-[#00E5FF]">MOBILE COMPANION (ANDROID)</span>
            <span className="text-white/20">•</span>
            <span className="text-[#C084FC]">SECURE MCP GATEWAY</span>
          </div>
          <div className="flex items-center gap-4 text-[#CBD5E1] font-medium">
            <span className="text-[#38BDF8]">FOCUS MODE (ALT+F)</span>
            <span className="text-white/20">•</span>
            <span className="text-[#FFB800]">BYOK MULTI-LLM VAULT</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#0B1220] border border-[#00E5FF]/30 p-1.5 flex items-center justify-center shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                <img src="/outarch-icon.png" alt="OUTARCH" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <span className="font-display font-black text-lg text-white tracking-tight">
                OUTARCH
              </span>
            </div>
            <p className="text-[#94A3B8] text-xs leading-relaxed max-w-sm">
              Local developer command center for running, observing, and supervising multi-terminal processes, automated DAG recipes, and autonomous AI agents.
            </p>
            <div className="font-mono text-[11px] text-[#00E5FF] font-bold pt-1">
              BUILD WITHOUT LOSING CONTROL.
            </div>
          </div>

          {/* Major Systems */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white block font-bold">
              Major Features
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#recipes-feature" className="hover:text-white transition-colors">Workspace Recipes (DAG)</a></li>
              <li><a href="#mobile-feature" className="hover:text-white transition-colors">Mobile Companion (Android)</a></li>
              <li><a href="#mcp-feature" className="hover:text-white transition-colors">Secure MCP Gateway</a></li>
              <li><a href="#focus-feature" className="hover:text-white transition-colors">Fullscreen Focus Mode (Alt+F)</a></li>
              <li><a href="#byok-feature" className="hover:text-white transition-colors">BYOK Multi-LLM Vault</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white block font-bold">
              Product
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#cockpit" className="hover:text-white transition-colors">Groundstation Cockpit</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">The Execution Crisis</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">Product Philosophy</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations Fabric</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Developer FAQ</a></li>
            </ul>
          </div>

          {/* Downloads */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white block font-bold">
              Downloads
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#download-section" className="hover:text-white transition-colors">Windows Desktop App</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">macOS Desktop App (DMG)</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Linux Desktop App (.AppImage)</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Android Mobile Companion (.apk)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#94A3B8]">
          <div>
            © {new Date().getFullYear()} OUTARCH Command Center.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#00F5A0] font-semibold">Local-First Developer Tooling</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
