import React, { useState, useEffect } from 'react';
import { CockpitProvider } from './context/CockpitContext';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
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

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home' | 'auth'
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);

  // Global key listener for shortcuts overlay ('?' or 'F1')
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === '?' || e.key === 'F1') && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        setShortcutsModalOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setShortcutsModalOpen(false);
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
      <div className="min-h-screen bg-[#050608] text-[#e2e8f0] flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
        
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
              {/* 01 · Hero & Live Interactive Virtual Cockpit */}
              <HeroCinematic onOpenDownload={handleOpenDownload} />

              {/* 02 · The Problem: Multi-Terminal Chaos vs The Cockpit */}
              <ProblemSection />

              {/* 03 · Product Philosophy: The Governance Layer for Autonomous Code */}
              <PhilosophySection />

              {/* 04 · Deep Feature Capabilities (6 Visual Pillars with Cockpit Test Drives) */}
              <FeatureShowcase />

              {/* 05 · Integrations Hub (Mission AI, VS Code, MCP, Android, Web Browser) */}
              <IntegrationsSection />

              {/* 06 · Architecture: Zero-Cloud Sovereign Engine & MCP Gateway */}
              <ArchitectureSection />

              {/* 07 · Transparent In-Page Pricing Editions */}
              <PricingSection 
                onOpenDownload={handleOpenDownload}
                onSelectPlan={(plan) => handleRouteChange('auth')}
              />

              {/* 08 · Technical Developer FAQ (Accordion) */}
              <FaqSection />

              {/* 09 · High-Impact Final CTA & Native Platform Downloads */}
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

      </div>
    </CockpitProvider>
  );
}
