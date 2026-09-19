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

  // 20 Supervised Sessions
  const [workers, setWorkers] = useState([
    { id: 'sample', name: 'sample', role: 'Shell', state: 'Running', command: 'powershell.exe', activity: 'Alert: npm error enoent', resources: '14MB · 0.2%', dir: 'D:\\first', alert: true },
    { id: 'wsgsgv', name: 'wsgsgv', role: 'Shell', state: 'Running', command: 'agy run --autonomous', activity: 'Supervising Gemini 3.7 Flash', resources: '32MB · 0.5%', dir: 'D:\\first' },
    { id: 'zcvdc', name: 'zcvdc', role: 'Shell', state: 'Idle', command: 'powershell.exe', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'zcvdc-2', name: 'zcvdc', role: 'Shell', state: 'Idle', command: 'powershell.exe', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'backend', name: 'backend', role: 'Service', state: 'Idle', command: 'npm run start:api', activity: 'Start when ready', resources: '—', dir: 'D:\\first\\backend' },
    { id: 'backend-2', name: 'backend', role: 'Service', state: 'Idle', command: 'npm run start:api', activity: 'Start when ready', resources: '—', dir: 'D:\\first\\backend' },
    { id: 'db', name: 'db', role: 'Container', state: 'Idle', command: 'docker run -p 5432:5432 -e POSTGRES_P...', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'db-2', name: 'db', role: 'Database', state: 'Idle', command: 'pg_ctl -D /var/lib/postgresql/data st...', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'db-3', name: 'db', role: 'Container', state: 'Idle', command: 'docker run -p 5432:5432 -e POSTGRES_P...', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'db-migrate', name: 'db-migrate', role: 'Database', state: 'Idle', command: 'npm run db:migrate', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'frontend', name: 'frontend', role: 'Service', state: 'Idle', command: 'npm run start', activity: 'Start when ready', resources: '—', dir: 'D:\\first\\frontend' },
    { id: 'frontend-2', name: 'frontend', role: 'Service', state: 'Idle', command: 'npm run start', activity: 'Start when ready', resources: '—', dir: 'D:\\first\\frontend' },
    { id: 'git', name: 'git', role: 'Git', state: 'Idle', command: 'git status', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'tests', name: 'tests', role: 'Test', state: 'Idle', command: 'npm test', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'xbx', name: 'xbx', role: 'Shell', state: 'Idle', command: 'powershell.exe', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'srhedbeh', name: 'srhedbeh', role: 'Shell', state: 'Idle', command: 'powershell.exe', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'qwerwa', name: 'qwerwa', role: 'Shell', state: 'Idle', command: 'powershell.exe', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'xvx cvxv', name: 'xvx cvxv', role: 'Shell', state: 'Idle', command: 'powershell.exe', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'server', name: 'server', role: 'Service', state: 'Idle', command: 'node dist/index.js', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
    { id: 'tests-2', name: 'tests', role: 'Test', state: 'Idle', command: 'vitest run', activity: 'Start when ready', resources: '—', dir: 'D:\\first' },
  ]);

  // Needs You Decision Queue
  const [decisions, setDecisions] = useState([
    {
      id: 'W01',
      worker: 'sample',
      alert: 'npm error enoent',
      impact: 'This is an engine-owned worker; acting changes its lifecycle.',
      recommended: 'Review the evidence and consequence before acting.',
      recovery: 'Recovery appears only after the engine verifies the alert cleared.',
      opened: '1m ago',
      acknowledged: false
    }
  ]);

  // Terminal Real-Time Histories
  const [claudeHistory, setClaudeHistory] = useState([
    'Loaded project context at D:\\first',
    'Warning: npm error enoent detected in build script'
  ]);

  const [antigravityHistory, setAntigravityHistory] = useState([
    'Antigravity CLI 1.2.4 active. Supervised PTY listening...'
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
    setWorkers(prev => prev.map(w => w.name === 'sample' ? { ...w, alert: false, activity: 'All evidence verified' } : w));
  }, []);

  const launchRecipe = useCallback(() => {
    setRecipeState({ isRunning: true, currentStep: 1, totalSteps: 4 });
    setTimeout(() => setRecipeState(r => ({ ...r, currentStep: 2 })), 800);
    setTimeout(() => setRecipeState(r => ({ ...r, currentStep: 3 })), 1600);
    setTimeout(() => setRecipeState(r => ({ ...r, currentStep: 4 })), 2400);
    setTimeout(() => {
      setRecipeState({ isRunning: false, currentStep: 5, totalSteps: 4 });
      setWorkers(prev => prev.map(w => ({
        ...w,
        state: 'Running',
        activity: 'Active via Recipe DAG',
        resources: '18MB · 0.3%'
      })));
    }, 3200);
  }, []);

  const runClaudePrompt = useCallback((prompt) => {
    if (!prompt.trim()) return;
    setClaudeHistory(prev => [
      ...prev,
      `> ${prompt.trim()}`,
      `[Haiku 4.5] Synthesizing AST fix for ENOENT dependency resolver...`,
      `[Verified] Restored manifest at D:\\first\\package.json. Zero syntax faults.`
    ]);
  }, []);

  const runAntigravityCmd = useCallback((cmd) => {
    if (!cmd.trim()) return;
    setAntigravityHistory(prev => [
      ...prev,
      `> ${cmd.trim()}`,
      `[Gemini 3.7 Flash] Executing verified operational probe...`,
      `[Protocol v1] 42 unit test assertions verified. Clean heartbeat.`
    ]);
  }, []);

  const openMissionAi = useCallback((prompt = '') => {
    setMissionAiPrompt(prompt);
    setMissionAiOpen(true);
  }, []);

  // Story Stepper / Narrative Director that drives the single cockpit
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
