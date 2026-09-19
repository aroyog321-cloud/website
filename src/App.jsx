import React, { useState } from 'react';
import { CockpitProvider } from './context/CockpitContext';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import ProductStoryTimeline from './components/ProductStoryTimeline';
import DownloadCta from './components/DownloadCta';
import PricingPage from './components/PricingPage';
import AuthScreen from './components/AuthScreen';
import Footer from './components/Footer';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home' | 'pricing' | 'auth'

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

  return (
    <CockpitProvider>
      <div className="min-h-screen bg-[#050608] text-[#e2e8f0] flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
        
        {/* Top Developer Navbar */}
        {currentRoute !== 'auth' && (
          <Navbar
            activeRoute={currentRoute}
            onRouteChange={(route, section) => {
              if (route === 'auth') {
                setCurrentRoute('auth');
              } else {
                handleRouteChange(route, section);
              }
            }}
            onOpenDownload={handleOpenDownload}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1">
          
          {/* 1. Dedicated Pricing View */}
          {currentRoute === 'pricing' && (
            <PricingPage
              onNavigateHome={() => handleRouteChange('home')}
              onSelectPlan={() => setCurrentRoute('auth')}
            />
          )}

          {/* 2. Dedicated Authentication View */}
          {currentRoute === 'auth' && (
            <AuthScreen
              onNavigateHome={() => handleRouteChange('home')}
            />
          )}

          {/* 3. Main Unified Virtual Cockpit Experience */}
          {currentRoute === 'home' && (
            <>
              {/* 01 · Hero with Logo & Unified Virtual OUTARCH Cockpit */}
              <HeroCinematic onOpenDownload={handleOpenDownload} />

              {/* 02 · Interactive Lifecycle Storyteller (Drives the Single Cockpit) */}
              <div id="features">
                <ProductStoryTimeline />
              </div>

              {/* 03 · Native Download & Verified Acceptance Scripts */}
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
    </CockpitProvider>
  );
}
