import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowRight, ShieldCheck, Download, Sparkles } from 'lucide-react';

export default function Navbar({ 
  activeRoute = 'home', 
  onRouteChange,
  onOpenDownload 
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
    { label: 'Virtual Cockpit', href: '#cockpit', action: () => onRouteChange('home', 'cockpit') },
    { label: 'The Problem', href: '#problem', action: () => onRouteChange('home', 'problem') },
    { label: 'Features', href: '#features', action: () => onRouteChange('home', 'features') },
    { label: 'Architecture', href: '#architecture', action: () => onRouteChange('home', 'architecture') },
    { label: 'Pricing', href: '#pricing', action: () => onRouteChange('home', 'pricing') },
    { label: 'FAQ', href: '#faq', action: () => onRouteChange('home', 'faq') },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 select-none ${
      scrolled 
        ? 'bg-[#050608]/90 backdrop-blur-xl border-b border-[#161b26] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-[#050608]/60 backdrop-blur-md border-b border-[#10141e]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <div 
          onClick={() => onRouteChange('home', 'cockpit')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0c101a] border border-blue-500/40 p-1 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
            <img 
              src="/outarch-icon.png" 
              alt="OUTARCH" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-black tracking-[0.14em] text-white">
              OUTARCH
            </span>
            <span className="font-mono text-[10px] text-blue-400/90 font-medium px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 hidden sm:inline">
              v2.19.0
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 font-sans text-xs font-medium text-zinc-300">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={link.action}
              className="px-3.5 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-[#121724] transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Stack */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onRouteChange('auth', 'signin')}
            className="px-3.5 py-2 text-xs font-sans font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Sign in
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-sans font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Cockpit</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-[#181f2c] p-4 space-y-3 animate-fade-in">
          <nav className="flex flex-col space-y-1 font-sans text-sm">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2.5 rounded-lg text-zinc-300 hover:bg-[#121722] hover:text-white font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#141822] flex flex-col gap-2 font-sans">
            <button
              onClick={() => {
                onRouteChange('auth', 'signin');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-zinc-300 hover:bg-[#121722] rounded-lg"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                onOpenDownload();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Cockpit (v2.19.0)</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
