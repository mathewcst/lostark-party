import { createFileRoute } from '@tanstack/react-router'

import { Section } from '@/components/Section'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Section.Root>
      <Section.Title>Home</Section.Title>
    </Section.Root>
  )
}
