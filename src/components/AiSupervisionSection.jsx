import React, { useState } from 'react';
import { Bot, Shield, CheckCircle2, AlertTriangle, Key, Lock, Terminal, Clock, FileCode, Check } from 'lucide-react';

const AGENTS = [
  {
    id: 'claude',
    name: 'Claude Code',
    status: 'ACTIVE',
    objective: 'Refactor session token validation with null safety',
    scope: 'Read: /src, /test | Gated Write | Network: None',
    checkpoints: '3 of 3 Verified',
    memoryBudget: '184 KiB / 256 KiB',
    currentAction: 'Waiting for developer approval in Needs You queue',
  },
  {
    id: 'codex',
    name: 'Codex CLI',
    status: 'MONITORING',
    objective: 'Generate TypeScript strict-mode interface contracts',
    scope: 'Read: /src/types | Gated Write | Network: None',
    checkpoints: '2 of 2 Verified',
    memoryBudget: '92 KiB / 256 KiB',
    currentAction: 'Idle awaiting next execution target',
  },
  {
    id: 'gemini',
    name: 'Gemini Mission Supervisor',
    status: 'AUTHENTICATED',
    objective: 'Grounded workspace planning & DAG schema analysis',
    scope: 'OS-Encrypted DPAPI Credential | Zero Server Storage',
    checkpoints: 'Stateless Interactions Endpoint',
    memoryBudget: 'Local Context Boundary Only',
    currentAction: 'Grounded project query ready via Ask Mission AI',
  },
  {
    id: 'opencode',
    name: 'OpenCode Agent',
    status: 'STANDBY',
    objective: 'Local-first model supervision via llama.cpp backend',
    scope: 'Localhost Loopback Only | Zero External Egress',
    checkpoints: '1 of 1 Verified',
    memoryBudget: '48 KiB / 256 KiB',
    currentAction: 'Standby for offline development sessions',
  }
];

export default function AiSupervisionSection() {
  const [selectedAgent, setSelectedAgent] = useState(AGENTS[0]);

  return (
    <section id="ai-supervision" className="py-24 bg-[#0B0D11] border-b border-[#c3d3e4]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#afc6f3]/20 bg-[#10131A] text-[11px] font-mono text-[#afc6f3] mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>RIGOROUS AI SUPERVISION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            No Magic Avatars. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eef2f6] via-[#afc6f3] to-[#c2ecd8]">
              Explicit Contracts. Bounded Scopes.
            </span>
          </h2>
          <p className="text-[#95a2b1] text-base sm:text-lg">
            OUTARCH does not turn your terminal into an uncontrolled chatbot. Supervised agents operate through verifiable Mission Contracts, observable checkpoints, and 15-minute expiring approval tokens.
          </p>
        </div>

        {/* Agent Cards and Contract Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Agent Selection List */}
          <div className="lg:col-span-5 space-y-3 font-mono">
            <span className="text-xs uppercase tracking-widest text-[#6b7788] px-1 block mb-2">
              Supported Coding Agents (4)
            </span>

            {AGENTS.map((agent) => {
              const isSelected = selectedAgent.id === agent.id;
              return (
                <div
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#161B24] border-[#afc6f3]/50 shadow-[0_4px_25px_rgba(175,198,243,0.1)]'
                      : 'bg-[#0E1319]/80 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/25 hover:bg-[#12171E]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        agent.status === 'ACTIVE' 
                          ? 'bg-[#a9ddc4] animate-pulse' 
                          : agent.status === 'AUTHENTICATED' 
                            ? 'bg-[#afc6f3]' 
                            : 'bg-[#95a2b1]'
                      }`} />
                      <span className="text-sm font-bold text-white">{agent.name}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#10131A] text-[#afc6f3] border border-[#afc6f3]/20">
                      {agent.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#95a2b1] line-clamp-1 font-sans">
                    {agent.objective}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[10px] text-[#6b7788] pt-2 border-t border-[#c3d3e4]/5">
                    <span>{agent.checkpoints}</span>
                    <span className="text-[#a9ddc4]">CONTRACT ENFORCED</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Mission Contract Inspector */}
          <div className="lg:col-span-7 bg-[#050608] border border-[#c3d3e4]/15 rounded-xl p-6 font-mono text-xs shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#c3d3e4]/10">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#afc6f3]" />
                <span className="text-white font-bold text-sm">
                  MISSION CONTRACT SPECIFICATION
                </span>
              </div>
              <span className="text-[11px] text-[#a9ddc4] flex items-center gap-1">
                <Lock className="w-3 h-3" />
                OS-ENCRYPTED BOUNDARY
              </span>
            </div>

            {/* Spec Fields */}
            <div className="space-y-4">
              
              <div>
                <label className="text-[10px] text-[#6b7788] uppercase block mb-1">Assigned Agent</label>
                <div className="text-white text-sm font-bold">{selectedAgent.name}</div>
              </div>

              <div>
                <label className="text-[10px] text-[#6b7788] uppercase block mb-1">Durable Objective</label>
                <div className="p-3 bg-[#10131A] rounded-lg border border-[#c3d3e4]/10 text-[#d3dce6] text-xs">
                  {selectedAgent.objective}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-[#6b7788] uppercase block mb-1">Authority Scopes</label>
                  <div className="p-2.5 bg-[#10131A] rounded-lg border border-[#c3d3e4]/10 text-[#afc6f3] text-[11px]">
                    {selectedAgent.scope}
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-[#6b7788] uppercase block mb-1">Evidence Gate</label>
                  <div className="p-2.5 bg-[#10131A] rounded-lg border border-[#c3d3e4]/10 text-[#a9ddc4] text-[11px]">
                    {selectedAgent.checkpoints}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-[#6b7788] uppercase block mb-1">Live Engine Status</label>
                <div className="p-3 bg-[#161B24] rounded-lg border border-[#afc6f3]/20 text-[#eef2f6] text-[11px] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a9ddc4] animate-ping" />
                  <span>{selectedAgent.currentAction}</span>
                </div>
              </div>

            </div>

            {/* Safety Guarantee Footer */}
            <div className="pt-4 border-t border-[#c3d3e4]/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#95a2b1]">
              <div className="flex items-center gap-1.5 text-[#a9ddc4]">
                <Check className="w-3.5 h-3.5" />
                <span>Zero Hallucinated Progress %</span>
              </div>
              <div className="text-[#6b7788]">
                HARD CONTEXT BUDGET: 256 KiB
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
