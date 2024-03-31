import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronsUpDown } from 'lucide-react'

type ChangelogItemProps = {
  version: string
  description: string
}

export const ChangelogItem = ({ version, description }: ChangelogItemProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full items-start text-start">
        <div className="w-full bg-background p-4 rounded-md rounded-bl-none rounded-br-none flex flex-row items-center justify-between">
          {version}
          <ChevronsUpDown className="h-4 w-4" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-loa-black p-4">
        {description}
      </CollapsibleContent>
    </Collapsible>
  )
}
