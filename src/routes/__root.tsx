import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Sidebar } from '@/components/Sidebar'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: App,
})

function App() {
  return (
    <div
      id="app"
      className="bg-loa-gray min-h-screen w-full flex flex-row items-start justify-start gap-8"
    >
      <Sidebar />

      <Outlet />

      {import.meta.env.DEV && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </div>
  )
}
