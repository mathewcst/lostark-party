import { LoginButton } from '@/components/Buttons/LoginButton'
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
import { isDesktop } from '@/hooks/useMediaQuery'
import { cn, generate_id } from '@/lib/utils'
import { useAppStore } from '@/store/app'
import { api } from '@convex/_generated/api'
import { Raid } from '@convex/schema'
import { useMutation } from 'convex/react'
import { ComponentProps, useState } from 'react'
import { RaidPicker } from './-RaidPicker'

export const NewParty = () => {
  const { isAuthenticated } = useAppStore((state) => state)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const Desktop = isDesktop()

  if (!isAuthenticated) {
    return <LoginButton>Login</LoginButton>
  }

  if (Desktop) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Add New</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-4">
            <SheetTitle>Create New Party</SheetTitle>
            <SheetDescription>Create your new party</SheetDescription>
          </SheetHeader>
          <PartyForm setIsOpen={setIsOpen} />
        </SheetContent>
      </Sheet>
    )
  }
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
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
  const createOrUpdate = useMutation(api.parties.createOrUpdateParty)
  const { user } = useAppStore((state) => state)

  const [name, setName] = useState<string>('')
  const [raid, setRaid] = useState<Raid | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const partyID = generate_id()

    createOrUpdate({
      ownerId: user?.userId || '',
      partyId: partyID,
      name,
      raid: raid!,
      members: [],
      difficulty: 'Normal',
    })

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
