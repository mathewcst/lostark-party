import { CLASS_ENGRAVINGS, COMBAT_ENGRAVINGS } from './lib/engravings'

export type CombatEngraving = (typeof COMBAT_ENGRAVINGS)[number]
export type ClassEngraving = (typeof CLASS_ENGRAVINGS)[number]

export type Character = {
  name: string
  class: string
  ilvl?: number
  engravings?: Engraving[]
  stats?: Stats
}

export type Engraving = {
  name: CombatEngraving | ClassEngraving
  level: 1 | 2 | 3
}

export type Stats = {
  crit: number
  specialization: number
  domination: number
  swiftness: number
  endurance: number
  expertise: number
}
