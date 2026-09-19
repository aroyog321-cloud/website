import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Check, Eye, EyeOff, Loader2, Mail, Monitor } from 'lucide-react';
import { clientFor, isDesktopFlow, website } from './supabase.js';
import { desktopCallback, desktopState, takeRedirectTokensOnce } from './desktopHandoff.js';
import { AccountShell } from './AccountShell.jsx';

// Sign in or create an account — with email and password, or with Google.
//
// Opened by the OUTARCH desktop app (…/auth?client=desktop&state=…), the page
// hands the session back to the app when the operator is done. Opened on its
// own, it signs the operator into the website and goes to their Account.

function friendly(message = '') {
  const text = String(message);
  if (/invalid login credentials/i.test(text)) return "That email and password don't match an OUTARCH account.";
  if (/email not confirmed/i.test(text)) return 'Confirm your email address first. We sent you a link when you signed up.';
  if (/user already registered|already been registered/i.test(text)) return 'An account already uses this email. Sign in instead.';
  if (/password should be at least|weak password/i.test(text)) return 'Use a password of at least 8 characters.';
  if (/rate limit|too many/i.test(text)) return 'Too many attempts. Wait a minute and try again.';
  if (/provider is not enabled|unsupported provider/i.test(text)) return 'Google sign-in is not switched on for OUTARCH yet. Use your email and password for now.';
  if (/failed to fetch|network/i.test(text)) return 'OUTARCH could not reach its account service. Check your connection and try again.';
  return text || 'Something went wrong. Try again.';
}

// Only a path on this site may be the page we go to afterwards.
function safeNext(value) {
  return typeof value === 'string' && /^\/[A-Za-z0-9/_?=&.-]*$/.test(value) && !value.startsWith('//') ? value : null;
}

function GoogleMark() {
  return <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/>
  </svg>;
}

export default function AuthPage({ navigate }) {
  const desktopFlow = useMemo(() => isDesktopFlow(), []);
  const state = useMemo(() => (desktopFlow ? desktopState() : null), [desktopFlow]);
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const next = safeNext(params.get('next'));
  const client = clientFor(desktopFlow);

  const [mode, setMode] = useState(params.get('mode') === 'signup' ? 'signup' : 'signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(desktopFlow && !state ? 'This sign-in page was opened without its link to the OUTARCH app. Start signing in from OUTARCH again.' : '');
  const [notice, setNotice] = useState('');
  const [handoff, setHandoff] = useState(null);
  const finished = useRef(false);

  // Where a redirect (Google, an email link) should come back to: this page,
  // with the same app link, so the session still reaches the right place.
  const returnUrl = () => {
    const url = new URL(window.location.href);
    url.hash = '';
    url.searchParams.delete('mode');
    return url.toString();
  };

  async function finish(session) {
    // A session is handed on once, however many times this is reached.
    if (finished.current) return;
    finished.current = true;
    if (desktopFlow) {
      const link = desktopCallback(session, state);
      if (!link) {
        finished.current = false;
        setError('This sign-in link has expired. Start signing in from OUTARCH again.');
        return;
      }
      setHandoff(link);
      setMode('handoff');
      window.location.href = link;
      return;
    }
    const { error: sessionError } = await website().auth.setSession({ access_token: session.access_token, refresh_token: session.refresh_token });
    if (sessionError) { finished.current = false; setError(friendly(sessionError.message)); return; }
    navigate(next || '/account');
  }

  // A session a redirect brought back: Google, a confirmed email, a reset link.
  useEffect(() => {
    const taken = takeRedirectTokensOnce();
    if (!taken) return;
    if (taken.error) { setError(friendly(taken.error)); return; }
    if (taken.type === 'recovery') {
      client.auth.setSession({ access_token: taken.session.access_token, refresh_token: taken.session.refresh_token })
        .then(({ error: recoveryError }) => { if (recoveryError) setError(friendly(recoveryError.message)); else setMode('reset-set'); });
      return;
    }
    void finish(taken.session);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function run(task) {
    setBusy(true);
    setError('');
    setNotice('');
    try { await task(); }
    catch (reason) { setError(friendly(reason?.message)); }
    finally { setBusy(false); }
  }

  const google = () => run(async () => {
    const { error: oauthError } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: returnUrl(), queryParams: { prompt: 'select_account' } }
    });
    if (oauthError) throw oauthError;
  });

  const submit = event => {
    event.preventDefault();
    if (mode === 'signin') {
      return run(async () => {
        const { data, error: signInError } = await client.auth.signInWithPassword({ email: email.trim(), password });
        if (signInError) throw signInError;
        await finish(data.session);
      });
    }
    if (mode === 'signup') {
      return run(async () => {
        if (password.length < 8) throw new Error('Use a password of at least 8 characters.');
        const { data, error: signUpError } = await client.auth.signUp({
          email: email.trim(),
          password,
          options: { data: { full_name: name.trim() || undefined }, emailRedirectTo: returnUrl() }
        });
        if (signUpError) throw signUpError;
        if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) throw new Error('User already registered');
        if (data.session) await finish(data.session);
        else setMode('confirm');
      });
    }
    if (mode === 'reset-request') {
      return run(async () => {
        const url = new URL(returnUrl());
        const { error: resetError } = await client.auth.resetPasswordForEmail(email.trim(), { redirectTo: url.toString() });
        if (resetError) throw resetError;
        setNotice(`If ${email.trim()} has an OUTARCH account, a reset link is on its way.`);
      });
    }
    if (mode === 'reset-set') {
      return run(async () => {
        if (password.length < 8) throw new Error('Use a password of at least 8 characters.');
        const { error: updateError } = await client.auth.updateUser({ password });
        if (updateError) throw updateError;
        const { data } = await client.auth.getSession();
        if (data?.session) await finish(data.session);
        else { setMode('signin'); setNotice('Your password is changed. Sign in with it now.'); }
      });
    }
    return undefined;
  };

  const resend = () => run(async () => {
    const { error: resendError } = await client.auth.resend({ type: 'signup', email: email.trim(), options: { emailRedirectTo: returnUrl() } });
    if (resendError) throw resendError;
    setNotice('We sent the confirmation link again.');
  });

  const title = { signin: 'Sign in to OUTARCH', signup: 'Create your OUTARCH account', 'reset-request': 'Reset your password', 'reset-set': 'Choose a new password' }[mode];

  if (mode === 'handoff') {
    return <AccountShell navigate={navigate}>
      <section className="oa-card oa-card--center" aria-live="polite">
        <span className="oa-success" aria-hidden="true"><Check size={22}/></span>
        <h1>You're signed in</h1>
        <p>OUTARCH is opening. You can close this tab once it does.</p>
        <a className="oa-button oa-button--primary" href={handoff}>Open OUTARCH</a>
        <p className="oa-fine">Nothing happened? Make sure OUTARCH is still open, then select Open OUTARCH. If your browser asks, allow it to open OUTARCH.</p>
      </section>
    </AccountShell>;
  }

  if (mode === 'confirm') {
    return <AccountShell navigate={navigate}>
      <section className="oa-card oa-card--center" aria-live="polite">
        <span className="oa-success" aria-hidden="true"><Mail size={22}/></span>
        <h1>Check your inbox</h1>
        <p>We sent a confirmation link to <b>{email.trim()}</b>. Open it on this computer{desktopFlow ? ' and OUTARCH signs you in automatically' : ' to finish creating your account'}.</p>
        {notice ? <p className="oa-notice" role="status">{notice}</p> : null}
        {error ? <p className="oa-error" role="alert">{error}</p> : null}
        <button type="button" className="oa-button oa-button--quiet" disabled={busy} onClick={resend}>{busy ? 'Sending…' : 'Send the link again'}</button>
        <button type="button" className="oa-link" onClick={() => { setMode('signin'); setError(''); setNotice(''); }}>Back to sign in</button>
      </section>
    </AccountShell>;
  }

  const passwordMode = mode === 'signin' || mode === 'signup' || mode === 'reset-set';
  const emailMode = mode !== 'reset-set';

  return <AccountShell navigate={navigate}>
    <section className="oa-card">
      {desktopFlow ? <span className="oa-chip"><Monitor size={13}/>Signing in to the OUTARCH app</span> : null}
      <h1>{title}</h1>
      {mode === 'signin' ? <p className="oa-lead">Welcome back. Pick up where your terminals left off.</p> : null}
      {mode === 'signup' ? <p className="oa-lead">New accounts start on the Free plan. Upgrade whenever you need more.</p> : null}
      {mode === 'reset-request' ? <p className="oa-lead">Enter the email you signed up with and we'll send you a link to choose a new password.</p> : null}

      {mode === 'signin' || mode === 'signup' ? <>
        <button type="button" className="oa-button oa-button--google" disabled={busy || (desktopFlow && !state)} onClick={google}><GoogleMark/>Continue with Google</button>
        <div className="oa-divider" role="separator"><span>or use your email</span></div>
      </> : null}

      <form className="oa-form" onSubmit={submit} noValidate>
        {mode === 'signup' ? <label className="oa-field"><span>Name <em>optional</em></span><input type="text" autoComplete="name" value={name} onChange={event => setName(event.target.value)} maxLength={80}/></label> : null}
        {emailMode ? <label className="oa-field"><span>Email</span><input type="email" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} placeholder="you@example.com"/></label> : null}
        {passwordMode ? <label className="oa-field">
          <span>{mode === 'reset-set' ? 'New password' : 'Password'}{mode === 'signin' ? <button type="button" className="oa-link oa-link--inline" onClick={() => { setMode('reset-request'); setError(''); setNotice(''); }}>Forgot password?</button> : null}</span>
          <span className="oa-password">
            <input type={showPassword ? 'text' : 'password'} autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} required minLength={mode === 'signin' ? undefined : 8} value={password} onChange={event => setPassword(event.target.value)}/>
            <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(value => !value)}>{showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}</button>
          </span>
          {mode !== 'signin' ? <small>At least 8 characters.</small> : null}
        </label> : null}

        {notice ? <p className="oa-notice" role="status">{notice}</p> : null}
        {error ? <p className="oa-error" role="alert">{error}</p> : null}

        <button type="submit" className="oa-button oa-button--primary" disabled={busy || (desktopFlow && !state) || !(emailMode ? email.trim() : true) || (passwordMode && !password)}>
          {busy ? <Loader2 size={16} className="oa-spin"/> : null}
          {{ signin: 'Sign in', signup: 'Create account', 'reset-request': 'Send reset link', 'reset-set': 'Save password' }[mode]}
        </button>
      </form>

      <p className="oa-switch">
        {mode === 'signin' ? <>New to OUTARCH? <button type="button" className="oa-link" onClick={() => { setMode('signup'); setError(''); setNotice(''); }}>Create an account</button></> : null}
        {mode === 'signup' ? <>Already have an account? <button type="button" className="oa-link" onClick={() => { setMode('signin'); setError(''); setNotice(''); }}>Sign in</button></> : null}
        {mode === 'reset-request' ? <button type="button" className="oa-link" onClick={() => { setMode('signin'); setError(''); setNotice(''); }}><ArrowLeft size={13}/>Back to sign in</button> : null}
      </p>
    </section>
  </AccountShell>;
}
