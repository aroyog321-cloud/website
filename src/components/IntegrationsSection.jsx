import React from 'react';
import { 
  Bot, 
  FileCode, 
  Cpu, 
  Smartphone, 
  Globe, 
  Key, 
  ShieldCheck, 
  Radio, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function IntegrationsSection() {
  const integrations = [
    {
      id: 'mission-ai',
      name: 'Mission AI Multi-LLM Engine',
      category: 'AI Telemetry & Synthesis',
      desc: 'Native integration with Anthropic Claude, Google Gemini, OpenAI, Groq, OpenRouter, NVIDIA NIM, and local Ollama / vLLM with OS-level DPAPI credential encryption.',
      badge: 'Zero Plaintext Keys',
      icon: Bot,
      color: 'from-blue-500/20 to-indigo-500/20',
      specs: ['Local Ollama & vLLM support', 'Automated crash diff synthesis', 'Token & cost analytics per worker']
    },
    {
      id: 'vscode-bridge',
      name: 'VS Code & Cursor Bridge',
      category: 'Editor Synchronization',
      desc: 'Includes official extension (mission-control-bridge.vsix) for two-way sync: active file path, editor cursor position, diagnostics/problems, and git branch state.',
      badge: 'Two-Way IPC Sync',
      icon: FileCode,
      color: 'from-sky-500/20 to-blue-500/20',
      specs: ['Live breakpoint & diagnostic streaming', 'Focus editor file from terminal logs', 'Coordinated git branch switches']
    },
    {
      id: 'mcp-gateway',
      name: 'Secure MCP Server Gateway',
      category: 'Agent Protocol Firewall',
      desc: 'Runs a local Model Context Protocol server enabling Claude Code, Codex, and external agents to inspect terminals and ports through single-use approval gates.',
      badge: 'Single-Use Tokens',
      icon: Cpu,
      color: 'from-amber-500/20 to-orange-500/20',
      specs: ['Intercepts destructive shell executions', 'Read-only scoped terminal logs', 'Zero environment secret exposure']
    },
    {
      id: 'mobile-companion',
      name: 'Mobile Companion (Android)',
      category: 'Encrypted Remote HUD',
      desc: 'Pair your Android device over encrypted local LAN without cloud servers. Receive critical crash alerts and approve high-stakes decisions from anywhere in your office.',
      badge: 'Encrypted Local LAN',
      icon: Smartphone,
      color: 'from-emerald-500/20 to-teal-500/20',
      specs: ['Zero cloud relay dependency', 'Push approval for "Needs You" items', 'Real-time worker telemetry pulse']
    },
    {
      id: 'embedded-browser',
      name: 'Embedded WebContents Browser',
      category: 'In-Canvas Preview (Alt+B)',
      desc: 'Electron WebContentsView mounted directly beside your terminal grid. Automatically opens detected dev ports (localhost:3000, 5173) with live reload and DOM inspection.',
      badge: 'Zero Window Switching',
      icon: Globe,
      color: 'from-purple-500/20 to-pink-500/20',
      specs: ['Automatic localhost endpoint detection', 'Side-by-side terminal & browser layout', 'Integrated cookies & dev console']
    }
  ];

  return (
    <section id="integrations" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold mb-4">
          <Radio className="w-3.5 h-3.5" />
          <span>OFFICIAL ECOSYSTEM BRIDGES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Unified Integrations Hub
        </h2>
        <p className="font-sans text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          OUTARCH bridges your entire toolchain—IDE, AI models, terminal agents, local web browsers, and mobile devices—into one coherent, sovereign operational fabric.
        </p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="rounded-2xl bg-[#080b12] border border-[#161c2c] hover:border-blue-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0e1422] border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-blue-300 font-bold px-2 py-0.5 rounded bg-blue-950/70 border border-blue-500/30">
                    {item.badge}
                  </span>
                </div>

                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>

                <h3 className="font-display text-lg font-bold text-white mb-2 tracking-wide">
                  {item.name}
                </h3>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <ul className="space-y-2 border-t border-[#131826] pt-4 mb-4">
                  {item.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 font-sans text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-blue-400">
                <span>Native Bridge Active</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
