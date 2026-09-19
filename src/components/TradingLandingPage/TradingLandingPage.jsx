import React from 'react';
import TradingHero from './TradingHero';
import LiveTradingTicker from './LiveTradingTicker';
import InteractiveChartSection from './InteractiveChartSection';
import TradingFeaturesGrid from './TradingFeaturesGrid';
import TradingStatsCounter from './TradingStatsCounter';
import TradingCta from './TradingCta';

export default function TradingLandingPage({ onOpenApp }) {
  return (
    <div className="w-full flex flex-col">
      {/* 01 · Hero with Interactive Spline Chart & Instant Swap Widget */}
      <TradingHero onOpenApp={onOpenApp} />

      {/* 02 · Live Scrolling Asset Ticker Strip with Real-time Sparklines */}
      <LiveTradingTicker />

      {/* 03 · Advanced Candlesticks & Live Order Book Terminal */}
      <InteractiveChartSection />

      {/* 04 · Core Trading Infrastructure Features (Roobinium Style) */}
      <TradingFeaturesGrid />

      {/* 05 · Global Performance & Volume Statistics */}
      <TradingStatsCounter />

      {/* 06 · High-Impact CTA Banner */}
      <TradingCta onOpenApp={onOpenApp} />
    </div>
  );
}
