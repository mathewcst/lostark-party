import { Section } from '@/components/Section'
import { createLazyFileRoute } from '@tanstack/react-router'
import { AddCharacter } from './components/-AddCharacter'
import { CharacterList } from './components/-CharactersList'

export const Route = createLazyFileRoute('/roster/')({
  component: RosterPage,
})

function RosterPage() {
  return (
    <Section.Root>
      <Section.Header>
        <Section.Subtitle>My Roster</Section.Subtitle>
        <AddCharacter />
      </Section.Header>

      <CharacterList />
    </Section.Root>
  )
}
