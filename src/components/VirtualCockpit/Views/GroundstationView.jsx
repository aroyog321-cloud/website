import React, { useState } from 'react';
import { 
  Play, 
  Square, 
  ExternalLink, 
  Sparkles, 
  Copy, 
  Search, 
  Terminal, 
  Check, 
  Star,
  X,
  Layers,
  Bot
} from 'lucide-react';

export default function GroundstationView({ 
  onNavigate, 
  onOpenMissionAi,
  onRunRecipe 
}) {
  const [selectedWorkerId, setSelectedWorkerId] = useState('sample');
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedContext, setCopiedContext] = useState(false);
  const [restoreToggle, setRestoreToggle] = useState(false);

  // Exact dataset from Screenshot 3
  const [workers, setWorkers] = useState([
    { id: 'backend', name: 'backend', command: 'npm run start:api', role: 'Service', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'backend-2', name: 'backend', command: 'npm run start:api', role: 'Service', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'db', name: 'db', command: 'docker run -p 5432:5432 -e POSTGRES_P...', role: 'Container', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'db-2', name: 'db', command: 'pg_ctl -D /var/lib/postgresql/data st...', role: 'Database', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'db-3', name: 'db', command: 'docker run -p 5432:5432 -e POSTGRES_P...', role: 'Container', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'db-migrate', name: 'db-migrate', command: 'npm run db:migrate', role: 'Database', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'frontend', name: 'frontend', command: 'npm run start', role: 'Service', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'frontend-2', name: 'frontend', command: 'npm run start', role: 'Service', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'git', name: 'git', command: 'git status', role: 'Git', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'sample', name: 'sample', command: 'powershell.exe', role: 'Shell', state: 'Idle', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
  ]);

  const toggleWorker = (id, e) => {
    e.stopPropagation();
    setWorkers(prev => prev.map(w => {
      if (w.id === id) {
        const next = w.state === 'Running' ? 'Idle' : 'Running';
        return {
          ...w,
          state: next,
          activity: next === 'Running' ? 'Engine-supervised process live' : 'Start when ready',
          resources: next === 'Running' ? '18MB · 0.4%' : '—'
        };
      }
      return w;
    }));
  };

  const selectedWorker = workers.find(w => w.id === selectedWorkerId) || workers[0];
  const runningCount = workers.filter(w => w.state === 'Running').length;
  const idleCount = workers.filter(w => w.state === 'Idle').length;

  const filteredWorkers = workers.filter(w => {
    if (activeTab === 'live' && w.state !== 'Running') return false;
    if (activeTab === 'idle' && w.state !== 'Idle') return false;
    if (searchQuery && !w.name.toLowerCase().includes(searchQuery.toLowerCase()) && !w.command.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const handleCopy = () => {
    setCopiedContext(true);
    setTimeout(() => setCopiedContext(false), 2000);
  };

  return (
    <div className="flex-1 bg-[#050608] flex flex-col p-5 overflow-y-auto select-none font-mono text-xs">
      
      {/* Top Banner (Screenshot 3) */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-5 border-b border-[#141822]">
        
        {/* Project Health Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-wide leading-tight">
              first
            </h2>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Healthy · Every decision source reported an...
            </p>
          </div>
        </div>

        {/* 4 Stat Boxes Matching Screenshot 3 */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 xl:pb-0">
          <div className="px-3.5 py-1.5 rounded-lg bg-[#0b0e14] border border-[#1a202c] flex flex-col items-center min-w-[76px]">
            <div className="text-sm font-bold text-emerald-400">
              {runningCount}<span className="text-zinc-500 text-xs font-normal">/20</span>
            </div>
            <span className="text-[9px] text-zinc-500 font-semibold tracking-wider">RUNNING</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-lg bg-[#0b0e14] border border-[#1a202c] flex flex-col items-center min-w-[76px]">
            <div className="text-sm font-bold text-white">
              {idleCount}
            </div>
            <span className="text-[9px] text-zinc-500 font-semibold tracking-wider">IDLE</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-lg bg-[#0b0e14] border border-[#1a202c] flex flex-col items-center min-w-[76px]">
            <div className="text-sm font-bold text-blue-400">
              0<span className="text-zinc-500 text-xs font-normal">/0</span>
            </div>
            <span className="text-[9px] text-zinc-500 font-semibold tracking-wider">AI CREW</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-lg bg-[#0b0e14] border border-[#1a202c] flex flex-col items-center min-w-[76px]">
            <div className="text-sm font-bold text-white">
              0
            </div>
            <span className="text-[9px] text-zinc-500 font-semibold tracking-wider">NEEDS YOU</span>
          </div>
        </div>

        {/* Action Buttons Matching Screenshot 3 */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={onRunRecipe}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Run recipe</span>
          </button>

          <button
            onClick={() => onNavigate('workspace')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-300 hover:text-white transition-colors text-xs"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>Workspace</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-300 hover:text-white transition-colors text-xs"
          >
            {copiedContext ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
            <span>Copy context</span>
          </button>

          <button
            onClick={() => onOpenMissionAi("Inspect workspace project first")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-300 hover:text-white transition-colors text-xs"
          >
            <span className="px-1 py-0.2 rounded bg-blue-900/60 text-blue-300 text-[9px] font-bold">AI</span>
            <span>Ask Mission AI</span>
          </button>
        </div>

      </div>

      {/* Main Split: Project Operations Table (Cols 8) & Inspector Panel (Cols 4) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5 min-h-0">
        
        {/* Operations Table */}
        <div className="lg:col-span-8 bg-[#07090e] border border-[#141822] rounded-xl flex flex-col overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-3 border-b border-[#141822] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0a0d14]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs">Project operations</span>
              <span className="text-[11px] text-zinc-500">
                20 of 20 shown · {runningCount} live
              </span>
            </div>

            {/* Filter Tabs & Search */}
            <div className="flex items-center gap-2">
              <div className="flex items-center text-[10px] text-zinc-400 gap-1">
                {[
                  { id: 'all', label: 'All 20' },
                  { id: 'live', label: `Live ${runningCount}` },
                  { id: 'idle', label: `Idle ${idleCount}` },
                  { id: 'review', label: 'Review 0' },
                  { id: 'failed', label: 'Failed 0' },
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === t.id 
                        ? 'bg-[#121724] text-white font-bold border border-[#1e2535]' 
                        : 'hover:text-zinc-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Search with Ctrl F */}
              <div className="relative">
                <Search className="w-3 h-3 text-zinc-500 absolute left-2 top-1.5" />
                <input
                  type="text"
                  placeholder="Search name or command... Ctrl F"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#0b0e14] border border-[#1a202c] rounded pl-6 pr-2 py-0.5 text-[10px] text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-blue-500 w-44"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-y-auto">
            <table className="w-full text-left border-collapse font-mono">
              <thead>
                <tr className="border-b border-[#121620] text-[10px] text-zinc-500 uppercase tracking-wider bg-[#080b10]">
                  <th className="py-2 px-4 font-semibold">WORKER</th>
                  <th className="py-2 px-3 font-semibold">ROLE</th>
                  <th className="py-2 px-3 font-semibold">STATE</th>
                  <th className="py-2 px-3 font-semibold hidden md:table-cell">CURRENT ACTIVITY</th>
                  <th className="py-2 px-3 font-semibold hidden lg:table-cell">RESOURCES</th>
                  <th className="py-2 px-4 text-right font-semibold">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#10141e] text-[11px]">
                {filteredWorkers.map((w, idx) => {
                  const isSelected = selectedWorkerId === w.id;
                  const isRunning = w.state === 'Running';
                  return (
                    <tr
                      key={idx}
                      onClick={() => setSelectedWorkerId(w.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected 
                          ? 'bg-[#0e131f] border-l-2 border-l-blue-500' 
                          : 'hover:bg-[#090c12]'
                      }`}
                    >
                      {/* Worker with Star */}
                      <td className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 text-zinc-600 hover:text-amber-400" />
                          <div>
                            <div className="font-bold text-white text-xs">{w.name}</div>
                            <div className="text-[10px] text-zinc-500 truncate max-w-[140px]">{w.command}</div>
                          </div>
                        </div>
                      </td>

                      {/* Role */}
                      <td className="py-2 px-3 text-zinc-400 underline decoration-zinc-700 underline-offset-2">
                        {w.role}
                      </td>

                      {/* State */}
                      <td className="py-2 px-3 text-zinc-300">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-600'}`} />
                          <span>{w.state}</span>
                        </span>
                      </td>

                      {/* Activity */}
                      <td className="py-2 px-3 text-zinc-400 hidden md:table-cell">
                        {w.activity}
                      </td>

                      {/* Resources */}
                      <td className="py-2 px-3 text-zinc-500 hidden lg:table-cell">
                        {w.resources}
                      </td>

                      {/* Action */}
                      <td className="py-2 px-4 text-right">
                        <button
                          onClick={(e) => toggleWorker(w.id, e)}
                          className="px-2.5 py-0.5 rounded bg-[#0e121a] hover:bg-[#141924] border border-[#1a202c] text-zinc-300 text-[10px] font-semibold transition-colors"
                        >
                          {isRunning ? 'Stop' : 'Start'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>

        {/* Right Inspector Panel (Screenshot 3) */}
        <div className="lg:col-span-4 bg-[#07090e] border border-[#141822] rounded-xl flex flex-col p-4">
          
          {/* Header */}
          <div className="pb-3 border-b border-[#121620] flex items-start justify-between">
            <div>
              <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">
                Terminal · inferred
              </div>
              <h3 className="text-sm font-bold text-white mt-0.5">
                {selectedWorker.name}
              </h3>
              <div className="text-[10px] text-zinc-500 mt-0.5">
                PowerShell
              </div>
            </div>
            <button className="text-zinc-600 hover:text-zinc-400">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Currently */}
          <div className="py-3 border-b border-[#121620]">
            <div className="text-[9px] text-zinc-500 uppercase tracking-wider font-semibold mb-1">
              CURRENTLY
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              {selectedWorker.name} is {selectedWorker.state.toLowerCase()}. Starting it opens an interactive PowerShell in an engine-owned PTY.
            </p>
          </div>

          {/* Attributes Grid */}
          <div className="py-3 border-b border-[#121620] grid grid-cols-2 gap-3 text-[10px]">
            <div>
              <div className="text-zinc-500 uppercase font-semibold">STATE</div>
              <div className="text-zinc-200 mt-0.5">{selectedWorker.state.toLowerCase()}</div>
            </div>

            <div>
              <div className="text-zinc-500 uppercase font-semibold">RUNTIME</div>
              <div className="text-zinc-200 mt-0.5">{selectedWorker.state}</div>
            </div>

            <div>
              <div className="text-zinc-500 uppercase font-semibold">LAST OUTPUT</div>
              <div className="text-zinc-400 mt-0.5">Not reported</div>
            </div>

            <div>
              <div className="text-zinc-500 uppercase font-semibold">OWNERSHIP</div>
              <div className="text-zinc-400 mt-0.5">No engine PTY</div>
            </div>

            <div>
              <div className="text-zinc-500 uppercase font-semibold">DIRECTORY</div>
              <div className="text-zinc-200 mt-0.5 font-mono">{selectedWorker.dir}</div>
            </div>

            <div>
              <div className="text-zinc-500 uppercase font-semibold">RESTORE</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-zinc-400">Manual</span>
                <button 
                  onClick={() => setRestoreToggle(!restoreToggle)}
                  className={`w-7 h-3.5 rounded-full transition-colors relative ${restoreToggle ? 'bg-blue-600' : 'bg-zinc-800'}`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full bg-white absolute top-0.5 transition-transform ${restoreToggle ? 'right-0.5' : 'left-0.5'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Recent Evidence */}
          <div className="py-3 flex-1">
            <div className="text-[9px] text-zinc-500 uppercase tracking-wider font-semibold mb-2">
              RECENT EVIDENCE
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="text-zinc-500">now</span>
                <span>session · created</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-zinc-500">1d</span>
                <span>session · status</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-zinc-500">1d</span>
                <span>session · status</span>
              </div>
            </div>
          </div>

          {/* Actions Stack */}
          <div className="pt-3 border-t border-[#121620] space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => toggleWorker(selectedWorker.id, e)}
                className="px-4 py-2 rounded bg-[#0e121a] hover:bg-[#141924] border border-[#1a202c] text-zinc-200 text-xs font-semibold"
              >
                {selectedWorker.state === 'Running' ? 'Stop' : 'Start'}
              </button>

              <button
                onClick={() => onNavigate('workspace')}
                className="flex-1 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Open terminal</span>
              </button>

              <button className="p-2 rounded bg-[#0e121a] hover:bg-[#141924] border border-[#1a202c] text-zinc-400">
                <Star className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => onOpenMissionAi(`Analyze worker ${selectedWorker.name}`)}
              className="w-full py-2 rounded bg-[#0a0d14] hover:bg-[#101420] border border-[#1a202c] text-zinc-300 text-xs flex items-center justify-center gap-2"
            >
              <span className="px-1 py-0.2 rounded bg-blue-900/60 text-blue-300 text-[9px] font-bold">AI</span>
              <span>Ask Mission AI</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
