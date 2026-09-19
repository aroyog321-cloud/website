import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AccountRoutes from './account/AccountRoutes.jsx'
import './index.css'

// /auth, /account and /pricing are the OUTARCH account pages (sign in, plan,
// upgrade); every other address renders the site unchanged.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccountRoutes site={<App />} />
  </React.StrictMode>,
)
