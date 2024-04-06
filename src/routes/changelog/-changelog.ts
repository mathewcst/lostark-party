export type Changelog = {
  date: Date
  version: string
  description: string
  changes?: {
    id: number
    type: 'added' | 'changed' | 'fixed' | 'removed'
    description: string
  }[]
}

export const changelog: Changelog[] = [
  {
    date: new Date('Sat Apr 05 2024 12:19:05 GMT-0300'),
    version: 'v0.0.1',
    description: 'Launched base app.',
  },
  {
    date: new Date('Sat Apr 06 2024 12:19:05 GMT-0300'),
    version: 'v0.0.2',
    description: 'Finish the base of creating parties.',
    changes: [
      {
        id: 1,
        type: 'added',
        description: 'Add local party creation',
      },
      {
        id: 2,
        type: 'fixed',
        description: 'Fix minor bugs',
      },
    ],
  },
]

changelog.sort((a, b) => b.date.getTime() - a.date.getTime())
