import { isDesktop } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'
import { createLink, useRouterState } from '@tanstack/react-router'
import { ComponentProps, ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type MenuItemProps = ComponentProps<'a'> & {
  label: string
  children: ReactNode
}
export const MenuItem = ({ children, label, ...props }: MenuItemProps) => {
  const {
    location: { pathname },
  } = useRouterState()

  const isActive =
    pathname === props.href || pathname.startsWith(`${props.href}/`)

  const Desktop = isDesktop()

  return (
    <li className="w-full">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            {...props}
            aria-label={label}
            className={cn(
              'bg-loa-gray w-full p-4 flex flex-row items-center justify-center rounded-lg hover:bg-loa-orange transition-colors duration-200 hover:text-loa-black gap-2',
              isActive && 'bg-loa-orange text-loa-black',
            )}
          >
            {children}
          </a>
        </TooltipTrigger>
        <TooltipContent
          side={Desktop ? 'right' : 'top'}
          className="bg-loa-gray border-loa-orange"
        >
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </li>
  )
}

export const MenuLink = createLink(MenuItem)
