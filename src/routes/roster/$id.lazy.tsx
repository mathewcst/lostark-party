import { Section } from '@/components/Section'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/roster/$id')({
  component: UserRosterRoute,
})

function UserRosterRoute() {
  return (
    <Section.Root>
      <Section.Title>user's roster</Section.Title>
    </Section.Root>
  )
}
