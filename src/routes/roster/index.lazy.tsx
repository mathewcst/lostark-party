import { Section } from '@/components/Section'
import { createLazyFileRoute } from '@tanstack/react-router'
import { CharacterList } from './components/-CharactersList'

export const Route = createLazyFileRoute('/roster/')({
  component: RosterPage,
})

function RosterPage() {
  return (
    <Section.Root>
      <Section.Title>Roster</Section.Title>

      <CharacterList />
    </Section.Root>
  )
}
