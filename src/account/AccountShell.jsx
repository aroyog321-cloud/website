import React from 'react';
import './account.css';

// The frame every account page shares: the mark home, one line of trust at
// the foot, and the page in between. Deliberately quieter than the marketing
// site — these pages are for doing one thing.

export function Crown({ size = 14 }) {
  return <svg className="oa-crown" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M3.2 8.4 8.3 12.3 12 5.2l3.7 7.1 5.1-3.9-1.9 9.1H5.1Z" fill="currentColor"/>
    <rect x="5.1" y="18.6" width="13.8" height="2" rx="1" fill="currentColor"/>
    <circle cx="3.2" cy="8.2" r="1.35" fill="currentColor"/>
    <circle cx="12" cy="4.6" r="1.35" fill="currentColor"/>
    <circle cx="20.8" cy="8.2" r="1.35" fill="currentColor"/>
  </svg>;
}

export function AccountShell({ navigate, children, wide = false, actions = null }) {
  const go = (event, path) => { event.preventDefault(); navigate(path); };
  return <div className="oa-page">
    <header className="oa-top">
      <a href="/" className="oa-brand" onClick={event => { event.preventDefault(); window.location.assign('/'); }}>
        <span className="oa-brand__mark"><img src="/outarch-icon.png" alt="" onError={event => { event.currentTarget.style.display = 'none'; }}/></span>
        <span className="oa-brand__name">OUTARCH</span>
      </a>
      <nav className="oa-top__nav" aria-label="Account">
        <a href="/pricing" onClick={event => go(event, '/pricing')}>Plans</a>
        <a href="/account" onClick={event => go(event, '/account')}>Account</a>
        {actions}
      </nav>
    </header>
    <main className={`oa-main${wide ? ' oa-main--wide' : ''}`}>{children}</main>
    <footer className="oa-foot">Your password goes to OUTARCH's account service only. The desktop app keeps its session encrypted on your computer.</footer>
  </div>;
}
