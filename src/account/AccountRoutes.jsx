import React, { useCallback, useEffect, useState } from 'react';
import AuthPage from './AuthPage.jsx';
import AccountPage from './AccountPage.jsx';
import PlansPage from './PlansPage.jsx';

// /auth, /account and /pricing are the account pages; every other path is the
// marketing site, rendered unchanged. This sits above the site's own App so
// the two never have to know about each other.

const ROUTES = { '/auth': AuthPage, '/account': AccountPage, '/pricing': PlansPage };

function routeOf(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return ROUTES[clean] ? clean : null;
}

export default function AccountRoutes({ site }) {
  const [path, setPath] = useState(() => routeOf(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(routeOf(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to, { replace = false } = {}) => {
    const next = new URL(to, window.location.origin);
    if (!routeOf(next.pathname)) { window.location.assign(next.toString()); return; }
    window.history[replace ? 'replaceState' : 'pushState'](null, '', `${next.pathname}${next.search}`);
    setPath(routeOf(next.pathname));
    window.scrollTo(0, 0);
  }, []);

  if (!path) return site;
  const Page = ROUTES[path];
  // The key remounts a page when its query changes (a new plan, a new state).
  return <Page key={`${path}${window.location.search}`} navigate={navigate}/>;
}
