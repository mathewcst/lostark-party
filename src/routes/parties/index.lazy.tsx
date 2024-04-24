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
        <Section.Subtitle>Parties</Section.Subtitle>
        <div className="flex-auto"></div>
        <Button variant="outline" className="uppercase">
          New
        </Button>
      </Section.Header>

      <div className="grid grid-cols-2 gap-6">
        {RAIDS.map((raid) => (
          <PartyCard
            key={raid.name}
            raid={raid}
            done={raid.name === 'Kakul Saydon' || raid.name === 'Akkan'}
          />
        ))}
      </div>
    </Section.Root>
  )
}
