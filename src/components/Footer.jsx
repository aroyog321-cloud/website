import React from 'react';
import { Terminal, Shield, Cpu, ExternalLink, Download, Heart } from 'lucide-react';

export default function Footer({ onOpenReel }) {
  return (
    <footer className="bg-[#04060a] text-zinc-400 text-xs font-mono border-t border-[#151c2c] select-none">
      
      {/* Top Telemetry Live Tape */}
      <div className="border-b border-[#151c2c] bg-[#070a10] py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap text-[11px]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SOVEREIGN ENGINE: HEALTHY
            </span>
            <span className="text-zinc-600">•</span>
            <span>PTY NATIVE BINDINGS: ACTIVE</span>
            <span className="text-zinc-600">•</span>
            <span>LOCAL MEMORY: SQLITE LEDGER</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <span>ZERO CLOUD TELEMETRY</span>
            <span className="text-blue-400">DPAPI ENCRYPTED SECRETS</span>
            <span className="text-zinc-300 font-bold">RELEASE v2.19.0</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0e1422] border border-blue-500/30 p-1 flex items-center justify-center">
                <img src="/outarch-icon.png" alt="OUTARCH" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider">
                OUTARCH
              </span>
            </div>
            <p className="text-zinc-400 font-sans text-xs leading-relaxed max-w-sm">
              The AI Developer Command Center. Sovereign, local-first developer operating system with shared PTY multiplexing, radical attention filtering, and evidence-verified operations.
            </p>
            <div className="text-[11px] text-blue-400 font-mono font-bold tracking-wider uppercase">
              BUILD WITHOUT LOSING CONTROL.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 font-sans">
            <span className="text-white font-bold block text-xs uppercase tracking-wider font-mono">
              Product
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#cockpit" className="hover:text-white transition-colors">Virtual Cockpit HUD</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">The Terminal Chaos</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Deep Feature Showcase</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Local Architecture</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Editions & Pricing</a></li>
            </ul>
          </div>

          {/* Core Features */}
          <div className="space-y-3 font-sans">
            <span className="text-white font-bold block text-xs uppercase tracking-wider font-mono">
              Capabilities
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#features" className="hover:text-white transition-colors">20-Worker Groundstation</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Workspace 2x2 Matrix</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Needs You Decision Queue</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Recipe Startup DAGs</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Focus Mode Isolation</a></li>
            </ul>
          </div>

          {/* Resources & Platforms */}
          <div className="space-y-3 font-sans">
            <span className="text-white font-bold block text-xs uppercase tracking-wider font-mono">
              Downloads & Docs
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#download-section" className="hover:text-white transition-colors">macOS Apple Silicon</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Windows x64 Installer</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Linux AppImage</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Developer FAQ</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">CLI One-Liner</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Security Notice */}
        <div className="pt-8 border-t border-[#151c2c] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} OUTARCH Command Center. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-400">100% Sovereign Local-First · Zero Remote Telemetry</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
