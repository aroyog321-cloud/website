import React, { useEffect, useState } from 'react';
import { Loader2, LogOut, RefreshCw } from 'lucide-react';
import { website } from './supabase.js';
import { AccountShell, Crown } from './AccountShell.jsx';

// Who is signed in on the website, the plan the OUTARCH app will honour, and
// how much of it is used. The app reads the same record, so what this page
// says is exactly what the app allows.

function formatDate(value) {
  const at = Date.parse(value || '');
  return Number.isFinite(at) ? new Date(at).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' }) : '';
}

function rows(entitlements) {
  const limits = entitlements?.limits || {};
  const usage = entitlements?.usage?.missionAiMessages || {};
  const unlimited = value => value === null || value === undefined;
  const count = (value, unit) => (unlimited(value) ? 'Unlimited' : `${value} ${unit}${value === 1 ? '' : 's'}`);
  const trial = entitlements?.recipeTrial;
  const trialEnded = trial?.endsAt && Date.parse(trial.endsAt) < Date.now();
  return [
    ['Terminals at once', unlimited(limits.terminals) ? 'Unlimited' : String(limits.terminals)],
    ['Projects', limits.projectSwitching ? 'All projects, switch any time' : 'One project'],
    ['Mission AI', unlimited(limits.missionAiMessages) ? 'Unlimited' : `${Math.max(0, limits.missionAiMessages - (usage.used || 0))} of ${limits.missionAiMessages} messages left today`],
    ['Your own AI keys', limits.byokKeys === 0 ? 'Not included' : count(limits.byokKeys, 'key')],
    ['Recipes', trial ? (trialEnded ? 'Trial ended' : `${count(limits.recipes, 'recipe')} · trial ends ${formatDate(trial.endsAt)}`) : count(limits.recipes, 'recipe')],
    ['Secure MCP', limits.mcp === 'full' ? 'Full access' : limits.mcp === 'read' ? 'Read-only access' : 'Not included'],
    ['Mobile companion', limits.mobileCompanion ? 'Included' : 'Not included'],
    ['VS Code bridge', limits.vscodeBridge ? 'Included' : 'Not included']
  ];
}

export default function AccountPage({ navigate }) {
  const [entitlements, setEntitlements] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    const { data: sessionData } = await website().auth.getSession();
    if (!sessionData?.session) {
      navigate('/auth?next=/account', { replace: true });
      return;
    }
    const { data, error: rpcError } = await website().rpc('get_entitlements');
    if (rpcError) setError('Your plan could not be loaded. Refresh to try again.');
    else setEntitlements(data);
    setLoading(false);
  };

  useEffect(() => { void load(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, []);

  const signOut = async () => {
    await website().auth.signOut({ scope: 'local' });
    navigate('/auth');
  };

  if (loading && !entitlements) {
    return <AccountShell navigate={navigate}><section className="oa-card oa-card--center" role="status"><Loader2 size={20} className="oa-spin"/><p>Loading your account…</p></section></AccountShell>;
  }

  const user = entitlements?.user || {};
  const plan = entitlements?.plan || { id: 'free', name: 'Free' };
  const subscription = entitlements?.subscription || {};
  const paid = plan.id !== 'free';
  const ends = subscription.currentPeriodEnd ? formatDate(subscription.currentPeriodEnd) : '';

  return <AccountShell navigate={navigate} wide>
    <section className="oa-card oa-card--wide">
      <div className="oa-identity">
        <span className="oa-avatar" aria-hidden="true">{(Array.from(String(user.name || user.email || 'O'))[0] || 'O').toUpperCase()}</span>
        <div>
          <h1>{user.name || user.email || 'Your account'}</h1>
          <p>{user.name && user.email ? `${user.email} · ` : ''}Signed in with {user.provider === 'google' ? 'Google' : 'email and password'}</p>
        </div>
        <button type="button" className="oa-button oa-button--quiet oa-button--small" onClick={signOut}><LogOut size={14}/>Sign out</button>
      </div>

      <div className={`oa-plan${paid ? ' oa-plan--paid' : ''}`}>
        <span className="oa-plan__mark"><Crown size={18}/></span>
        <div>
          <strong>{plan.name} plan</strong>
          <small>{paid ? (ends ? `Active until ${ends}` : 'Active, no end date') : 'Free forever. Upgrade when you need more.'}</small>
        </div>
        <div className="oa-plan__actions">
          <button type="button" className="oa-button oa-button--quiet oa-button--small" onClick={() => void load()} aria-label="Check your plan again"><RefreshCw size={14}/>Refresh</button>
          {plan.id !== 'ultimate'
            ? <button type="button" className="oa-button oa-button--gold oa-button--small" onClick={() => navigate(`/pricing?plan=${plan.id === 'pro' ? 'ultimate' : 'pro'}`)}><Crown size={13}/>Upgrade</button>
            : null}
        </div>
      </div>

      {error ? <p className="oa-error" role="alert">{error}</p> : null}
      <dl className="oa-limits">{rows(entitlements).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <p className="oa-fine">The OUTARCH app checks your plan when it starts and every few minutes, so a change here reaches it without signing in again.</p>
    </section>
  </AccountShell>;
}
