import React from 'react';

export default function Footer({ onOpenReel }) {
  return (
    <footer className="bg-[#050608] text-[#8B93A1] text-xs font-sans border-t border-white/[0.04] select-none">
      
      {/* Top Status Tape */}
      <div className="border-b border-white/[0.04] bg-[#080A0F] py-3 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap font-mono text-[11px]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#10b981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              SESSION ENGINE: ACTIVE
            </span>
            <span className="text-white/10">•</span>
            <span>PTY BINDINGS: CONPTY / NODE-PTY</span>
            <span className="text-white/10">•</span>
            <span>MEMORY: LOCAL SQLITE</span>
          </div>
          <div className="flex items-center gap-4 text-[#8B93A1]">
            <span>ZERO CLOUD TELEMETRY</span>
            <span className="text-white/10">•</span>
            <span>DPAPI ENCRYPTED</span>
            <span className="text-white/10">•</span>
            <span className="text-[#F4F6F8]">OUTARCH 2.19.0</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#0B0D11] border border-white/10 p-1 flex items-center justify-center">
                <img src="/outarch-icon.png" alt="OUTARCH" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-lg text-[#F4F6F8] tracking-tight">
                OUTARCH
              </span>
            </div>
            <p className="text-[#8B93A1] text-xs leading-relaxed max-w-sm">
              The AI Developer Command Center. A local-first developer operating system with shared PTY multiplexing, radical attention filtering, and evidence-verified operations.
            </p>
            <div className="font-mono text-[11px] text-[#F4F6F8] font-medium pt-2">
              BUILD WITHOUT LOSING CONTROL.
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F4F6F8] block font-semibold">
              Product
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#cockpit" className="hover:text-white transition-colors">Groundstation Cockpit</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">The Terminal Crisis</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Feature Showcase</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">System Architecture</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Editions & Pricing</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F4F6F8] block font-semibold">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">Fleet Supervision (20 Workers)</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Workspace 2x2 Matrix</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">CrashLens Diagnostics</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Recipes Startup DAGs</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Fullscreen Focus Mode</a></li>
            </ul>
          </div>

          {/* Platforms & Docs */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F4F6F8] block font-semibold">
              Downloads & Docs
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#download-section" className="hover:text-white transition-colors">Windows Setup (.exe)</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">macOS Apple Silicon (.dmg)</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">Linux Package (.AppImage)</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Developer FAQ</a></li>
              <li><a href="#download-section" className="hover:text-white transition-colors">CLI One-Liner</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8B93A1]">
          <div>
            © {new Date().getFullYear()} OUTARCH Command Center. All rights reserved.
          </div>
          <div>
            Local-First · Zero Remote Telemetry · Windows, macOS, Linux
          </div>
        </div>

      </div>

    </footer>
  );
}
