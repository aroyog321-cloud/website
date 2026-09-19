import React, { createContext, useContext, useState, useCallback } from 'react';

const CockpitContext = createContext(null);

export function CockpitProvider({ children }) {
  const [activeView, setActiveView] = useState('workspace');
  const [focusMode, setFocusMode] = useState(false);
  const [selectedWorkerId, setSelectedWorkerId] = useState('sample');
  const [evidenceModalOpen, setEvidenceModalOpen] = useState(false);
  const [missionAiOpen, setMissionAiOpen] = useState(false);
  const [missionAiPrompt, setMissionAiPrompt] = useState('');
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Easter Egg Theme System
  const [activeTheme, setActiveTheme] = useState('default'); // 'default' | 'supernova' | 'matrix' | 'cyberpunk'
  const [unlockedToast, setUnlockedToast] = useState(null);

  // 20 Supervised Sessions
  const [workers, setWorkers] = useState([
    { id: 'sample', name: 'api-server', role: 'Service', state: 'Running', command: 'cargo run --bin api', activity: 'Listening on port 8080', resources: '38MB · 0.4%', dir: 'D:\\outarch', alert: false },
    { id: 'agent-swarm', name: 'claude-agent', role: 'Agent', state: 'Running', command: 'claude --autonomous', activity: 'Supervising codebase DAG', resources: '64MB · 0.8%', dir: 'D:\\outarch' },
    { id: 'frontend', name: 'frontend-dev', role: 'Service', state: 'Running', command: 'vite dev --port 3000', activity: 'Ready on http://localhost:3000', resources: '42MB · 0.5%', dir: 'D:\\outarch\\frontend' },
    { id: 'db', name: 'postgres-db', role: 'Container', state: 'Running', command: 'docker compose up db', activity: 'Database ready for connections', resources: '112MB · 0.9%', dir: 'D:\\outarch' },
    { id: 'vitest', name: 'vitest-watcher', role: 'Test', state: 'Running', command: 'vitest watch', activity: 'PASS 28 suites completed', resources: '24MB · 0.2%', dir: 'D:\\outarch' },
    { id: 'redis', name: 'redis-cache', role: 'Service', state: 'Running', command: 'redis-server', activity: 'Accepting tcp port 6379', resources: '18MB · 0.1%', dir: 'D:\\outarch' },
    { id: 'mcp-gateway', name: 'mcp-gateway', role: 'Gateway', state: 'Running', command: 'outarch-mcp --port 9090', activity: 'Single-use token firewall active', resources: '22MB · 0.2%', dir: 'D:\\outarch' },
    { id: 'mobile-bridge', name: 'lan-companion', role: 'Daemon', state: 'Running', command: 'outarch companion --lan', activity: 'Android HUD paired (192.168.1.42)', resources: '14MB · 0.1%', dir: 'D:\\outarch' },
  ]);

  // Needs You Decision Queue
  const [decisions, setDecisions] = useState([]);

  // Terminal Real-Time Histories
  const [claudeHistory, setClaudeHistory] = useState([
    'Loaded project context at D:\\outarch',
    'Supervised daemon active on ConPTY channel 04'
  ]);

  const [antigravityHistory, setAntigravityHistory] = useState([
    'OUTARCH Engine 1.0 active. Native PTY supervisors ready.'
  ]);

  // Recipe DAG Execution Engine State
  const [recipeState, setRecipeState] = useState({
    isRunning: false,
    currentStep: 0,
    totalSteps: 4
  });

  const toggleWorker = useCallback((id) => {
    setWorkers(prev => prev.map(w => {
      if (w.id === id) {
        const nextState = w.state === 'Running' ? 'Idle' : 'Running';
        return {
          ...w,
          state: nextState,
          activity: nextState === 'Running' ? 'Engine-supervised process live' : 'Start when ready',
          resources: nextState === 'Running' ? '22MB · 0.3%' : '—'
        };
      }
      return w;
    }));
  }, []);

  const acknowledgeDecision = useCallback((decisionId = 'W01') => {
    setDecisions(prev => prev.map(d => d.id === decisionId ? { ...d, acknowledged: true } : d));
    setWorkers(prev => prev.map(w => w.name === 'api-server' ? { ...w, alert: false, activity: 'All evidence verified' } : w));
  }, []);

  const launchRecipe = useCallback(() => {
    setRecipeState({ isRunning: true, currentStep: 1, totalSteps: 4 });
    setTimeout(() => setRecipeState(r => ({ ...r, currentStep: 2 })), 600);
    setTimeout(() => setRecipeState(r => ({ ...r, currentStep: 3 })), 1200);
    setTimeout(() => setRecipeState(r => ({ ...r, currentStep: 4 })), 1800);
    setTimeout(() => {
      setRecipeState({ isRunning: false, currentStep: 5, totalSteps: 4 });
      setWorkers(prev => prev.map(w => ({
        ...w,
        state: 'Running',
        activity: 'Active via Recipe DAG',
        resources: '18MB · 0.3%'
      })));
    }, 2400);
  }, []);

  // Sandbox Playground Simulation Triggers
  const simulateDeploySwarm = useCallback(() => {
    setActiveView('workspace');
    setClaudeHistory(prev => [
      ...prev,
      `> outarch swarm --deploy --count=3`,
      `[Claude Agent 01] Spawned subagent for DB migration audit`,
      `[Claude Agent 02] Analyzing endpoints at src/api/routes.rs`,
      `[Swarm Orchestrator] All 3 agent threads running with strict ConPTY isolation.`
    ]);
  }, []);

  const simulatePortCollision = useCallback(() => {
    setActiveView('needs');
    setDecisions([
      {
        id: 'PORT-8080',
        worker: 'api-server',
        alert: 'EADDRINUSE :8080',
        impact: 'Port collision blocks backend startup. Zombie PID 14920 holding socket.',
        recommended: 'Kill zombie PID 14920 and restart api-server.',
        recovery: 'Automatic 1-click execution ready.',
        opened: 'Just now',
        acknowledged: false
      }
    ]);
    setWorkers(prev => prev.map(w => w.name === 'api-server' ? { ...w, alert: true, activity: 'CRASH: EADDRINUSE :8080' } : w));
  }, []);

  const simulateCrashLensTriage = useCallback(() => {
    setActiveView('needs');
    setEvidenceModalOpen(true);
  }, []);

  const simulateAutoResolve = useCallback(() => {
    setDecisions([]);
    setEvidenceModalOpen(false);
    setActiveView('workspace');
    setWorkers(prev => prev.map(w => ({
      ...w,
      alert: false,
      state: 'Running',
      activity: 'Resolved · Listening on port 8080'
    })));
    setClaudeHistory(prev => [
      ...prev,
      `[Auto-Heal] Zombie PID 14920 terminated.`,
      `[Port Manager] Port 8080 released. Backend restarted successfully in 120ms.`,
      `[System Status] All 8 monitored workers verified healthy.`
    ]);
  }, []);

  // Easter Egg Theme Activation
  const unlockTheme = useCallback((themeName) => {
    setActiveTheme(themeName);
    setUnlockedToast(`🎉 Secret Theme Unlocked: ${themeName.toUpperCase()} HUD`);
    setTimeout(() => setUnlockedToast(null), 4000);
  }, []);

  const runClaudePrompt = useCallback((prompt) => {
    if (!prompt.trim()) return;
    setClaudeHistory(prev => [
      ...prev,
      `> ${prompt.trim()}`,
      `[Claude 3.7 Sonnet] Synthesizing AST fix for operational pipeline...`,
      `[Verified] Restored manifest at D:\\outarch\\package.json. Zero syntax faults.`
    ]);
  }, []);

  const runAntigravityCmd = useCallback((cmd) => {
    if (!cmd.trim()) return;
    setAntigravityHistory(prev => [
      ...prev,
      `> ${cmd.trim()}`,
      `[OUTARCH Engine] Executing verified operational probe...`,
      `[Protocol v1] 28 unit test assertions verified. Clean heartbeat.`
    ]);
  }, []);

  const openMissionAi = useCallback((prompt = '') => {
    setMissionAiPrompt(prompt);
    setMissionAiOpen(true);
  }, []);

  // Story Stepper / Narrative Director
  const setStoryPhase = useCallback((phaseId) => {
    switch (phaseId) {
      case 'groundstation':
        setActiveView('groundstation');
        setFocusMode(false);
        break;
      case 'workspace':
        setActiveView('workspace');
        setFocusMode(false);
        break;
      case 'needs':
        setActiveView('needs');
        setFocusMode(false);
        break;
      case 'evidence':
        setActiveView('needs');
        setEvidenceModalOpen(true);
        break;
      case 'recipes':
        setActiveView('recipes');
        setFocusMode(false);
        break;
      case 'focus':
        setActiveView('workspace');
        setFocusMode(true);
        break;
      case 'history':
        setActiveView('history');
        setFocusMode(false);
        break;
      default:
        setActiveView('workspace');
        setFocusMode(false);
    }
  }, []);

  const pendingDecisionsCount = decisions.filter(d => !d.acknowledged).length;
  const runningCount = workers.filter(w => w.state === 'Running').length;
  const idleCount = workers.filter(w => w.state === 'Idle').length;
  const engineStatus = pendingDecisionsCount > 0 ? 'Waiting on you' : 'Healthy';

  return (
    <CockpitContext.Provider
      value={{
        activeView,
        setActiveView,
        focusMode,
        setFocusMode,
        toggleFocusMode: () => setFocusMode(prev => !prev),
        workers,
        selectedWorkerId,
        setSelectedWorkerId,
        selectedWorker: workers.find(w => w.id === selectedWorkerId) || workers[0],
        toggleWorker,
        decisions,
        pendingDecisionsCount,
        acknowledgeDecision,
        recipeState,
        launchRecipe,
        claudeHistory,
        runClaudePrompt,
        antigravityHistory,
        runAntigravityCmd,
        evidenceModalOpen,
        setEvidenceModalOpen,
        missionAiOpen,
        setMissionAiOpen,
        missionAiPrompt,
        openMissionAi,
        paletteOpen,
        setPaletteOpen,
        runningCount,
        idleCount,
        engineStatus,
        setStoryPhase,
        simulateDeploySwarm,
        simulatePortCollision,
        simulateCrashLensTriage,
        simulateAutoResolve,
        activeTheme,
        unlockTheme,
        unlockedToast,
      }}
    >
      {children}
    </CockpitContext.Provider>
  );
}

export function useCockpit() {
  const context = useContext(CockpitContext);
  if (!context) {
    throw new Error('useCockpit must be used within a CockpitProvider');
  }
  return context;
}
