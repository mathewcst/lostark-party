import { LoginButton } from '@/components/Buttons/LoginButton'
import { EmptyState } from '@/components/EmptyState'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/store/app'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/friends/')({
  component: FriendsPage,
})

function FriendsPage() {
  const { isAuthenticated } = useAppStore((state) => state)

  return (
    <Section.Root>
      <Section.Header>
        <Section.Subtitle>Friends</Section.Subtitle>
        <div className="flex-auto"></div>

        {isAuthenticated ? (
          <Button variant="outline">Add New</Button>
        ) : (
          <LoginButton>Login</LoginButton>
        )}
      </Section.Header>

      <EmptyState>No friends found</EmptyState>
    </Section.Root>
  )
}
