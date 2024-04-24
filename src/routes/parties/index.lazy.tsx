import { EmptyState } from '@/components/EmptyState'
import { Section } from '@/components/Section'
import { createLazyFileRoute } from '@tanstack/react-router'
import { NewParty } from './components/-NewParty'

export const Route = createLazyFileRoute('/parties/')({
  component: PartiesPage,
})

function PartiesPage() {
  return (
    <Section.Root>
      <Section.Header>
        <Section.Subtitle>Parties</Section.Subtitle>
        <div className="flex-auto"></div>
        <NewParty />
      </Section.Header>

      <EmptyState>No parties found</EmptyState>

      {/*<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
      </div>*/}
    </Section.Root>
  )
}
