import React from 'react';
import { Terminal, Shield, Cpu, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ onOpenReel }) {
  return (
    <footer className="bg-[#050608] text-[#95a2b1] text-xs font-mono border-t border-[#c3d3e4]/10">
      
      {/* Top Telemetry Tape */}
      <div className="border-b border-[#c3d3e4]/10 bg-[#0B0D11] py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap text-[11px]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#a9ddc4]">
              <span className="w-2 h-2 rounded-full bg-[#a9ddc4]" />
              ENGINE STATUS: HEALTHY
            </span>
            <span className="text-[#6b7788]">•</span>
            <span>NODE CONPTY BINDING: v10.0.22621</span>
            <span className="text-[#6b7788]">•</span>
            <span>PROTOCOL: v1 / JSON ENVELOPES</span>
          </div>
          <div className="flex items-center gap-4 text-[#6b7788]">
            <span>SERIALIZATION: STRICT 256 KiB</span>
            <span className="text-[#a9ddc4]">DPAPI ENCRYPTED</span>
            <span>RELEASE 2.19.0</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#10131A] border border-[#c3d3e4]/20 p-1 flex items-center justify-center">
                <img src="/outarch-icon.png" alt="O" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wider">
                OUTARCH
              </span>
            </div>
            <p className="text-[#95a2b1] font-sans text-xs leading-relaxed max-w-sm">
              The AI Developer Command Center. A local-first developer operating system with a shared PTY engine, multi-pane Groundstation, and bounded attention loops.
            </p>
            <div className="text-[11px] text-[#a9ddc4] font-semibold">
              BUILD WITHOUT LOSING CONTROL.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <span className="text-white font-bold block text-xs uppercase tracking-wider">
              Architecture
            </span>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#hero-sequence" className="hover:text-white transition-colors">Cinematic Opening</a></li>
              <li><a href="#the-problem" className="hover:text-white transition-colors">Developer Dilemma</a></li>
              <li><a href="#command-center" className="hover:text-white transition-colors">Groundstation Cockpit</a></li>
              <li><a href="#multi-terminal" className="hover:text-white transition-colors">Multi-Terminal Grid</a></li>
              <li><a href="#ai-supervision" className="hover:text-white transition-colors">AI Mission Contracts</a></li>
            </ul>
          </div>

          {/* Integrations Links */}
          <div className="space-y-3">
            <span className="text-white font-bold block text-xs uppercase tracking-wider">
              Integrations
            </span>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#needs-you" className="hover:text-white transition-colors">Needs You Decision Queue</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Secure MCP Gateway</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Gemini Mission Supervisor</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">VS Code Bridge</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Android Supervision APK</a></li>
            </ul>
          </div>

          {/* Media & Resources */}
          <div className="space-y-3">
            <span className="text-white font-bold block text-xs uppercase tracking-wider">
              Media & Artifacts
            </span>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button onClick={onOpenReel} className="text-[#afc6f3] hover:underline flex items-center gap-1">
                  <span>Cinematic Reel</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Windows 11 Launcher</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">NPM Groundstation</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Acceptance Report</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Security Notice */}
        <div className="pt-8 border-t border-[#c3d3e4]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6b7788]">
          <div>
            © {new Date().getFullYear()} OUTARCH Command Center. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#95a2b1]">Local-First · Windows 11 Verified · ConPTY Protocol v1</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
