import { EmptyState } from '@/components/EmptyState'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/friends/')({
  component: FriendsPage,
})

function FriendsPage() {
  return (
    <Section.Root>
      <Section.Header>
        <Section.Subtitle>Friends</Section.Subtitle>
        <div className="flex-auto"></div>

        <Button variant="outline">Add New</Button>
      </Section.Header>

      <EmptyState>No friends found</EmptyState>
    </Section.Root>
  )
}
