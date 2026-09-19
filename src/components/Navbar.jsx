import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Command, Zap, Layers } from 'lucide-react';
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
    { label: 'Cockpit', href: '#cockpit', action: () => onRouteChange('home', 'cockpit') },
    { label: 'Control Loop', href: '#control-loop', action: () => onRouteChange('home', 'control-loop') },
    { label: 'Features', href: '#features', action: () => onRouteChange('home', 'features') },
    { label: 'Brand System', href: '#brand-system', action: () => onRouteChange('home', 'brand-system') },
    { label: 'Architecture', href: '#architecture', action: () => onRouteChange('home', 'architecture') },
    { label: 'Download', href: '#download-section', action: () => onRouteChange('home', 'download-section') },
    { label: 'FAQ', href: '#faq', action: () => onRouteChange('home', 'faq') },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 select-none ${
      scrolled 
        ? 'bg-[#050608]/95 backdrop-blur-xl border-b border-cyan-500/20 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-[#050608]/80 backdrop-blur-md border-b border-white/[0.08] py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Lockup with Glitch Logo */}
        <div 
          onClick={() => onRouteChange('home', 'cockpit')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <GlitchLogo size="compact" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-300">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={link.action}
              className="hover:text-cyan-300 transition-colors py-1 relative group font-sans tracking-wide"
            >
              <span>{link.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-200" />
            </button>
          ))}
        </nav>

        {/* Right Action Stack */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenShortcuts}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-cyan-300 hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 transition-all"
            title="Command Palette (Cmd+K)"
          >
            <Command className="w-3 h-3 text-cyan-400" />
            <span className="text-[10px]">K</span>
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-xl btn-primary text-xs font-mono font-bold tracking-tight shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <Download className="w-3.5 h-3.5 text-black" />
            <span>DOWNLOAD</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDownload}
            className="px-3 py-1.5 rounded-lg btn-primary text-xs font-bold font-mono"
          >
            Download
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#050608]/98 backdrop-blur-2xl px-6 py-4 space-y-3">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                link.action();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm text-zinc-300 hover:text-cyan-300 font-medium"
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
              className="text-xs font-mono text-zinc-400 flex items-center gap-2"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span>Palette (Cmd+K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
