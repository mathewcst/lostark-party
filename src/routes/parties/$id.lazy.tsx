import { BackButton } from '@/components/BackButton'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { createLazyFileRoute } from '@tanstack/react-router'

import { SquareCheck } from 'lucide-react'
import { useState } from 'react'

export const Route = createLazyFileRoute('/parties/$id')({
  component: PartyDetailsPage,
})

function PartyDetailsPage() {
  const [done, setDone] = useState<boolean>(false)

  return (
    <Section.Root>
      <BackButton backTo="/parties" />

      <Section.Header className="my-4">
        <Section.Subtitle>Party 123</Section.Subtitle>

        <div className="flex-auto"></div>

        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                onClick={() => setDone((prev) => !prev)}
                className={cn(
                  'gap-2 uppercase',
                  { 'text-loa-green': done },
                  { 'hover:bg-red-500 hover:bg-opacity-10': done },
                  { 'hover:bg-green-500 hover:bg-opacity-10': !done },
                )}
              >
                <SquareCheck size={16} /> {done ? 'Done' : 'To Do'}
              </Button>
            </TooltipTrigger>

            <TooltipContent side="bottom">
              <p> {done ? 'Undo' : 'Mark as Done'}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Section.Header>
    </Section.Root>
  )
}
