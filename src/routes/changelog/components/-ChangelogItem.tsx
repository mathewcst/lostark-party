import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { dateFormatter } from '@/lib/utils'
import { ChevronsUpDown } from 'lucide-react'
import { Changelog } from '../-changelog'

type ChangelogItemProps = {
  item: Changelog
}

export const ChangelogItem = ({ item }: ChangelogItemProps) => {
  return (
    <Collapsible className="my-4">
      <CollapsibleTrigger className="w-full items-start text-start">
        <div className="w-full bg-background p-4 rounded-md rounded-bl-none rounded-br-none flex flex-row items-center justify-start">
          <span className="mr-2">[{dateFormatter().format(item.date)}]</span>
          {item.version}

          <div className="flex-auto"></div>
          <ChevronsUpDown className="h-4 w-4" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-loa-black p-4">
        {item.description}
        {item.changes && (
          <ul className="my-2 list-inside list-disc">
            {item.changes.map((change) => (
              <li key={change.id}>{change.description}</li>
            ))}
          </ul>
        )}
      </CollapsibleContent>
    </Collapsible>
  )
}
