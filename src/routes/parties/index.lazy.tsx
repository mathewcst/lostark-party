import { Section } from '@/components/Section'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/parties/')({
  component: PartiesPage,
})

function PartiesPage() {
  return (
    <Section.Root>
      <Section.Title>Parties</Section.Title>
    </Section.Root>
  )
}
