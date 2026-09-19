import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Command } from 'lucide-react';

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
    { label: 'Product', href: '#cockpit', action: () => onRouteChange('home', 'cockpit') },
    { label: 'Control Loop', href: '#control-loop', action: () => onRouteChange('home', 'control-loop') },
    { label: 'Features', href: '#features', action: () => onRouteChange('home', 'features') },
    { label: 'Architecture', href: '#architecture', action: () => onRouteChange('home', 'architecture') },
    { label: 'Download', href: '#download-section', action: () => onRouteChange('home', 'download-section') },
    { label: 'FAQ', href: '#faq', action: () => onRouteChange('home', 'faq') },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 select-none ${
      scrolled 
        ? 'bg-[#07090E]/95 backdrop-blur-xl border-b border-white/[0.08] py-2.5' 
        : 'bg-[#07090E]/80 backdrop-blur-md border-b border-white/[0.04] py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <div 
          onClick={() => onRouteChange('home', 'cockpit')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-7 h-7 rounded-lg bg-[#0D1117] border border-white/10 p-1 flex items-center justify-center group-hover:border-white/20 transition-all">
            <img 
              src="/outarch-icon.png" 
              alt="OUTARCH" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
              OUTARCH
            </span>
            <span className="font-mono text-[10px] text-[#64748B] tracking-wider uppercase font-medium">
              Developer Command Center
            </span>
          </div>
        </div>

        {/* Desktop Links - Calm, Editorial Sans */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#94A3B8]">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={link.action}
              className="hover:text-white transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Right Action Stack */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenShortcuts}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono text-[#94A3B8] hover:text-white hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-all"
            title="Command Palette (Cmd+K)"
          >
            <Command className="w-3 h-3 text-[#94A3B8]" />
            <span className="text-[10px]">K</span>
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg btn-primary text-xs font-mono font-bold tracking-tight shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDownload}
            className="px-3 py-1.5 rounded-md btn-primary text-xs font-bold font-mono"
          >
            Download
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-[#94A3B8] hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#07090E]/98 backdrop-blur-2xl px-6 py-4 space-y-3">
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
              className="text-xs font-mono text-[#94A3B8] flex items-center gap-2"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Palette (Cmd+K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
