import { User } from '@convex/schema'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  user: User | null
  isAuthenticated: boolean
}

type Actions = {
  setUser: (user: User | null) => void
}

const initialState: State = {
  user: null,
  isAuthenticated: false,
}

export const useAppStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
    }),
    {
      name: '@lostark-party/app',
    },
  ),
)
