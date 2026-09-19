import React from 'react';
import { 
  Bot, 
  FileCode, 
  Cpu, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  Check
} from 'lucide-react';

export default function IntegrationsSection() {
  const integrations = [
    {
      id: 'mission-ai',
      name: 'Mission AI Multi-LLM Engine',
      category: 'AI Telemetry & Synthesis',
      desc: 'Native integration with Anthropic Claude, Google Gemini, OpenAI, Groq, OpenRouter, NVIDIA NIM, and local Ollama / vLLM with OS-level DPAPI credential encryption.',
      badge: 'Local DPAPI Encryption',
      icon: Bot,
      specs: ['Local Ollama & vLLM support', 'Automated crash diff synthesis', 'Per-worker token analytics']
    },
    {
      id: 'vscode-bridge',
      name: 'VS Code & Cursor Bridge',
      category: 'Editor Synchronization',
      desc: 'Includes official extension (mission-control-bridge.vsix) for two-way sync: active file path, editor cursor position, diagnostics/problems, and git branch state.',
      badge: 'Two-Way IPC',
      icon: FileCode,
      specs: ['Live diagnostic streaming', 'Focus editor file from terminal', 'Coordinated branch switches']
    },
    {
      id: 'mcp-gateway',
      name: 'Secure MCP Server Gateway',
      category: 'Agent Protocol Firewall',
      desc: 'Runs a local Model Context Protocol server enabling Claude Code, Codex, and external agents to inspect terminals and ports through single-use approval gates.',
      badge: 'Single-Use Tokens',
      icon: Cpu,
      specs: ['Intercepts destructive shell runs', 'Read-only scoped terminal logs', 'Zero environment secret exposure']
    },
    {
      id: 'mobile-companion',
      name: 'Mobile Companion (Android)',
      category: 'Encrypted Remote HUD',
      desc: 'Pair your Android device over encrypted local LAN without cloud servers. Receive critical crash alerts and approve high-stakes decisions from anywhere in your office.',
      badge: 'Encrypted Local LAN',
      icon: Smartphone,
      specs: ['Zero cloud relay dependency', 'Push approval for Needs You items', 'Real-time worker telemetry pulse']
    },
    {
      id: 'embedded-browser',
      name: 'Embedded WebContents Browser',
      category: 'In-Canvas Preview (Alt+B)',
      desc: 'Electron WebContentsView mounted directly beside your terminal grid. Automatically opens detected dev ports (localhost:3000, 5173) with live reload and DOM inspection.',
      badge: 'Zero Window Switching',
      icon: Globe,
      specs: ['Automatic localhost detection', 'Side-by-side terminal & browser', 'Integrated cookies & dev console']
    }
  ];

  return (
    <section id="integrations" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-20">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-3">
          // Integrations & Bridges
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[1.05]">
          A Unified Operational Fabric.
        </h2>
        <p className="font-sans text-[#8B93A1] text-base sm:text-lg mt-6 leading-relaxed">
          OUTARCH bridges your entire toolchain—IDE, AI models, terminal agents, local web browsers, and mobile devices—into one coherent, sovereign developer operating system.
        </p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {integrations.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="rounded-2xl bg-[#080A0F] border border-[#1A1E26] hover:border-white/20 p-8 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0E131F] border border-white/10 flex items-center justify-center text-[#F4F6F8]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-[#8B93A1] px-2 py-0.5 rounded bg-[#10131A] border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <span className="font-mono text-[11px] text-[#8B93A1] uppercase tracking-wider block mb-2">
                  {item.category}
                </span>

                <h3 className="font-display text-lg font-bold text-[#F4F6F8] mb-3">
                  {item.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#8B93A1] leading-relaxed mb-6">
                  {item.desc}
                </p>

                <ul className="space-y-2 border-t border-white/[0.04] pt-4 mb-4">
                  {item.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 font-sans text-xs text-[#8B93A1]">
                      <Check className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
