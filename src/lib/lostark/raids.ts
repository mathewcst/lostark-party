import { Raid, RaidDifficulty } from 'convex/schema'

type RaidsType = {
  name: Raid
  difficulties: RaidDifficulty[]
  players: number
  ilvl: number[]
}

export const RAIDS: RaidsType[] = [
  {
    name: 'Argos',
    difficulties: ['Normal'],
    players: 8,
    ilvl: [1370],
  },
  {
    name: 'Valtan',
    difficulties: ['Normal', 'Hard', 'Hell'],
    players: 8,
    ilvl: [1415, 1445, 1445],
  },
  {
    name: 'Vykas',
    difficulties: ['Normal', 'Hard', 'Hell'],
    players: 8,
    ilvl: [1430, 1460, 1460],
  },
  {
    name: 'Kakul Saydon',
    difficulties: ['Normal', 'Hell'],
    players: 4,
    ilvl: [1475, 1475],
  },
  {
    name: 'Brelshaza',
    difficulties: ['Normal', 'Hard', 'Hell'],
    players: 8,
    ilvl: [1490, 1540, 1560],
  },
  {
    name: 'Kayangel',
    difficulties: ['Normal', 'Hard'],
    players: 4,
    ilvl: [1540, 1580],
  },
  {
    name: 'Akkan',
    difficulties: ['Normal', 'Hard'],
    players: 8,
    ilvl: [1580, 1600],
  },
  {
    name: 'Ivory Tower',
    difficulties: ['Normal', 'Hard'],
    players: 4,
    ilvl: [1600, 1620],
  },
  {
    name: 'Thaemine',
    difficulties: ['Normal', 'Hard'],
    players: 8,
    ilvl: [1610, 1630],
  },
] as const
