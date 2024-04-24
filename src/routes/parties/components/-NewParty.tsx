import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'
import { ComponentProps, useState } from 'react'
import { RaidPicker } from './-RaidPicker'

export const NewParty = () => {
  const isDesktop = useMediaQuery('(min-width: 640px)')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (isDesktop) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button variant="outline">Add New</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create New Party</SheetTitle>
            <SheetDescription>
              <PartyForm setIsOpen={setIsOpen} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
  }
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <Button variant="outline">Add New</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className="container pb-2">
          <PartyForm setIsOpen={setIsOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

type PartyFormProps = ComponentProps<'form'> & {
  setIsOpen: (open: boolean) => void
}

function PartyForm({ className, setIsOpen }: PartyFormProps) {
  const [name, setName] = useState<string>('')
  const [raid, setRaid] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(name)
    console.log(raid)
    setIsOpen(false)
  }

  return (
    <form className={cn('flex flex-col items-start gap-4 w-full', className)}>
      <div className="grid gap-2 my-2 w-full">
        <Label htmlFor="character-name">Name</Label>
        <Input
          type="text"
          name="character-name"
          id="character-name"
          placeholder="My Awesome Party"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="w-full">
        <RaidPicker setRaid={setRaid} />
      </div>

      <div>
        <p className="text-lg mt-4">Members</p>
      </div>

      <div className="grid gap-2 my-2 w-full">
        <Button variant="outline">Add Member</Button>
      </div>

      <div className="flex-auto"></div>

      <Button
        type="button"
        onClick={handleSubmit}
        className="dark:bg-loa-gray dark:text-white hover:dark:bg-loa-orange hover:dark:text-loa-black"
      >
        Save
      </Button>
    </form>
  )
}
