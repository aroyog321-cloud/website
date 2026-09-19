import React, { useState } from 'react';
import { Terminal, AlertOctagon, Layers, Flame, EyeOff, Bot, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function ProblemSection() {
  const [activeChaosScenario, setActiveChaosScenario] = useState('agents');

  return (
    <section id="the-problem" className="py-24 bg-[#0B0D11] border-b border-[#c3d3e4]/10 relative overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#f2a7ae]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f2a7ae]/20 bg-[#161214] text-[11px] font-mono text-[#f2a7ae] mb-4">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>THE DEVELOPER DILEMMA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Too many terminals. Too many agents. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2a7ae] via-[#edc58b] to-[#d3dce6]">
              Zero unified awareness.
            </span>
          </h2>
          <p className="text-[#95a2b1] text-base sm:text-lg leading-relaxed font-sans">
            Modern development has fractured across dozen disconnected terminal tabs, background coding agents making unseen file modifications, and silent test crashes buried in terminal scrollback buffers.
          </p>
        </div>

        {/* Interactive Chaos vs Control Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The Symptoms of Fragmentation */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#6b7788] mb-2">
              Fragmented Realities in Modern Engineering
            </p>

            {/* Dilemma Item 1 */}
            <div 
              onClick={() => setActiveChaosScenario('terminals')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeChaosScenario === 'terminals'
                  ? 'bg-[#12171E] border-[#c3d3e4]/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
                  : 'bg-[#0E1319]/60 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg border ${
                  activeChaosScenario === 'terminals' 
                    ? 'bg-[#2b1619] border-[#f2a7ae]/40 text-[#f2a7ae]' 
                    : 'bg-[#161B24] border-[#c3d3e4]/10 text-[#95a2b1]'
                }`}>
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#eef2f6] flex items-center justify-between">
                    <span>The Multi-Terminal Sprawl</span>
                    {activeChaosScenario === 'terminals' && (
                      <span className="text-[10px] font-mono text-[#f2a7ae]">Active Scenario</span>
                    )}
                  </h3>
                  <p className="text-xs text-[#95a2b1] mt-1 leading-relaxed">
                    Vite, Docker, Next.js, API workers, and test watchers scattered across 8 detached console windows with no unified health state.
                  </p>
                </div>
              </div>
            </div>

            {/* Dilemma Item 2 */}
            <div 
              onClick={() => setActiveChaosScenario('agents')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeChaosScenario === 'agents'
                  ? 'bg-[#12171E] border-[#c3d3e4]/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
                  : 'bg-[#0E1319]/60 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg border ${
                  activeChaosScenario === 'agents' 
                    ? 'bg-[#2b1619] border-[#f2a7ae]/40 text-[#f2a7ae]' 
                    : 'bg-[#161B24] border-[#c3d3e4]/10 text-[#95a2b1]'
                }`}>
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#eef2f6] flex items-center justify-between">
                    <span>Unsupervised Coding Agents</span>
                    {activeChaosScenario === 'agents' && (
                      <span className="text-[10px] font-mono text-[#f2a7ae]">Active Scenario</span>
                    )}
                  </h3>
                  <p className="text-xs text-[#95a2b1] mt-1 leading-relaxed">
                    Autonomous CLI tools rewriting code in the dark. No mission contracts, no verified checkpoints, and no bounded approval gates.
                  </p>
                </div>
              </div>
            </div>

            {/* Dilemma Item 3 */}
            <div 
              onClick={() => setActiveChaosScenario('attention')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeChaosScenario === 'attention'
                  ? 'bg-[#12171E] border-[#c3d3e4]/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
                  : 'bg-[#0E1319]/60 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg border ${
                  activeChaosScenario === 'attention' 
                    ? 'bg-[#2b1619] border-[#f2a7ae]/40 text-[#f2a7ae]' 
                    : 'bg-[#161B24] border-[#c3d3e4]/10 text-[#95a2b1]'
                }`}>
                  <EyeOff className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#eef2f6] flex items-center justify-between">
                    <span>Attention Blindness</span>
                    {activeChaosScenario === 'attention' && (
                      <span className="text-[10px] font-mono text-[#f2a7ae]">Active Scenario</span>
                    )}
                  </h3>
                  <p className="text-xs text-[#95a2b1] mt-1 leading-relaxed">
                    Did the tests fail 12 minutes ago? Did an MCP gateway prompt get lost behind Chrome? You only find out after wasting an hour.
                  </p>
                </div>
              </div>
            </div>

            {/* Dilemma Item 4 */}
            <div 
              onClick={() => setActiveChaosScenario('memory')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeChaosScenario === 'memory'
                  ? 'bg-[#12171E] border-[#c3d3e4]/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
                  : 'bg-[#0E1319]/60 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg border ${
                  activeChaosScenario === 'memory' 
                    ? 'bg-[#2b1619] border-[#f2a7ae]/40 text-[#f2a7ae]' 
                    : 'bg-[#161B24] border-[#c3d3e4]/10 text-[#95a2b1]'
                }`}>
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#eef2f6] flex items-center justify-between">
                    <span>Ephemeral Context Destruction</span>
                    {activeChaosScenario === 'memory' && (
                      <span className="text-[10px] font-mono text-[#f2a7ae]">Active Scenario</span>
                    )}
                  </h3>
                  <p className="text-xs text-[#95a2b1] mt-1 leading-relaxed">
                    Restart your machine or crash your terminal and your entire working context, recent failure chapters, and session memory vanish.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Comparative Cockpit Simulation */}
          <div className="lg:col-span-7">
            <div className="bg-[#050608] border border-[#c3d3e4]/15 rounded-xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#c3d3e4]/10 text-xs font-mono">
                <span className="text-[#95a2b1]">DIAGNOSTIC COMPARISON</span>
                <span className="text-[#a9ddc4] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  OUTARCH SOLUTION
                </span>
              </div>

              {/* Interactive Scenario Visualization */}
              <div className="mt-4 space-y-4 font-mono text-xs">
                
                {activeChaosScenario === 'terminals' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-[#2b1619]/40 border border-[#f2a7ae]/30 text-[#f2a7ae]">
                      <div className="font-bold mb-1">WITHOUT OUTARCH: UNCHECKED PROCESS DRIFT</div>
                      <p className="text-[11px] text-[#d3dce6]">
                        Window 1: Vite running. Window 2: DB crashed silently. Window 3: Test runner hanging on deadlock.
                        Developer is debugging a frontend UI bug unaware that the backend died 20 minutes ago.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#14231b]/60 border border-[#a9ddc4]/30 text-[#a9ddc4]">
                      <div className="font-bold mb-1">WITH OUTARCH GROUNDSTATION: AUTHORITATIVE PTY ENGINE</div>
                      <p className="text-[11px] text-[#d3dce6]">
                        All workers execute behind <span className="text-white font-semibold">EngineAPI</span>. Exit codes, CPU/RAM usage, and ConPTY lifecycle are classified into a single project status tape with instant restart policy.
                      </p>
                    </div>
                  </div>
                )}

                {activeChaosScenario === 'agents' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-[#2b1619]/40 border border-[#f2a7ae]/30 text-[#f2a7ae]">
                      <div className="font-bold mb-1">WITHOUT OUTARCH: BLIND AGENT EXECUTION</div>
                      <p className="text-[11px] text-[#d3dce6]">
                        AI tool executes arbitrary commands in background, wipes unstaged git changes, modifies production config, leaves broken imports.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#14231b]/60 border border-[#a9ddc4]/30 text-[#a9ddc4]">
                      <div className="font-bold mb-1">WITH OUTARCH: BOUNDED MISSION CONTRACTS</div>
                      <p className="text-[11px] text-[#d3dce6]">
                        Agents operate under explicit permission contracts. Checkpoints are verified against real tests. File mutations require an expiring <span className="text-[#edc58b] font-semibold">Needs You</span> approval token.
                      </p>
                    </div>
                  </div>
                )}

                {activeChaosScenario === 'attention' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-[#2b1619]/40 border border-[#f2a7ae]/30 text-[#f2a7ae]">
                      <div className="font-bold mb-1">WITHOUT OUTARCH: LOST IN NOTIFICATION NOISE</div>
                      <p className="text-[11px] text-[#d3dce6]">
                        Dozens of irrelevant desktop alerts. Critical compiler warnings disappear in thousands of lines of verbose console spam.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#14231b]/60 border border-[#a9ddc4]/30 text-[#a9ddc4]">
                      <div className="font-bold mb-1">WITH OUTARCH: DETERMINISTIC ATTENTION QUEUE</div>
                      <p className="text-[11px] text-[#d3dce6]">
                        Zero generic alerts. Only real blockers enter the unified <span className="text-[#edc58b] font-semibold">Needs You</span> decision room: failed tests, MCP mutations, and permission requests.
                      </p>
                    </div>
                  </div>
                )}

                {activeChaosScenario === 'memory' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-[#2b1619]/40 border border-[#f2a7ae]/30 text-[#f2a7ae]">
                      <div className="font-bold mb-1">WITHOUT OUTARCH: ZERO POST-CRASH TRACEABILITY</div>
                      <p className="text-[11px] text-[#d3dce6]">
                        Process terminates with code 137. Terminal scrollback clears. The sequence of actions leading up to the failure is permanently lost.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#14231b]/60 border border-[#a9ddc4]/30 text-[#a9ddc4]">
                      <div className="font-bold mb-1">WITH OUTARCH: RESUMABLE RUN CHAPTERS</div>
                      <p className="text-[11px] text-[#d3dce6]">
                        Engine records durable Project Memory with evidence checkpoints, run history chapters, and cross-session recovery links without logging private secrets.
                      </p>
                    </div>
                  </div>
                )}

                {/* Telemetry Footer */}
                <div className="p-3 rounded bg-[#10131A] border border-[#c3d3e4]/10 flex items-center justify-between text-[11px] text-[#95a2b1]">
                  <span>REDUCTION IN COGNITIVE FRICTION: ~74%</span>
                  <span className="text-[#a9ddc4]">LEAD ARCHITECT APPROVED</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
