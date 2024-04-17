import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Sidebar } from '@/components/Sidebar'

export const Route = createRootRouteWithContext()({
  component: App,
})

function App() {
  return (
    <div
      id="app"
      className="bg-loa-gray min-h-screen w-full flex flex-row items-start justify-start gap-8"
    >
      <Sidebar />

      <main className="w-full max-w-screen-xl  container mx-auto">
        <Outlet />
      </main>

      {import.meta.env.DEV && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </div>
  )
}
