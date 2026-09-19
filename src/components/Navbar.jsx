import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Keyboard, Terminal, Smartphone, Sparkles, Cpu, Layers, Maximize2, KeyRound } from 'lucide-react';

export default function Navbar({ 
  activeRoute = 'home', 
  onRouteChange,
  onOpenDownload,
  onOpenShortcuts 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Cockpit', href: '#cockpit', action: () => onRouteChange('home', 'cockpit') },
    { label: 'Recipes (DAG)', href: '#recipes-feature', action: () => onRouteChange('home', 'features') },
    { label: 'Mobile App', href: '#mobile-feature', action: () => onRouteChange('home', 'features') },
    { label: 'MCP Gateway', href: '#mcp-feature', action: () => onRouteChange('home', 'features') },
    { label: 'Focus Mode', href: '#focus-feature', action: () => onRouteChange('home', 'features') },
    { label: 'BYOK AI', href: '#byok-feature', action: () => onRouteChange('home', 'features') },
    { label: 'Download', href: '#download-section', action: () => onRouteChange('home', 'download-section') },
    { label: 'FAQ', href: '#faq', action: () => onRouteChange('home', 'faq') },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 select-none ${
      scrolled 
        ? 'bg-[#030509]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-[#030509]/80 backdrop-blur-md border-b border-white/[0.06]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <div 
          onClick={() => onRouteChange('home', 'cockpit')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#090D18] to-[#121A2C] border border-[#00E5FF]/30 p-1.5 flex items-center justify-center group-hover:border-[#00E5FF]/60 shadow-[0_0_12px_rgba(0,229,255,0.2)] transition-all">
            <img 
              src="/outarch-icon.png" 
              alt="OUTARCH" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-base font-black tracking-tight text-white group-hover:text-[#00E5FF] transition-colors">
              OUTARCH
            </span>
            <span className="font-mono text-[10px] text-[#00F5A0] tracking-wider uppercase font-bold px-1.5 py-0.5 rounded bg-[#00F5A0]/10 border border-[#00F5A0]/30">
              v2.19
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#CBD5E1]">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={link.action}
              className="hover:text-white transition-colors py-1 relative group tracking-tight"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          ))}
        </nav>

        {/* Right Action Stack with Direct Downloads */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenShortcuts}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#CBD5E1] hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all"
            title="Keyboard Shortcuts (? or F1)"
          >
            <Keyboard className="w-3.5 h-3.5 text-[#94A3B8]" />
            <kbd className="px-1.5 py-0.5 rounded bg-[#0E1524] border border-white/15 text-[10px] text-[#E2E8F0] font-bold">?</kbd>
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1728] hover:bg-[#162238] border border-[#00E5FF]/30 text-white text-xs font-mono font-bold tracking-tight transition-all"
            title="Download Android Companion"
          >
            <Smartphone className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Mobile APK</span>
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5A0] text-[#030509] text-xs font-mono font-bold tracking-tight transition-all duration-300 active:scale-[0.98] shadow-[0_0_15px_rgba(0,245,160,0.3)] btn-shimmer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Desktop</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button
            onClick={onOpenDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] text-[#030509] text-xs font-bold font-mono"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get App</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#CBD5E1] hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#070B14]/95 backdrop-blur-2xl px-6 py-4 space-y-3">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                link.action();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm text-[#CBD5E1] hover:text-white font-medium"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                onOpenShortcuts();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-mono text-[#CBD5E1] flex items-center gap-2"
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span>Keyboard Shortcuts</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
