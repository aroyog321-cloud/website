import React, { useEffect, useMemo, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { website } from './supabase.js';
import { AccountShell, Crown } from './AccountShell.jsx';

// Free, Pro and Ultimate, read from the plans table — so what this page
// promises is the same record the app enforces. Payments are handled by hand
// for now: "Request upgrade" files a request the owner sees in Supabase and
// fulfils once payment is settled.

const FEATURE_NAMES = {
  terminals: 'more terminals', projectSwitching: 'switching projects', mcp: 'the Secure MCP gateway', mcpActions: 'MCP actions',
  mobileCompanion: 'the mobile companion', vscodeBridge: 'the VS Code bridge', recipes: 'more recipes', recipeTrial: 'workspace recipes',
  byokKeys: 'your own AI keys', missionAiMessages: 'unlimited Mission AI'
};

export default function PlansPage({ navigate }) {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const wanted = params.get('plan');
  const feature = FEATURE_NAMES[params.get('feature')] || null;
  const [plans, setPlans] = useState([]);
  const [current, setCurrent] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [requests, setRequests] = useState([]);
  const [support, setSupport] = useState('');
  const [busy, setBusy] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let alive = true;
    (async () => {
      const client = website();
      const [{ data: planRows, error: planError }, { data: config }] = await Promise.all([
        client.from('plans').select('id,name,rank,tagline,price_label,highlights,purchasable').order('rank'),
        client.from('app_config').select('key,value').eq('key', 'support_email')
      ]);
      if (!alive) return;
      if (planError) setError('Plans could not be loaded. Refresh to try again.');
      setPlans(planRows || []);
      setSupport(typeof config?.[0]?.value === 'string' ? config[0].value : '');
      const { data: sessionData } = await client.auth.getSession();
      if (!alive || !sessionData?.session) return;
      setSignedIn(true);
      const [{ data: entitlements }, { data: open }] = await Promise.all([
        client.rpc('get_entitlements'),
        client.from('upgrade_requests').select('plan_id,status,created_at').eq('status', 'open')
      ]);
      if (!alive) return;
      setCurrent(entitlements?.plan?.id || 'free');
      setRequests(open || []);
    })();
    return () => { alive = false; };
  }, []);

  const request = async plan => {
    if (!signedIn) {
      navigate(`/auth?mode=signup&next=${encodeURIComponent(`/pricing?plan=${plan.id}`)}`);
      return;
    }
    setBusy(plan.id);
    setError('');
    setMessage('');
    const { error: insertError } = await website().from('upgrade_requests').insert({ plan_id: plan.id, message: feature ? `Wants ${feature}` : '' });
    setBusy('');
    if (insertError) { setError('Your request could not be sent. Try again in a moment.'); return; }
    setRequests(list => [...list, { plan_id: plan.id, status: 'open' }]);
    setMessage(`Request for ${plan.name} sent. We'll contact you to complete the upgrade${support ? ` — or write to ${support}` : ''}. Your app switches to ${plan.name} as soon as it's active.`);
  };

  const currentRank = plans.find(plan => plan.id === current)?.rank ?? -1;

  return <AccountShell navigate={navigate} wide>
    <section className="oa-plans-head">
      <h1>Plans</h1>
      <p>{feature ? `You were looking for ${feature}. ` : ''}Every plan runs entirely on your computer. Plans decide how much of OUTARCH you can use at once.</p>
    </section>
    {message ? <p className="oa-notice oa-notice--wide" role="status">{message}</p> : null}
    {error ? <p className="oa-error oa-error--wide" role="alert">{error}</p> : null}
    {!plans.length && !error ? <div className="oa-card oa-card--center" role="status"><Loader2 size={20} className="oa-spin"/><p>Loading plans…</p></div> : null}
    <div className="oa-plans">
      {plans.map(plan => {
        const isCurrent = plan.id === current;
        const pending = requests.some(item => item.plan_id === plan.id && item.status === 'open');
        const highlighted = plan.id === wanted || (!wanted && plan.id === 'pro');
        const below = currentRank >= plan.rank;
        return <article key={plan.id} className={`oa-plan-card${highlighted ? ' is-highlighted' : ''}${plan.id !== 'free' ? ' is-paid' : ''}`}>
          <header>
            <span className="oa-plan-card__name">{plan.id !== 'free' ? <Crown size={15}/> : null}{plan.name}</span>
            {isCurrent ? <span className="oa-plan-card__current">Your plan</span> : highlighted ? <span className="oa-plan-card__pick">Recommended</span> : null}
          </header>
          <p className="oa-plan-card__tagline">{plan.tagline}</p>
          <p className="oa-plan-card__price">{plan.price_label || (plan.id === 'free' ? 'Free' : 'Pricing on request')}</p>
          <ul>{(plan.highlights || []).map(item => <li key={item}><Check size={14}/><span>{item}</span></li>)}</ul>
          {plan.id === 'free'
            ? <a className="oa-button oa-button--quiet" href="/#download-section">Download OUTARCH</a>
            : isCurrent
              ? <button type="button" className="oa-button oa-button--quiet" disabled>Your current plan</button>
              : below
                ? <button type="button" className="oa-button oa-button--quiet" disabled>Included in your plan</button>
                : pending
                  ? <button type="button" className="oa-button oa-button--quiet" disabled>Request sent</button>
                  : <button type="button" className="oa-button oa-button--gold" disabled={busy === plan.id} onClick={() => void request(plan)}>{busy === plan.id ? <Loader2 size={15} className="oa-spin"/> : <Crown size={14}/>}{signedIn ? `Request ${plan.name}` : `Get ${plan.name}`}</button>}
        </article>;
      })}
    </div>
    <p className="oa-fine oa-fine--center">Upgrades are activated by hand while online payment is being set up{support ? <> · <a href={`mailto:${support}`}>{support}</a></> : null}.</p>
  </AccountShell>;
}
