import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CockpitProvider } from './context/CockpitContext';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import LiveSystemControlLoop from './components/LiveSystemControlLoop';
import ProblemSection from './components/ProblemSection';
import PhilosophySection from './components/PhilosophySection';
import FeatureShowcase from './components/FeatureShowcase';
import BrandAssetShowcase from './components/BrandAssetShowcase';
import ArchitectureSection from './components/ArchitectureSection';
import IntegrationsSection from './components/IntegrationsSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import AuthScreen from './components/AuthScreen';
import Footer from './components/Footer';
import KeyboardShortcutsModal from './components/KeyboardShortcutsModal';
import CommandPaletteModal from './components/CommandPaletteModal';

import CursorGlow from './components/CursorGlow';
import ParticleGridCanvas from './components/ParticleGridCanvas';
import AtmosphericNebula from './components/AtmosphericNebula';
import ThemeToast from './components/ThemeToast';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home' | 'auth'
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Global key listener for shortcuts overlay ('?' or 'F1') and command palette ('Cmd+K' or 'Ctrl+K')
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      } else if ((e.key === '?' || e.key === 'F1') && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        setShortcutsModalOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setShortcutsModalOpen(false);
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleRouteChange = (route, sectionId) => {
    if (route === 'auth') {
      setCurrentRoute('auth');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentRoute('home');
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDownload = () => {
    if (currentRoute !== 'home') {
      setCurrentRoute('home');
    }
    setTimeout(() => {
      const el = document.getElementById('download-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <CockpitProvider>
      <div className="min-h-screen bg-[#050608] text-[#F8FAFC] flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
        
        {/* Layered Floating Cyberpunk Nebula Atmosphere, Fixed SVG Grain & Parallax Depth */}
        <AtmosphericNebula />

        {/* Dynamic Cursor Glow */}
        <CursorGlow />

        {/* Ambient Particle Constellation */}
        <ParticleGridCanvas />

        {/* Top Developer Navbar */}
        {currentRoute !== 'auth' && (
          <Navbar
            activeRoute={currentRoute}
            onRouteChange={handleRouteChange}
            onOpenDownload={handleOpenDownload}
            onOpenShortcuts={() => setShortcutsModalOpen(true)}
          />
        )}

        {/* Main Content Flow */}
        <main className="flex-1">
          
          {/* Authentication View */}
          {currentRoute === 'auth' && (
            <AuthScreen
              onNavigateHome={() => handleRouteChange('home')}
            />
          )}

          {/* Main Comprehensive Product Experience */}
          {currentRoute === 'home' && (
            <>
              {/* 01 · Hero with Real 60fps Hyperspace Warp Canvas & Glitch Wordmark */}
              <HeroCinematic onOpenDownload={handleOpenDownload} />

              {/* 02 · Signature Live System Control Loop (01 BUILD -> 06 RESOLVE) */}
              <LiveSystemControlLoop />

              {/* 03 · The Problem: Execution Crisis & 6 Definitive States */}
              <ProblemSection />

              {/* 04 · Product Philosophy: Why OUTARCH Exists */}
              <PhilosophySection />

              {/* 05–09 · Major Features (Recipes, Mobile Companion, MCP, Focus Mode, BYOK) */}
              <FeatureShowcase />

              {/* 10 · Brand Identity System & Interactive Glitch Kit (from outarch-brand-sheet.png) */}
              <BrandAssetShowcase />

              {/* 11 · System Architecture: Real 4-Tier Engine Diagram */}
              <ArchitectureSection />

              {/* 12 · Integrations Hub (Mission AI, VS Code, MCP Gateway, Android LAN Companion, Browser) */}
              <IntegrationsSection />

              {/* 13 · Direct Application Downloads (Desktop & Mobile Companion) */}
              <PricingSection 
                onOpenDownload={handleOpenDownload}
              />

              {/* 14 · Developer FAQ */}
              <FaqSection />

              {/* 15 · High-Impact Final CTA */}
              <FinalCtaSection />
            </>
          )}

        </main>

        {/* 16 · Developer Footer with Glitch Logo */}
        {currentRoute !== 'auth' && (
          <Footer 
            onOpenReel={() => handleRouteChange('home', 'cockpit')} 
          />
        )}

        {/* Interactive Keyboard Shortcuts Overlay */}
        <KeyboardShortcutsModal
          isOpen={shortcutsModalOpen}
          onClose={() => setShortcutsModalOpen(false)}
        />

        {/* Global Command Palette Overlay (Cmd+K) */}
        <CommandPaletteModal
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onNavigate={handleRouteChange}
        />

        {/* Floating Easter Egg Theme Notification */}
        <ThemeToast />

      </div>
    </CockpitProvider>
  );
}
