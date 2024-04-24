import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { MobileFooter } from '@/components/MobileFooter'
import { MobileHeader } from '@/components/MobileHeader'
import { Sidebar } from '@/components/Sidebar'
import { isDesktop } from '@/hooks/useMediaQuery'

export const Route = createRootRouteWithContext()({
  component: App,
})

function App() {
  const Desktop = isDesktop()

  return (
    <div
      id="app"
      className="bg-loa-gray min-h-screen w-full flex flex-col sm:flex-row items-start justify-start gap-0 sm:gap-8"
    >
      {Desktop ? <Sidebar /> : <MobileHeader />}

      <main className="w-full max-w-screen-xl container mx-auto">
        <Outlet />
      </main>

      {!Desktop && <MobileFooter />}

      {import.meta.env.DEV && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </div>
  )
}
