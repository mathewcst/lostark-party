import { ChevronsUpDown } from 'lucide-react'

import { ClassIcon } from '@/components/ClassIcon'
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
import { CLASSES } from '@/lib/lostark/classes'
import { useState } from 'react'

type ClassPickerProps = {
  setClss: (clss: string) => void
}

export const ClassPicker = ({ setClss }: ClassPickerProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Label>Class</Label>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full items-center justify-between"
        >
          {value ? (
            <div className="flex items-center">
              <ClassIcon clss={value} className="w-6 h-6" />
              <span className="ml-2 capitalize">
                {CLASSES.find((clss) => clss.name === value)?.name}
              </span>
            </div>
          ) : (
            'Select a class...'
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Command className="max-h-64">
          <CommandInput placeholder="Search class..." />

          <CommandList>
            <CommandEmpty>No class found.</CommandEmpty>

            <CommandGroup>
              {CLASSES.map((clss) => (
                <CommandItem
                  key={clss.name}
                  value={clss.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setClss(currentValue)
                    setOpen(false)
                  }}
                  className="capitalize"
                >
                  <div className="mr-2">
                    <ClassIcon clss={clss.name} className="w-6 h-6" />
                  </div>
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
