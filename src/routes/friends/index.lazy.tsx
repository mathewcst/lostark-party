import { Section } from '@/components/Section'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/friends/')({
  component: FriendsPage,
})

function FriendsPage() {
  return (
    <Section.Root>
      <Section.Header>
        <Section.Subtitle>Friends</Section.Subtitle>
      </Section.Header>
    </Section.Root>
  )
}
