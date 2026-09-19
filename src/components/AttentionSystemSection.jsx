import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, XCircle, ArrowRight, Zap, RefreshCw, Key, Check } from 'lucide-react';

const ATTENTION_EVENTS = [
  {
    id: 'evt-1',
    severity: 'HIGH',
    type: 'TEST_FAILURE',
    title: 'Unit Tests: 1 Uncaught Exception in Session Validator',
    target: 'worker:unit-tests (PID 3403)',
    time: '24s ago',
    detail: 'TypeError in src/auth/session.ts at line 84. Exit code 1 received by EngineAPI.',
    actionRequired: 'Review Claude Code patch proposal or rerun with debug flags',
    status: 'PENDING'
  },
  {
    id: 'evt-2',
    severity: 'MEDIUM',
    type: 'MCP_MUTATION_PROPOSAL',
    title: 'MCP Gateway: External Tool Request to Restart API Server',
    target: 'client:vscode-copilot via 127.0.0.1:44819',
    time: '2m ago',
    detail: 'Client requested restartWorker("api-server"). Zero-trust policy blocks direct execution.',
    actionRequired: 'Requires one-time local approval within 15 minutes',
    status: 'PENDING'
  },
  {
    id: 'evt-3',
    severity: 'LOW',
    type: 'HEALTH_GATE_RESOLVED',
    title: 'Workspace Recipe: PostgreSQL Health Gate Verified',
    target: 'worker:postgres-db (Port 5432)',
    time: '6m ago',
    detail: 'Ready condition verified. Downstream workers API server and Redis worker released.',
    actionRequired: 'None · Automatic DAG continuation',
    status: 'RESOLVED'
  }
];

export default function AttentionSystemSection() {
  const [events, setEvents] = useState(ATTENTION_EVENTS);

  const handleApprove = (id) => {
    setEvents(events.map(e => e.id === id ? { ...e, status: 'RESOLVED' } : e));
  };

  return (
    <section id="needs-you" className="py-24 bg-[#050608] border-b border-[#c3d3e4]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#edc58b]/30 bg-[#1e1913] text-[11px] font-mono text-[#edc58b] mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>ATTENTION ARCHITECTURE: "NEEDS YOU"</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            The Calm Operational Stream. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#edc58b] via-[#eef2f6] to-[#a9ddc4]">
              Zero Generic Notification Spam.
            </span>
          </h2>
          <p className="text-[#95a2b1] text-base sm:text-lg">
            Instead of barrage of noisy popup notifications, OUTARCH queues real operational events into an actionable decision room. When the system needs you, the exact context is laid out for immediate resolution.
          </p>
        </div>

        {/* Event Queue List */}
        <div className="space-y-4 font-mono">
          {events.map((evt) => {
            const isPending = evt.status === 'PENDING';
            const isHigh = evt.severity === 'HIGH';
            return (
              <div
                key={evt.id}
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  isPending
                    ? isHigh
                      ? 'bg-[#181214] border-[#f2a7ae]/40 shadow-[0_4px_25px_rgba(242,167,174,0.08)]'
                      : 'bg-[#191612] border-[#edc58b]/30'
                    : 'bg-[#0E1319]/50 border-[#c3d3e4]/10 opacity-70'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Event Meta */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        isHigh ? 'bg-[#2b1619] text-[#f2a7ae]' : 'bg-[#2b2416] text-[#edc58b]'
                      }`}>
                        {evt.type}
                      </span>
                      <span className="text-[#6b7788]">•</span>
                      <span className="text-[#95a2b1]">{evt.target}</span>
                      <span className="text-[#6b7788]">•</span>
                      <span className="text-[#6b7788]">{evt.time}</span>
                    </div>

                    <h3 className="text-sm font-bold text-white font-sans">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-[#95a2b1] font-sans">
                      {evt.detail}
                    </p>
                  </div>

                  {/* Decision Action Area */}
                  <div className="flex items-center gap-2 self-start md:self-center">
                    {isPending ? (
                      <>
                        <button
                          onClick={() => handleApprove(evt.id)}
                          className="px-3.5 py-1.5 rounded bg-[#a9ddc4] hover:bg-[#c2ecd8] text-[#0b0e13] text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Approve Once</span>
                        </button>
                        <button
                          onClick={() => handleApprove(evt.id)}
                          className="px-3.5 py-1.5 rounded bg-[#1F2633] hover:bg-[#2A3344] text-[#d3dce6] text-xs transition-colors"
                        >
                          Dismiss
                        </button>
                      </>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs text-[#a9ddc4] font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>RESOLVED THROUGH ENGINEAPI</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom philosophy note */}
        <div className="mt-8 p-4 rounded-xl bg-[#0B0D11] border border-[#c3d3e4]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#95a2b1]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#edc58b] animate-pulse" />
            <span>Decisions expire automatically after 15 or 30 minutes to prevent stale authority execution.</span>
          </div>
          <span className="text-[#a9ddc4]">HUMAN REMAINS AUTHORITATIVE</span>
        </div>

      </div>
    </section>
  );
}
