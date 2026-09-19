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
      colSpan: 'lg:col-span-2',
      specs: ['Local Ollama & vLLM support', 'Automated crash diff synthesis', 'Per-worker token analytics']
    },
    {
      id: 'vscode-bridge',
      name: 'VS Code & Cursor Bridge',
      category: 'Editor Synchronization',
      desc: 'Includes official extension for two-way sync: active file path, editor cursor line/col, diagnostics/problems, and git branch state.',
      badge: 'Two-Way IPC',
      badgeTone: 'badge-observing',
      icon: FileCode,
      iconColor: 'text-[#38BDF8]',
      colSpan: 'lg:col-span-1',
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
      colSpan: 'lg:col-span-1',
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
      colSpan: 'lg:col-span-2',
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
      colSpan: 'lg:col-span-3',
      specs: ['Automatic localhost detection', 'Side-by-side terminal & browser', 'Integrated dev console']
    }
  ];

  return (
    <section id="integrations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#94A3B8] mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          <Layers className="w-3.5 h-3.5 text-[#A855F7]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">// INTEGRATIONS &amp; BRIDGES</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-titanium tracking-[-0.03em] uppercase leading-[0.96]">
          A Unified Operational Fabric.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          OUTARCH bridges your entire toolchain—IDE, AI models, terminal agents, local web browsers, and mobile devices—into one coherent, sovereign developer command center.
        </p>
      </div>

      {/* Varied Bento Box Grouping */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {integrations.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`bento-card p-7 sm:p-8 flex flex-col justify-between ${item.colSpan}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#101622] border border-white/10 flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-md font-bold ${item.badgeTone}`}>
                    {item.badge}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider block mb-1.5 font-bold">
                  {item.category}
                </span>

                <h3 className="font-display text-xl font-bold text-white mb-2 tracking-tight">
                  {item.name}
                </h3>

                <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 font-mono text-xs text-[#94A3B8]">
                {item.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
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
