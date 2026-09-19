import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight, 
  Zap, 
  Shield, 
  Activity, 
  Sliders, 
  RefreshCw, 
  ChevronRight, 
  Layers,
  Sparkles,
  Lock,
  BarChart3,
  DollarSign
} from 'lucide-react';

export default function TradingHero({ onOpenApp }) {
  const [activeAsset, setActiveAsset] = useState('BTC');
  const [timeframe, setTimeframe] = useState('1D');
  const [chartHoverIndex, setChartHoverIndex] = useState(null);
  const [livePrice, setLivePrice] = useState(94820.50);
  const [priceChange, setPriceChange] = useState(5.64);
  const [swapAmount, setSwapAmount] = useState('1000');
  const [swapDirection, setSwapDirection] = useState('buy');
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapSuccess, setSwapSuccess] = useState(false);

  // Dynamic price micro-tick simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 12.5;
      setLivePrice((prev) => +(prev + delta).toFixed(2));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // 16-point spline data for interactive chart
  const chartData = [
    { time: '00:00', price: 91200, volume: '1.2B' },
    { time: '02:00', price: 91800, volume: '1.4B' },
    { time: '04:00', price: 91400, volume: '980M' },
    { time: '06:00', price: 92350, volume: '2.1B' },
    { time: '08:00', price: 93100, volume: '3.4B' },
    { time: '10:00', price: 92800, volume: '1.8B' },
    { time: '12:00', price: 93600, volume: '2.9B' },
    { time: '14:00', price: 94100, volume: '4.2B' },
    { time: '16:00', price: 93900, volume: '3.1B' },
    { time: '18:00', price: 94450, volume: '3.8B' },
    { time: '20:00', price: 94200, volume: '2.5B' },
    { time: '22:00', price: 94780, volume: '4.7B' },
    { time: '24:00', price: 94820, volume: '5.1B' }
  ];

  const minPrice = 90500;
  const maxPrice = 95500;
  const getY = (price) => 220 - ((price - minPrice) / (maxPrice - minPrice)) * 180;
  
  const pathD = chartData.reduce((acc, curr, idx) => {
    const x = (idx / (chartData.length - 1)) * 600;
    const y = getY(curr.price);
    return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  const areaD = `${pathD} L 600 240 L 0 240 Z`;

  const handleSimulateSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
      setSwapSuccess(true);
      setTimeout(() => setSwapSuccess(false), 3000);
    }, 1200);
  };

  return (
    <section className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none overflow-visible">
      
      {/* Dynamic Cyberpunk Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00F5A0]/15 via-[#00E5FF]/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-[550px] h-[450px] bg-gradient-to-bl from-[#A855F7]/15 via-[#3B82F6]/10 to-transparent blur-[130px] pointer-events-none -z-10" />

      {/* Hero Header Area */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        
        {/* Luminous Micro Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B1322]/90 border border-[#00E5FF]/30 text-xs font-mono text-[#CBD5E1] mb-6 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:border-[#00E5FF]/60 transition-all">
          <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0] animate-pulse" />
          <span className="text-white font-bold tracking-wide">NEXT-GEN TRADING TERMINAL</span>
          <span className="text-[#00E5FF]/40">·</span>
          <span className="text-[#00E5FF] font-semibold">0.001s ULTRA-LOW LATENCY</span>
        </div>

        {/* Display Typography */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.94] mb-6 text-titanium drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]">
          TRADE SMARTER. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00E5FF] to-[#A855F7]">
            EXECUTE IN MOTION.
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
          The sovereign algorithmic trading cockpit engineered for crypto, perpetuals, and autonomous AI swarms. Zero-slippage routing, sub-millisecond execution, and real-time deep liquidity.
        </p>

        {/* Primary CTA Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenApp}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5A0] text-[#030509] font-black text-xs font-mono tracking-tight transition-all duration-300 active:scale-[0.98] shadow-[0_0_30px_rgba(0,245,160,0.45)] flex items-center justify-center gap-2 group btn-shimmer"
          >
            <span>START TRADING NOW</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          
          <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#080D18]/90 border border-white/10 text-xs font-mono text-[#CBD5E1] backdrop-blur-xl">
            <span className="text-[#94A3B8]">24h Volume:</span>
            <span className="font-bold text-white">$4.82B+</span>
            <span className="text-[#00F5A0] font-bold flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" /> +18.4%
            </span>
          </div>
        </div>

      </div>

      {/* Centerpiece: Roobinium Interactive Chart & Live Trading HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Main Chart Terminal Frame (8 Columns) */}
        <div className="lg:col-span-8 rounded-3xl spotlight-card p-6 sm:p-8 flex flex-col justify-between border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] relative overflow-hidden bg-[#050812]">
          
          {/* Chart Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
            
            {/* Asset Selector & Live Price */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F7931A] to-[#FFB800] p-2 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(247,147,26,0.3)]">
                  ₿
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-black text-lg text-white">BTC / USDT</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] font-bold">
                      PERPETUAL
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-2xl font-black text-white">${livePrice.toLocaleString()}</span>
                    <span className="text-[#00F5A0] font-bold flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +{priceChange}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeframe Selector Pill */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#090E1A] border border-white/10 text-xs font-mono">
              {['1H', '24H', '1W', '1M', '1Y', 'ALL'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                    timeframe === tf
                      ? 'bg-[#00E5FF] text-[#030509] font-bold shadow-[0_0_10px_rgba(0,229,255,0.4)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

          </div>

          {/* Interactive SVG Chart Canvas */}
          <div className="relative my-4 w-full h-[260px] sm:h-[300px]">
            <svg 
              className="w-full h-full overflow-visible"
              viewBox="0 0 600 240"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00F5A0" />
                  <stop offset="50%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Horizontal Guide Grids */}
              {[40, 90, 140, 190].map((yVal, gIdx) => (
                <line
                  key={gIdx}
                  x1="0"
                  y1={yVal}
                  x2="600"
                  y2={yVal}
                  stroke="rgba(255, 255, 255, 0.04)"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Gradient Area Fill */}
              <path d={areaD} fill="url(#chartGradient)" />

              {/* Luminous Spline Line */}
              <path
                d={pathD}
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="3.5"
                filter="url(#glow)"
              />

              {/* Interactive Data Nodes on Chart */}
              {chartData.map((d, idx) => {
                const cx = (idx / (chartData.length - 1)) * 600;
                const cy = getY(d.price);
                const isHovered = chartHoverIndex === idx;
                return (
                  <g key={idx} onMouseEnter={() => setChartHoverIndex(idx)} onMouseLeave={() => setChartHoverIndex(null)}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHovered ? 6 : 3}
                      className="cursor-pointer transition-all"
                      fill={isHovered ? '#FFFFFF' : '#00F5A0'}
                      stroke="#030509"
                      strokeWidth="2"
                    />
                    {isHovered && (
                      <g>
                        <rect
                          x={cx - 45}
                          y={cy - 40}
                          width="90"
                          height="28"
                          rx="6"
                          fill="#080D18"
                          stroke="rgba(0, 229, 255, 0.5)"
                          strokeWidth="1"
                        />
                        <text
                          x={cx}
                          y={cy - 22}
                          fill="#FFFFFF"
                          fontSize="11"
                          fontWeight="bold"
                          textAnchor="middle"
                          fontFamily="monospace"
                        >
                          ${d.price.toLocaleString()}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Pulsing Active Head Dot */}
              <circle
                cx="600"
                cy={getY(chartData[chartData.length - 1].price)}
                r="5"
                fill="#00F5A0"
                className="animate-ping"
              />
              <circle
                cx="600"
                cy={getY(chartData[chartData.length - 1].price)}
                r="4"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          {/* Bottom Live Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/[0.08] font-mono text-xs">
            <div>
              <span className="text-[#94A3B8] text-[10px] block">24H HIGH</span>
              <span className="font-bold text-white">$95,410.00</span>
            </div>
            <div>
              <span className="text-[#94A3B8] text-[10px] block">24H LOW</span>
              <span className="font-bold text-white">$91,020.00</span>
            </div>
            <div>
              <span className="text-[#94A3B8] text-[10px] block">OPEN INTEREST</span>
              <span className="font-bold text-[#00E5FF]">$1.84B</span>
            </div>
            <div>
              <span className="text-[#94A3B8] text-[10px] block">FUNDING RATE</span>
              <span className="font-bold text-[#00F5A0]">0.0100% (8h)</span>
            </div>
          </div>

        </div>

        {/* Right: Instant Swap & Execution Deck (4 Columns) */}
        <div className="lg:col-span-4 rounded-3xl spotlight-card spotlight-card-emerald p-6 sm:p-8 flex flex-col justify-between border border-[#00F5A0]/30 shadow-2xl bg-[#060914] relative">
          
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-xs text-[#00F5A0] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                INSTANT SWAP &amp; LEVERAGE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/30 font-bold">
                0% GAS
              </span>
            </div>

            {/* Direction Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#090E1A] border border-white/10 mb-5 font-mono text-xs font-bold">
              <button
                onClick={() => setSwapDirection('buy')}
                className={`py-2 rounded-lg transition-all ${
                  swapDirection === 'buy'
                    ? 'bg-[#00F5A0] text-[#030509] shadow-[0_0_12px_rgba(0,245,160,0.3)]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                LONG / BUY
              </button>
              <button
                onClick={() => setSwapDirection('sell')}
                className={`py-2 rounded-lg transition-all ${
                  swapDirection === 'sell'
                    ? 'bg-[#FF3366] text-white shadow-[0_0_12px_rgba(255,51,102,0.3)]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                SHORT / SELL
              </button>
            </div>

            {/* Pay Field */}
            <div className="p-4 rounded-2xl bg-[#0B101E] border border-white/10 mb-3">
              <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono mb-2">
                <span>YOU PAY</span>
                <span>BALANCE: 14,850 USDT</span>
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  value={swapAmount}
                  onChange={(e) => setSwapAmount(e.target.value)}
                  className="bg-transparent text-2xl font-black text-white font-mono focus:outline-none w-1/2"
                />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141C2E] border border-white/10 text-xs font-bold text-white">
                  <span>USDT</span>
                </div>
              </div>
            </div>

            {/* Receive Estimate */}
            <div className="p-4 rounded-2xl bg-[#0B101E] border border-white/10 mb-5">
              <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono mb-2">
                <span>YOU RECEIVE EST.</span>
                <span>PRICE: ${livePrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-black text-[#00E5FF] font-mono">
                  {((+swapAmount || 0) / livePrice).toFixed(5)}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141C2E] border border-white/10 text-xs font-bold text-white">
                  <span>BTC</span>
                </div>
              </div>
            </div>

            {/* Execution Details */}
            <div className="space-y-2 text-xs font-mono text-[#94A3B8] p-3 rounded-xl bg-[#080D18] border border-white/5 mb-6">
              <div className="flex items-center justify-between">
                <span>Slippage Tolerance:</span>
                <span className="text-[#00F5A0] font-bold">0.05% (Auto)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Network Fee:</span>
                <span className="text-white font-bold">$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Execution Speed:</span>
                <span className="text-[#00E5FF] font-bold">&lt; 1.2ms</span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div>
            <button
              onClick={handleSimulateSwap}
              disabled={isSwapping}
              className={`w-full py-4 rounded-2xl font-black font-mono text-xs tracking-tight transition-all duration-300 shadow-xl flex items-center justify-center gap-2 ${
                swapSuccess 
                  ? 'bg-[#00F5A0] text-[#030509] shadow-[0_0_25px_rgba(0,245,160,0.5)]'
                  : swapDirection === 'buy'
                  ? 'bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5A0] text-[#030509] shadow-[0_0_20px_rgba(0,245,160,0.3)] btn-shimmer'
                  : 'bg-gradient-to-r from-[#FF3366] to-[#FFB800] text-white shadow-[0_0_20px_rgba(255,51,102,0.3)]'
              }`}
            >
              {isSwapping ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>ROUTING SUB-MILLISECOND ORDER...</span>
                </>
              ) : swapSuccess ? (
                <>
                  <Shield className="w-4 h-4" />
                  <span>ORDER FILLED INSTANTLY!</span>
                </>
              ) : (
                <>
                  <span>CONFIRM {swapDirection.toUpperCase()} ORDER</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
