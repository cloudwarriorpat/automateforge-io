import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { ErrorBoundary } from './components/ErrorBoundary'
import CookieConsent from './components/CookieConsent'
import { router } from './router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
      <CookieConsent />
    </ErrorBoundary>
  </StrictMode>,
)
