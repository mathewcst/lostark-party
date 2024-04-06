/// <reference types="vite/client" />

interface ImportMetaEnv {
  // CLERK
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
  readonly CLERK_JWT_ISSUER_DOMAIN: string
  // CONVEX
  readonly VITE_CONVEX_URL: string
  readonly CONVEX_DEPLOYMENT: string
  // SENTRY
  readonly VITE_SENTRY_DNS: string

  // SEO
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DESCRIPTION: string
  readonly VITE_APP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
