import { Section } from '@/components/Section'
import { createFileRoute } from '@tanstack/react-router'
import { changelog } from './-changelog'
import { ChangelogItem } from './-components/-ChangelogItem'

export const Route = createFileRoute('/changelog/')({
  component: ChangelogRoute,
})

function ChangelogRoute() {
  return (
    <Section.Root>
      <Section.Title>Changelog</Section.Title>

      <div className="my-4">
        {changelog.map((item) => (
          <ChangelogItem key={item.version} item={item} />
        ))}
      </div>
    </Section.Root>
  )
}
