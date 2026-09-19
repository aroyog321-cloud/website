import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Command } from 'lucide-react';
import GlitchLogo from './GlitchLogo';

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
    { label: 'Features', href: '#features', action: () => onRouteChange('home', 'features') },
    { label: 'Architecture', href: '#architecture', action: () => onRouteChange('home', 'architecture') },
    { label: 'Download', href: '#download-section', action: () => onRouteChange('home', 'download-section') },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 select-none ${
      scrolled 
        ? 'bg-[#05070B]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-lg' 
        : 'bg-[#05070B]/60 backdrop-blur-md border-b border-white/[0.04] py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <div 
          onClick={() => onRouteChange('home', 'cockpit')} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <GlitchLogo size="compact" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={link.action}
              className="hover:text-white transition-colors py-1 relative group font-sans tracking-wide"
            >
              <span>{link.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-200" />
            </button>
          ))}
        </nav>

        {/* Right Action Stack */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenShortcuts}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all"
            title="Command Palette (Cmd+K)"
          >
            <Command className="w-3 h-3 text-slate-400" />
            <span className="text-[10px]">K</span>
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg btn-primary text-xs font-mono font-bold tracking-tight shadow-sm"
          >
            <span>Launch OUTARCH</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDownload}
            className="px-3 py-1.5 rounded-md btn-primary text-xs font-bold font-mono"
          >
            Launch
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-slate-400 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#05070B]/98 backdrop-blur-2xl px-6 py-4 space-y-3">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                link.action();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white font-medium"
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
              className="text-xs font-mono text-slate-400 flex items-center gap-2"
            >
              <Command className="w-3.5 h-3.5 text-slate-400" />
              <span>Palette (Cmd+K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
