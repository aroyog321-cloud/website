import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

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
    { label: 'Features', href: '#features', action: () => onRouteChange('home', 'features') },
    { label: 'Recipes', href: '#recipes', action: () => onRouteChange('home', 'recipes') },
    { label: 'Focus Mode', href: '#focus', action: () => onRouteChange('home', 'focus') },
    { label: 'Pricing', href: '#pricing', action: () => onRouteChange('pricing') },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all select-none font-mono ${
      scrolled 
        ? 'bg-[#050608]/90 backdrop-blur-md border-b border-[#161b24]' 
        : 'bg-[#050608] border-b border-[#121620]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <div 
          onClick={() => onRouteChange('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-7 h-7 rounded bg-[#0b0e14] border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.2)] group-hover:border-blue-400 transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l6 3.75v7.1L12 18.8l-6-3.75v-7.1l6-3.75zM12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-sm font-bold tracking-[0.18em] text-white">
              OUTARCH
            </span>
            <span className="text-[10px] text-zinc-500 hidden sm:inline tracking-wider font-semibold">
              // COCKPIT
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={link.action}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeRoute === link.label.toLowerCase() 
                  ? 'text-white bg-[#10141f] border border-blue-500/30 font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0c0f16]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Stack */}
        <div className="hidden md:flex items-center gap-3 text-xs">
          <button
            onClick={() => onRouteChange('auth', 'signin')}
            className="px-3 py-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            Sign in
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_15px_rgba(59,130,246,0.25)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e] border-b border-[#181f2c] p-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-xs">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded text-zinc-300 hover:bg-[#121722] hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#141822] flex flex-col gap-2">
            <button
              onClick={() => {
                onRouteChange('auth', 'signin');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 text-center text-xs text-zinc-300 hover:bg-[#121722] rounded"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                onOpenDownload();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded flex items-center justify-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Get Started</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
