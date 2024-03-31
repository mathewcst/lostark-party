import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  isSidebarOpen: boolean
}

type Actions = {
  toggleSidebar: () => void
}

const initialState: State = {
  isSidebarOpen: false,
}

export const useAppStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      toggleSidebar: () => {
        set((state) => ({
          isSidebarOpen: !state.isSidebarOpen,
        }))
      },
    }),
    {
      name: '@lostark-party/app',
    },
  ),
)
