import { Raid, RaidDifficulty } from 'convex/schema'

export type RaidsType = {
  name: Raid
  difficulties: RaidDifficulty[]
  players: number
  ilvl: number[]
  banner: string
}

export const RAIDS: RaidsType[] = [
  {
    name: 'Argos',
    difficulties: ['Normal'],
    players: 8,
    ilvl: [1370],
    banner: 'https://assets.lostark.party/raid-banners/argos-banner.webp',
  },
  {
    name: 'Valtan',
    difficulties: ['Normal', 'Hard', 'Hell'],
    players: 8,
    ilvl: [1415, 1445, 1445],
    banner: 'https://assets.lostark.party/raid-banners/valtan-banner.webp',
  },
  {
    name: 'Vykas',
    difficulties: ['Normal', 'Hard', 'Hell'],
    players: 8,
    ilvl: [1430, 1460, 1460],
    banner: 'https://assets.lostark.party/raid-banners/vykas-banner.webp',
  },
  {
    name: 'Kakul Saydon',
    difficulties: ['Normal', 'Hell'],
    players: 4,
    ilvl: [1475, 1475],
    banner: 'https://assets.lostark.party/raid-banners/kakul-banner.webp',
  },
  {
    name: 'Brelshaza',
    difficulties: ['Normal', 'Hard', 'Hell'],
    players: 8,
    ilvl: [1490, 1540, 1560],
    banner: 'https://assets.lostark.party/raid-banners/brelshaza-banner.webp',
  },
  {
    name: 'Kayangel',
    difficulties: ['Normal', 'Hard'],
    players: 4,
    ilvl: [1540, 1580],
    banner: 'https://assets.lostark.party/raid-banners/kayangel-banner.webp',
  },
  {
    name: 'Akkan',
    difficulties: ['Normal', 'Hard'],
    players: 8,
    ilvl: [1580, 1600],
    banner: 'https://assets.lostark.party/raid-banners/akkan-banner.webp',
  },
  {
    name: 'Ivory Tower',
    difficulties: ['Normal', 'Hard'],
    players: 4,
    ilvl: [1600, 1620],
    banner: 'https://assets.lostark.party/raid-banners/ivory-banner.webp',
  },
  {
    name: 'Thaemine',
    difficulties: ['Normal', 'Hard'],
    players: 8,
    ilvl: [1610, 1630],
    banner: 'https://assets.lostark.party/raid-banners/thaemine-banner.webp',
  },
] as const
