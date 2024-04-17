import { createRouter, RouterProvider } from '@tanstack/react-router'

import { Providers } from './Providers'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

// Extend the TanstackRouter interface to include the router types
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
