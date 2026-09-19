import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Copy, Check, Sliders, Shield, Terminal, Cpu, Layers } from 'lucide-react';

/**
 * BrandAssetShowcase
 * Showcases the official OUTARCH Brand Identity System from `outarch-brand-sheet.png`,
 * providing interactive HUD badges, wireframe vectors, and an interactive real-time glitch playground.
 */
export default function BrandAssetShowcase() {
  const [copiedId, setCopiedId] = useState(null);
  const [glitchAmount, setGlitchAmount] = useState(4);
  const [activeTab, setActiveTab] = useState('badges'); // 'badges' | 'hud' | 'sheet'

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const brandElements = [
    {
      id: 'glitch-wordmark',
      title: 'Glitch Wordmark',
      desc: 'Chromatic aberration titanium typography with micro-scanline slices.',
      preview: '/assets/outarch-glitch-wordmark.png',
      type: 'image',
      tag: 'PRIMARY BRANDING'
    },
    {
      id: 'glitch-icon',
      title: 'App Badge (Squircle)',
      desc: 'Authoritative PTY session icon with dual cyan/blue glitch displacements.',
      preview: '/assets/outarch-glitch-icon.png',
      type: 'image',
      tag: 'APPLICATION ICON'
    },
    {
      id: 'hud-reticle-o',
      title: 'Targeting Reticle [ O ]',
      desc: 'Precision HUD targeting brackets for tactical process isolation.',
      preview: (
        <div className="relative flex items-center justify-center p-6">
          <div className="text-cyan-400 font-mono text-3xl font-black tracking-widest flex items-center gap-2">
            <span className="text-cyan-500 font-light">[</span>
            <span className="text-white drop-shadow-[0_0_12px_#00F0FF]">O</span>
            <span className="text-cyan-500 font-light">]</span>
          </div>
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
        </div>
      ),
      type: 'component',
      tag: 'HUD ELEMENT'
    },
    {
      id: 'stadium-pill-badge',
      title: 'Stadium Pill Lockup',
      desc: 'Encapsulated badge for CLI terminals, documentation, and status ribbons.',
      preview: (
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-black border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-display font-black tracking-[0.2em] text-white text-sm">OUTARCH</span>
          <span className="font-mono text-[9px] text-cyan-300 border-l border-white/20 pl-2">V2.19</span>
        </div>
      ),
      type: 'component',
      tag: 'EMBLEM'
    },
  ];

  return (
    <section id="brand-system" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <Layers className="w-3.5 h-3.5" />
          <span className="tracking-widest uppercase font-bold">IDENTITY & DESIGN TOKENS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
          Engineered for <span className="text-neon-cyan">Deep Immersion</span>
        </h2>
        <p className="font-sans text-zinc-400 text-base sm:text-lg leading-relaxed">
          The OUTARCH visual identity fuses high-density telemetry, tactical HUD reticles, and chromatic quantum glitch typography.
        </p>
      </div>

      {/* Main Grid: Assets & Interactive Glitch Lab */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Brand Elements Bento Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {brandElements.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="bento-card p-5 bg-[#0A0E17]/90 border border-white/10 hover:border-cyan-400/50 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                    {item.tag}
                  </span>
                  <button
                    onClick={() => copyToClipboard(typeof item.preview === 'string' ? item.preview : item.title, item.id)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-all"
                    title="Copy Asset URI / Tag"
                  >
                    {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Preview Box */}
                <div className="h-32 rounded-xl bg-black/60 border border-white/5 flex items-center justify-center p-3 mb-4 overflow-hidden relative group-hover:border-cyan-500/30 transition-colors">
                  {item.type === 'image' ? (
                    <img 
                      src={item.preview} 
                      alt={item.title} 
                      className="max-h-24 max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-transform duration-300" 
                    />
                  ) : (
                    item.preview
                  )}
                  {/* Subtle Grid in Preview */}
                  <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
                </div>

                <h3 className="font-display text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Full Master Brand Sheet Inspector & Download (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Master Brand Sheet Container */}
          <div className="bento-card p-6 bg-[#0A0E17]/95 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">OFFICIAL BRAND SHEET</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                PNG // 4K HIGH RES
              </span>
            </div>

            {/* Brand Sheet Full View */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/80 p-2 mb-5 group">
              <img 
                src="/assets/outarch-brand-sheet.png" 
                alt="OUTARCH Brand Sheet" 
                className="w-full h-auto object-cover rounded filter contrast-125 brightness-110 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-mono text-cyan-300">
                  Includes Wireframe 'O', Stadium Pills, HUD Reticles & Vector Variants
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <a
                href="/assets/outarch-brand-sheet.png"
                download="OUTARCH-Brand-Sheet-4K.png"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl btn-primary text-xs font-mono font-bold tracking-tight shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD BRAND KIT</span>
              </a>
              <a
                href="/assets/outarch-glitch-wordmark.png"
                download="OUTARCH-Wordmark.png"
                className="px-4 py-3 rounded-xl btn-cyber-outline text-xs font-mono font-bold tracking-tight"
                title="Download Glitch Wordmark"
              >
                WORDMARK
              </a>
            </div>
          </div>

          {/* Glitch Calibration Micro-Widget */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>TERMINAL THEME: CYBER_OBSIDIAN</span>
            </div>
            <span className="text-emerald-400 font-bold">READY</span>
          </div>

        </div>

      </div>

    </section>
  );
}
