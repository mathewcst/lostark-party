import { APP_ASSETS_URL } from '@/config/constants'
import { Character } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  characters: Character[]
}

type Actions = {
  addCharacter: (name: string, clss: string) => void
  getClassIcon: (clss: string) => string
}

const initialState: State = {
  characters: [],
}

export const useRosterStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      addCharacter: (name, clss) => {
        set((state) => ({
          characters: [...state.characters, { name, class: clss }],
        }))
      },
      getClassIcon: (clss) => {
        return `${APP_ASSETS_URL}/classes/${clss}.webp`
      },
    }),
    {
      name: '@lostark-party/roster',
    },
  ),
)
