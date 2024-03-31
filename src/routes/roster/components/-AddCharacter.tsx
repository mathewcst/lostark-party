import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'
import { useRosterStore } from '@/store/roster'
import { ComponentProps, useState } from 'react'
import { ClassPicker } from './-ClassPicker'

export const AddCharacter = () => {
  const [open, setOpen] = useState<boolean>(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add New</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-screen-md">
          <DialogHeader>
            <DialogTitle className="text-white">Add New character</DialogTitle>
          </DialogHeader>
          <ProfileForm setIsOpen={setOpen} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost">Add New</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-white">Add New character</DrawerTitle>
        </DrawerHeader>
        <ProfileForm className="px-4" setIsOpen={setOpen} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

type ProfileFormProps = ComponentProps<'form'> & {
  setIsOpen: (open: boolean) => void
}

function ProfileForm({ className, setIsOpen }: ProfileFormProps) {
  const { addCharacter } = useRosterStore((state) => state)

  const [name, setName] = useState<string>('')
  const [clss, setClss] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addCharacter(name, clss)
    setIsOpen(false)
  }

  return (
    <form className={cn('grid grid-cols-2 items-start gap-4', className)}>
      <div className="grid gap-2 my-2">
        <Label htmlFor="character-name">Name</Label>
        <Input
          type="text"
          name="character-name"
          id="character-name"
          placeholder="Mycharacter"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="grid gap-2 my-2">
        <ClassPicker setClss={setClss} />
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
