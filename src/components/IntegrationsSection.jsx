import React from 'react';
import { 
  Bot, 
  FileCode, 
  Cpu, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  Check,
  Zap,
  Layers
} from 'lucide-react';

export default function IntegrationsSection() {
  const integrations = [
    {
      id: 'mission-ai',
      name: 'Mission AI Multi-LLM Engine',
      category: 'AI Telemetry & Synthesis',
      desc: 'Connect Anthropic Claude, Google Gemini, OpenAI, Groq, OpenRouter, NVIDIA NIM, or local Ollama / vLLM with OS-level credential encryption.',
      badge: 'Local DPAPI Encryption',
      badgeTone: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30',
      icon: Bot,
      iconColor: 'text-[#38BDF8] bg-[#081824] border-[#38BDF8]/30 shadow-[0_0_15px_rgba(56,189,248,0.25)]',
      specs: ['Local Ollama & vLLM support', 'Automated crash diff synthesis', 'Per-worker token analytics']
    },
    {
      id: 'vscode-bridge',
      name: 'VS Code & Cursor Bridge',
      category: 'Editor Synchronization',
      desc: 'Includes official extension (mission-control-bridge-0.2.0.vsix) for two-way sync: active file path, editor cursor line/col, diagnostics/problems, and git branch state.',
      badge: 'Two-Way IPC',
      badgeTone: 'text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30',
      icon: FileCode,
      iconColor: 'text-[#00E5FF] bg-[#081820] border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.25)]',
      specs: ['Live diagnostic streaming', 'Focus editor file from terminal', 'Coordinated branch switches']
    },
    {
      id: 'mcp-gateway',
      name: 'Secure MCP Server Gateway',
      category: 'Agent Protocol Firewall',
      desc: 'Runs a local Model Context Protocol server enabling Claude Code, Codex, and external agents to inspect terminals and ports through single-use approval gates.',
      badge: 'Single-Use Tokens',
      badgeTone: 'text-[#C084FC] bg-[#C084FC]/10 border-[#C084FC]/30',
      icon: Cpu,
      iconColor: 'text-[#C084FC] bg-[#140C20] border-[#A855F7]/30 shadow-[0_0_15px_rgba(168,85,247,0.25)]',
      specs: ['Intercepts destructive shell runs', 'Read-only scoped terminal logs', 'Zero environment secret exposure']
    },
    {
      id: 'mobile-companion',
      name: 'Mobile Companion (Android)',
      category: 'Encrypted Remote HUD',
      desc: 'Pair your Android device over encrypted local LAN without cloud servers. Receive critical crash alerts and approve high-stakes decisions from anywhere on your network.',
      badge: 'Encrypted Local LAN',
      badgeTone: 'text-[#00F5A0] bg-[#00F5A0]/10 border-[#00F5A0]/30',
      icon: Smartphone,
      iconColor: 'text-[#00F5A0] bg-[#081812] border-[#00F5A0]/30 shadow-[0_0_15px_rgba(0,245,160,0.25)]',
      specs: ['Zero cloud relay dependency', 'Push approval for Needs You items', 'Real-time worker telemetry pulse']
    },
    {
      id: 'embedded-browser',
      name: 'Embedded Workspace Browser',
      category: 'In-Canvas Preview (Alt+B)',
      desc: 'Electron WebContentsView mounted directly beside your terminal grid. Automatically opens detected dev ports (localhost:3000, 5173) with live reload.',
      badge: 'In-Canvas Preview',
      badgeTone: 'text-[#FFB800] bg-[#FFB800]/10 border-[#FFB800]/30',
      icon: Globe,
      iconColor: 'text-[#FFB800] bg-[#1A1208] border-[#FFB800]/30 shadow-[0_0_15px_rgba(255,184,0,0.25)]',
      specs: ['Automatic localhost detection', 'Side-by-side terminal & browser', 'Integrated dev console']
    }
  ];

  return (
    <section id="integrations" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C084FC]/10 border border-[#C084FC]/30 text-xs font-mono text-[#C084FC] mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>13 // INTEGRATIONS &amp; BRIDGES</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
          A Unified Operational Fabric.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          OUTARCH bridges your entire toolchain—IDE, AI models, terminal agents, local web browsers, and mobile devices—into one coherent, sovereign developer command center.
        </p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="rounded-2xl spotlight-card p-8 flex flex-col justify-between shadow-xl border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border font-bold ${item.badgeTone}`}>
                    {item.badge}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider block mb-1.5 font-bold">
                  {item.category}
                </span>

                <h3 className="font-display text-lg font-bold text-white mb-2.5">
                  {item.name}
                </h3>

                <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 font-mono text-[11px] text-[#94A3B8]">
                {item.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_4px_#00F5A0]" />
                    <span className="text-[#E2E8F0]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
