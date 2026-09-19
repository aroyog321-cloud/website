import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Keyboard, Terminal } from 'lucide-react';

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
    { label: 'Problem', href: '#problem', action: () => onRouteChange('home', 'problem') },
    { label: 'Features', href: '#features', action: () => onRouteChange('home', 'features') },
    { label: 'Integrations', href: '#integrations', action: () => onRouteChange('home', 'integrations') },
    { label: 'Architecture', href: '#architecture', action: () => onRouteChange('home', 'architecture') },
    { label: 'Pricing', href: '#pricing', action: () => onRouteChange('home', 'pricing') },
    { label: 'FAQ', href: '#faq', action: () => onRouteChange('home', 'faq') },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 select-none ${
      scrolled 
        ? 'bg-[#050608]/90 backdrop-blur-xl border-b border-[#161B26]' 
        : 'bg-[#050608]/60 backdrop-blur-md border-b border-white/[0.04]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <div 
          onClick={() => onRouteChange('home', 'cockpit')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0B0D11] border border-white/10 p-1 flex items-center justify-center group-hover:border-white/20 transition-all">
            <img 
              src="/outarch-icon.png" 
              alt="OUTARCH" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-[#F4F6F8]">
              OUTARCH
            </span>
            <span className="font-mono text-[10px] text-[#8B93A1] tracking-wider uppercase">
              2.19.0
            </span>
          </div>
        </div>

        {/* Desktop Links - Refined Inter Sans */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium text-[#8B93A1]">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={link.action}
              className="hover:text-[#F4F6F8] transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 transition-all duration-200 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right Action Stack */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenShortcuts}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono text-[#8B93A1] hover:text-[#F4F6F8] hover:bg-white/[0.04] transition-colors"
            title="Keyboard Shortcuts"
          >
            <Keyboard className="w-3.5 h-3.5 text-[#8B93A1]" />
            <kbd className="px-1.5 py-0.5 rounded bg-[#10131A] border border-white/10 text-[10px] text-[#8B93A1]">?</kbd>
          </button>

          <button
            onClick={() => onRouteChange('auth', 'signin')}
            className="text-xs font-medium text-[#8B93A1] hover:text-[#F4F6F8] transition-colors px-2 py-1.5"
          >
            Sign in
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F4F6F8] hover:bg-white text-[#050608] text-xs font-medium tracking-tight transition-all active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="lg:hidden p-2 text-[#8B93A1] hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050608]/98 backdrop-blur-2xl border-b border-[#161B26] p-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 text-[#8B93A1] hover:text-white font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
            <button
              onClick={() => {
                if (onOpenShortcuts) onOpenShortcuts();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 px-3 flex items-center justify-between text-xs font-mono text-[#8B93A1] bg-[#0B0D11] border border-white/10 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4" />
                <span>Shortcuts</span>
              </div>
              <kbd className="px-1.5 py-0.5 bg-[#10131A] rounded text-[10px]">?</kbd>
            </button>

            <button
              onClick={() => {
                onOpenDownload();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#F4F6F8] hover:bg-white text-[#050608] text-xs font-medium rounded-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download OUTARCH 2.19.0</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
