import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, RefreshCw, Zap, Volume2, VolumeX, Eye } from 'lucide-react';

/**
 * HyperWarpAnimationCanvas
 * 60fps Native WebGL / Canvas 2D Hyperspace Warp Speed & Glitch Engine.
 * Converts the reference video sequence into a live, interactive, real-time web animation.
 */
export default function HyperWarpAnimationCanvas({ onComplete, autoStart = true }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('intro_logo'); // 'intro_logo' | 'warp_launch' | 'warp_peak' | 'settled'
  const [interactiveMode, setInteractiveMode] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(1);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const animStateRef = useRef({
    speed: 0.8,
    targetSpeed: 0.8,
    warpAlpha: 0.4,
    shockwaveRadius: 0,
    shockwaveMax: 0,
    shockwaveActive: false,
    particles: [],
    codeFragments: [],
    frame: 0,
    burstTime: 0,
  });

  // Sample code snippets that fly past during the warp sequence
  const sampleCodes = [
    'session.spawnPTY("conpty")',
    'CrashLens.inspect(EADDRINUSE)',
    'DAG.readyGate(port: 5432)',
    'DAEMON // ONLINE // 60FPS',
    'MCP_GATEWAY.approveToken()',
    'OUTARCH.engine.supervise()',
    'LAN_BRIDGE.handshake(AES-256)',
    'BYOK.decryptCredentials()',
    'xterm.stream.sanitize()',
    '0.14ms Latency PTY Subsystem',
  ];

  // Initialize particles
  const initParticles = useCallback((width, height) => {
    const count = 180;
    const particles = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * Math.max(width, height) * 0.6;
      particles.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        z: Math.random() * 1000 + 100,
        origZ: Math.random() * 1000 + 100,
        length: Math.random() * 25 + 10,
        color: ['#00F0FF', '#FFFFFF', '#EC4899', '#A855F7', '#38BDF8'][Math.floor(Math.random() * 5)],
        width: Math.random() * 2.5 + 0.8,
        speedMult: Math.random() * 1.5 + 0.8,
      });
    }

    // Code tokens floating in 3D
    const codeFragments = [];
    for (let i = 0; i < 14; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 300 + 100;
      codeFragments.push({
        text: sampleCodes[i % sampleCodes.length],
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        z: Math.random() * 1200 + 300,
        color: i % 2 === 0 ? '#00F0FF' : '#E2E8F0',
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    animStateRef.current.particles = particles;
    animStateRef.current.codeFragments = codeFragments;
  }, []);

  // Trigger Hyperjump Burst
  const triggerHyperjump = useCallback(() => {
    const s = animStateRef.current;
    s.targetSpeed = 24;
    s.speed = 18;
    s.warpAlpha = 0.95;
    s.shockwaveRadius = 10;
    s.shockwaveMax = Math.max(window.innerWidth, window.innerHeight) * 0.8;
    s.shockwaveActive = true;
    s.burstTime = Date.now();
    setPhase('warp_launch');
    setGlitchIntensity(2.5);

    setTimeout(() => {
      setPhase('warp_peak');
      s.targetSpeed = 8;
    }, 1200);

    setTimeout(() => {
      setPhase('settled');
      s.targetSpeed = 1.2;
      s.warpAlpha = 0.45;
      setGlitchIntensity(1);
      if (onComplete) onComplete();
    }, 2800);
  }, [onComplete]);

  // Handle Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      initParticles(canvas.offsetWidth, canvas.offsetHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (autoStart) {
      setTimeout(() => {
        triggerHyperjump();
      }, 400);
    }

    const render = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;

      const s = animStateRef.current;
      s.frame++;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const centerX = w * mouseRef.current.x;
      const centerY = h * mouseRef.current.y;

      // Speed smoothing
      s.speed += (s.targetSpeed - s.speed) * 0.06;

      // Semi-transparent background clear for motion blur trail effect
      ctx.fillStyle = s.speed > 5 ? 'rgba(5, 6, 8, 0.28)' : 'rgba(5, 6, 8, 0.45)';
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(centerX, centerY);

      // 1. Draw Shockwave Ring if active
      if (s.shockwaveActive) {
        s.shockwaveRadius += (s.shockwaveMax - s.shockwaveRadius) * 0.08;
        const progress = s.shockwaveRadius / s.shockwaveMax;
        const alpha = Math.max(0, 1 - progress);

        if (alpha > 0.01) {
          ctx.beginPath();
          ctx.arc(0, 0, s.shockwaveRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.7})`;
          ctx.lineWidth = 4 * (1 - progress) + 1;
          ctx.stroke();

          // Second magenta echo ring
          ctx.beginPath();
          ctx.arc(0, 0, s.shockwaveRadius * 0.85, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(236, 72, 153, ${alpha * 0.5})`;
          ctx.lineWidth = 2 * (1 - progress);
          ctx.stroke();
        } else {
          s.shockwaveActive = false;
        }
      }

      // 2. Draw Warp Laser Rays
      for (let i = 0; i < s.particles.length; i++) {
        const p = s.particles[i];
        p.z -= s.speed * p.speedMult * 4;

        if (p.z <= 0) {
          p.z = 1000;
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * Math.max(w, h) * 0.5;
          p.x = Math.cos(angle) * dist;
          p.y = Math.sin(angle) * dist;
        }

        const k = 350 / p.z;
        const px = p.x * k;
        const py = p.y * k;

        // Calculate tail ray
        const tailLength = Math.min(s.speed * 2.5 + p.length, 120);
        const prevZ = p.z + tailLength;
        const prevK = 350 / prevZ;
        const prevPx = p.x * prevK;
        const prevPy = p.y * prevK;

        const size = Math.max(0.5, (1 - p.z / 1000) * p.width * (s.speed > 5 ? 1.8 : 1));
        const alpha = Math.max(0.1, (1 - p.z / 1000) * s.warpAlpha);

        // Render laser streak
        ctx.beginPath();
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // 3. Draw 3D Floating Code Matrix Stream
      if (s.speed > 2 || phase === 'warp_launch' || phase === 'warp_peak') {
        ctx.font = '10px "JetBrains Mono", monospace';
        for (let i = 0; i < s.codeFragments.length; i++) {
          const c = s.codeFragments[i];
          c.z -= s.speed * 6;
          if (c.z <= 50) {
            c.z = 1200;
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 400 + 120;
            c.x = Math.cos(angle) * dist;
            c.y = Math.sin(angle) * dist;
          }

          const k = 400 / c.z;
          const cx = c.x * k;
          const cy = c.y * k;
          const alpha = Math.max(0, (1 - c.z / 1200) * 0.85);

          if (alpha > 0.05) {
            ctx.fillStyle = c.color;
            ctx.globalAlpha = alpha;
            ctx.fillText(c.text, cx, cy);
          }
        }
      }

      ctx.restore();
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [autoStart, initParticles, phase, triggerHyperjump]);

  const handleMouseMove = (e) => {
    if (!interactiveMode || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseRef.current.targetX = Math.max(0.2, Math.min(0.8, x));
    mouseRef.current.targetY = Math.max(0.2, Math.min(0.8, y));
  };

  return (
    <div 
      className="relative w-full rounded-3xl overflow-hidden glass-panel-glow border border-white/15 group select-none"
      onMouseMove={handleMouseMove}
      onClick={() => interactiveMode && triggerHyperjump()}
    >
      {/* 1. The 60fps Hardware Accelerated WebGL/Canvas Raycaster */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-[420px] sm:h-[500px] md:h-[560px] block cursor-crosshair bg-[#050608]"
      />

      {/* 2. Central Holographic Glitch Composite Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
        
        {/* Phase Indicator Beacon */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/90 border border-cyan-500/30 backdrop-blur-md text-[10px] font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="tracking-widest uppercase font-bold">
            {phase === 'warp_launch' && '⚡ HYPERSPACE WARP INITIATED'}
            {phase === 'warp_peak' && '🚀 QUANTUM PTY MATRIX STREAMING'}
            {(phase === 'settled' || phase === 'intro_logo') && '● 60FPS LIVE COCKPIT ENGINE'}
          </span>
        </div>

        {/* Central Logo Lockup: Glitch 'O' or Full OUTARCH Wordmark with Real RGB Aberration */}
        <div className="relative flex items-center justify-center">
          
          {/* Main Hero Glitch Image */}
          <div className="relative group-hover:scale-105 transition-transform duration-500">
            <img 
              src="/assets/outarch-glitch-wordmark.png" 
              alt="OUTARCH Glitch Wordmark" 
              className={`max-w-[280px] sm:max-w-[420px] md:max-w-[560px] h-auto object-contain filter drop-shadow-[0_0_35px_rgba(0,240,255,0.55)] transition-all duration-300 ${
                phase === 'warp_launch' || phase === 'warp_peak' ? 'scale-110 blur-[1px]' : 'scale-100'
              }`}
              onError={(e) => {
                // Fallback to text if image fails
                e.target.style.display = 'none';
                if (e.target.nextElementSibling) e.target.nextElementSibling.style.display = 'block';
              }}
            />
            {/* Fallback Text Heading */}
            <h1 className="hidden font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-wider text-white">
              OUTARCH
            </h1>
          </div>

          {/* RGB Split Slice 1 (Cyan Shift) */}
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-60 mix-blend-screen -translate-x-1.5 translate-y-0.5 animate-glitch-1 filter hue-rotate-180 pointer-events-none"
            style={{ transform: `scale(${glitchIntensity})` }}
          >
            <img 
              src="/assets/outarch-glitch-wordmark.png" 
              alt="" 
              className="max-w-[280px] sm:max-w-[420px] md:max-w-[560px] h-auto object-contain opacity-70" 
            />
          </div>

          {/* RGB Split Slice 2 (Magenta Shift) */}
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-50 mix-blend-screen translate-x-1.5 -translate-y-0.5 animate-glitch-2 pointer-events-none"
          >
            <img 
              src="/assets/outarch-glitch-wordmark.png" 
              alt="" 
              className="max-w-[280px] sm:max-w-[420px] md:max-w-[560px] h-auto object-contain opacity-60" 
            />
          </div>

          {/* Glowing Scanline Bar */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00F0FF] animate-scanline opacity-75" />
        </div>

        {/* Subtitle / Cockpit Tagline */}
        <p className="mt-4 font-mono text-xs sm:text-sm text-cyan-200/90 tracking-[0.25em] uppercase text-center max-w-lg font-semibold drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
          Zero-Latency PTY Cockpit & AI Supervision Engine
        </p>

        {/* HUD Targeting Coordinates from Brand Sheet */}
        <div className="mt-6 flex items-center gap-4 text-[10px] font-mono text-zinc-400">
          <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-cyan-400">
            [ LAT: 37.77 // LNG: -122.41 ]
          </span>
          <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-emerald-400">
            [ CONPTY: 0.14ms ]
          </span>
          <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-purple-400">
            [ MCP: ARMED ]
          </span>
        </div>
      </div>

      {/* 3. Interactive Floating Control Ribbon */}
      <div className="absolute bottom-4 inset-x-4 flex flex-wrap items-center justify-between gap-3 z-20 pointer-events-auto">
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              triggerHyperjump();
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-tight shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all active:scale-95"
            title="Detonate hyperspace warp burst"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>TRIGGER HYPERJUMP</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowVideoModal(true);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 hover:bg-black/80 border border-white/15 text-zinc-300 hover:text-white text-xs font-mono transition-all"
            title="Watch Original Cinematic Video Reel"
          >
            <Play className="w-3 h-3 text-pink-400" />
            <span>Watch Full Cinematic</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span className="hidden sm:inline">Move cursor to steer perspective // Click canvas to jump</span>
          <span className="sm:hidden">Tap to Hyperjump</span>
        </div>
      </div>

      {/* 4. Video Modal Popup (Plays with_these_type_of_pictures_wh.mp4) */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl pointer-events-auto"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-cyan-500/40 bg-zinc-950 shadow-[0_0_60px_rgba(0,240,255,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-3 bg-zinc-900 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Play className="w-3.5 h-3.5" />
                  <span>OUTARCH — Cinematic Reel Reference</span>
                </div>
                <button 
                  onClick={() => setShowVideoModal(false)}
                  className="px-2 py-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  ✕ Close
                </button>
              </div>
              <div className="aspect-video bg-black flex items-center justify-center">
                <video 
                  src="/assets/outarch-cinematic.mp4" 
                  controls 
                  autoPlay 
                  loop 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
