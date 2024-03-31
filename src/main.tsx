import React from 'react'

import * as Sentry from '@sentry/react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'

// Install FontSource fonts
import '@fontsource-variable/inter'
import { PROD_MODE } from './config/constants.ts'
import './index.css'

// Init Sentry
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DNS,
  tracesSampleRate: 1.0,
  enabled: PROD_MODE,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
