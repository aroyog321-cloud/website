import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import ChaosToControl from './components/ChaosToControl';
import InteractiveFocusShowcase from './components/InteractiveFocusShowcase';
import DownloadCta from './components/DownloadCta';
import PricingPage from './components/PricingPage';
import AuthScreen from './components/AuthScreen';
import Footer from './components/Footer';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home' | 'pricing' | 'auth'
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'signup'

  // Scroll to section helper
  const handleRouteChange = (route, sectionId) => {
    setCurrentRoute(route);
    if (route === 'home' && sectionId) {
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

  const handleSelectPlan = (plan) => {
    setCurrentRoute('auth');
    setAuthMode('signup');
  };

  return (
    <div className="min-h-screen bg-[#050608] text-[#e2e8f0] flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Top Universal Navbar */}
      {currentRoute !== 'auth' && (
        <Navbar
          activeRoute={currentRoute}
          onRouteChange={(route, section) => {
            if (route === 'auth') {
              setAuthMode('signin');
              setCurrentRoute('auth');
            } else {
              handleRouteChange(route, section);
            }
          }}
          onOpenDownload={handleOpenDownload}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1">
        
        {/* 1. Dedicated Pricing View */}
        {currentRoute === 'pricing' && (
          <PricingPage
            onNavigateHome={() => handleRouteChange('home')}
            onSelectPlan={handleSelectPlan}
          />
        )}

        {/* 2. Dedicated Authentication View */}
        {currentRoute === 'auth' && (
          <AuthScreen
            initialMode={authMode}
            onNavigateHome={() => handleRouteChange('home')}
          />
        )}

        {/* 3. Main Virtual Cockpit Experience */}
        {currentRoute === 'home' && (
          <>
            {/* 01 · Hero with Code-Driven Glitch Logo & Interactive Virtual Cockpit */}
            <HeroCinematic onOpenDownload={handleOpenDownload} />

            {/* 02 · Chaos to Control Comparative Narrative */}
            <div id="features">
              <ChaosToControl />
            </div>

            {/* 03 · Dedicated Interactive Focus Mode Demonstration */}
            <div id="focus">
              <InteractiveFocusShowcase onTryInCockpit={() => handleRouteChange('home', 'cockpit')} />
            </div>

            {/* 04 · Native Download & Developer Previews */}
            <div id="download-section">
              <DownloadCta />
            </div>
          </>
        )}

      </main>

      {/* Footer */}
      {currentRoute !== 'auth' && (
        <Footer onOpenReel={() => handleRouteChange('home', 'cockpit')} />
      )}

    </div>
  );
}
