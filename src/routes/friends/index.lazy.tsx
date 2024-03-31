import { Section } from '@/components/Section'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/friends/')({
  component: FriendsPage,
})

function FriendsPage() {
  return (
    <Section.Root>
      <Section.Title>Friends</Section.Title>
    </Section.Root>
  )
}
