import { PropsWithChildren } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'

import { TooltipProvider } from './components/ui/tooltip'
import { COLORS } from './config/constants'

type ProviderProps = PropsWithChildren & {
  queryClient: QueryClient
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

export const Providers = ({ children, queryClient }: ProviderProps) => {
  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      afterSignInUrl="/"
      afterSignUpUrl="/"
      signInUrl="/"
      signUpUrl="/"
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: COLORS.background,
          colorPrimary: COLORS.primary,
        },
      }}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
