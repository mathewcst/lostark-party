import { ClassIcon } from '@/components/ClassIcon'
import { EllipsisVerticalIcon } from '@/components/icons/EllipsisVertical'
import { Button } from '@/components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Character } from '@/types'
import { useState } from 'react'

type CharacterItemProps = {
  character: Character
}

export const CharacterItem = ({ character }: CharacterItemProps) => {
  const [editOpen, setEditOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-row items-center justify-start bg-loa-black p-6 rounded-lg gap-4 h-24">
      <div className="flex flex-col items-center justify-center gap-1">
        <ClassIcon clss={character.class} className="w-8 h-8" />
        <span className="text-sm text-loa-orange">1620</span>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-sm ">Matheus</p>
        <p className="text-lg">{character.name} </p>
      </div>
      <div className="flex-auto"></div>
      <Menubar className="bg-transparent border-0 w-8">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer p-1">
            <EllipsisVerticalIcon />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              className="cursor-pointer"
              onClick={() => setEditOpen(true)}
            >
              Edit
            </MenubarItem>
            <MenubarItem className="cursor-pointer text-red-500 dark:hover:text-red-500 dark:hover:bg-red-200/20">
              Delete
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Sheet open={editOpen} onOpenChange={setEditOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Character</SheetTitle>
            <SheetDescription>
              Make changes to your character. Click save when you're done.
            </SheetDescription>
          </SheetHeader>

          <div className="py-4">
            <p>{character.name}</p>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
