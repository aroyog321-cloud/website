import React from 'react';
import { 
  Bot, 
  FileCode, 
  Cpu, 
  Smartphone, 
  Globe, 
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
      badgeTone: 'badge-observing',
      icon: Bot,
      iconColor: 'text-[#38BDF8]',
      specs: ['Local Ollama & vLLM support', 'Automated crash diff synthesis', 'Per-worker token analytics']
    },
    {
      id: 'vscode-bridge',
      name: 'VS Code & Cursor Bridge',
      category: 'Editor Synchronization',
      desc: 'Includes official extension (mission-control-bridge-0.2.0.vsix) for two-way sync: active file path, editor cursor line/col, diagnostics/problems, and git branch state.',
      badge: 'Two-Way IPC',
      badgeTone: 'badge-observing',
      icon: FileCode,
      iconColor: 'text-[#38BDF8]',
      specs: ['Live diagnostic streaming', 'Focus editor file from terminal', 'Coordinated branch switches']
    },
    {
      id: 'mcp-gateway',
      name: 'Secure MCP Server Gateway',
      category: 'Agent Protocol Firewall',
      desc: 'Runs a local Model Context Protocol server enabling Claude Code, Codex, and external agents to inspect terminals and ports through single-use approval gates.',
      badge: 'Single-Use Tokens',
      badgeTone: 'badge-ai',
      icon: Cpu,
      iconColor: 'text-[#A855F7]',
      specs: ['Intercepts destructive shell runs', 'Read-only scoped terminal logs', 'Zero environment secret exposure']
    },
    {
      id: 'mobile-companion',
      name: 'Mobile Companion (Android)',
      category: 'Encrypted Remote HUD',
      desc: 'Pair your Android device over encrypted local LAN without cloud servers. Receive critical crash alerts and approve high-stakes decisions from anywhere on your network.',
      badge: 'Encrypted Local LAN',
      badgeTone: 'badge-running',
      icon: Smartphone,
      iconColor: 'text-[#10B981]',
      specs: ['Zero cloud relay dependency', 'Push approval for Needs You items', 'Real-time worker telemetry pulse']
    },
    {
      id: 'embedded-browser',
      name: 'Embedded Workspace Browser',
      category: 'In-Canvas Preview (Alt+B)',
      desc: 'Electron WebContentsView mounted directly beside your terminal grid. Automatically opens detected dev ports (localhost:3000, 5173) with live reload.',
      badge: 'In-Canvas Preview',
      badgeTone: 'badge-waiting',
      icon: Globe,
      iconColor: 'text-[#F59E0B]',
      specs: ['Automatic localhost detection', 'Side-by-side terminal & browser', 'Integrated dev console']
    }
  ];

  return (
    <section id="integrations" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-xs font-mono text-[#A855F7] mb-4">
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
              className="rounded-xl bg-[#0D1117] p-7 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-150"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#131822] border border-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold ${item.badgeTone}`}>
                    {item.badge}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider block mb-1 font-bold">
                  {item.category}
                </span>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {item.name}
                </h3>

                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1.5 font-mono text-[11px] text-[#94A3B8]">
                {item.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
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
