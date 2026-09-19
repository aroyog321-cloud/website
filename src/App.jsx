import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CockpitProvider } from './context/CockpitContext';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import StoryProgression from './components/StoryProgression';
import ProblemSection from './components/ProblemSection';
import PhilosophySection from './components/PhilosophySection';
import FeatureShowcase from './components/FeatureShowcase';
import IntegrationsSection from './components/IntegrationsSection';
import ArchitectureSection from './components/ArchitectureSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import AuthScreen from './components/AuthScreen';
import Footer from './components/Footer';
import KeyboardShortcutsModal from './components/KeyboardShortcutsModal';
import CommandPaletteModal from './components/CommandPaletteModal';
import AmbientHudOverlay from './components/AmbientHudOverlay';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home' | 'auth'
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
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
      <div className="min-h-screen bg-[#050608] text-[#F4F6F8] flex flex-col selection:bg-white/20 selection:text-white relative bg-grain">
        
        {/* Ambient Corner HUD Overlay */}
        <AmbientHudOverlay 
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

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
              {/* 01 · Hero & Live Interactive Virtual Cockpit Centerpiece */}
              <HeroCinematic onOpenDownload={handleOpenDownload} />

              {/* 02 · 5-Stage Story Progression (CHAOS → OBSERVATION → CONTROL → ACTION → RESOLUTION) */}
              <StoryProgression />

              {/* 03 · The Problem: Multi-Process Fragmentation vs Supervision */}
              <ProblemSection />

              {/* 04 · Product Philosophy: Why OUTARCH Exists */}
              <PhilosophySection />

              {/* 05 · Deep Feature Storytelling (Groundstation, Workspace, Needs You, Recipes, Focus, Memory) */}
              <FeatureShowcase />

              {/* 06 · Integrations Hub (Mission AI, VS Code, MCP, Android, Web Browser) */}
              <IntegrationsSection />

              {/* 07 · System Architecture: Zero-Cloud Sovereign Engine & Execution Pipeline */}
              <ArchitectureSection />

              {/* 08 · Transparent Editions & Developer Access */}
              <PricingSection 
                onOpenDownload={handleOpenDownload}
                onSelectPlan={(plan) => handleRouteChange('auth')}
              />

              {/* 09 · Developer FAQ */}
              <FaqSection />

              {/* 10 · High-Impact Final CTA & Platform Deployment */}
              <FinalCtaSection />
            </>
          )}

        </main>

        {/* Developer Footer */}
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

      </div>
    </CockpitProvider>
  );
}
