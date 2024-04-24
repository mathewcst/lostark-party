import { ChevronsUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { RAIDS } from '@/lib/lostark/raids'
import { useState } from 'react'

type RaidPickerProps = {
  setRaid: (raid: string) => void
}

export const RaidPicker = ({ setRaid }: RaidPickerProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Label>Raid</Label>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full items-center justify-between"
        >
          {value ? (
            <div className="flex items-center">
              <span className="capitalize">
                {RAIDS.find((clss) => clss.name === value)?.name}
              </span>
            </div>
          ) : (
            'Select a Raid...'
          )}
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Command className="max-h-64">
          <CommandInput placeholder="Search Raid..." />

          <CommandList>
            <CommandEmpty>Raid not found.</CommandEmpty>

            <CommandGroup>
              {RAIDS.map((clss) => (
                <CommandItem
                  key={clss.name}
                  value={clss.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setRaid(currentValue)
                    setOpen(false)
                  }}
                  className="capitalize"
                >
                  {clss.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
