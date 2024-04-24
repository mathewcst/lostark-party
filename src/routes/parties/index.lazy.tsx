import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { RAIDS } from '@/lib/lostark/raids'
import { createLazyFileRoute } from '@tanstack/react-router'
import { PartyCard } from './components/-PartyCard'

export const Route = createLazyFileRoute('/parties/')({
  component: PartiesPage,
})

function PartiesPage() {
  return (
    <Section.Root>
      <Section.Header className="mb-4">
        <Section.Title>Parties</Section.Title>
        <div className="flex-auto"></div>
        <Button variant="outline" className="uppercase">
          New
        </Button>
      </Section.Header>

      <div className="grid grid-cols-2 gap-6">
        {RAIDS.map((raid) => (
          <PartyCard key={raid.name} raid={raid} />
        ))}
      </div>
    </Section.Root>
  )
}
