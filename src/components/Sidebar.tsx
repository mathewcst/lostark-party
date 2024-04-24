import { APP_ASSETS_URL } from '@/config/constants'
import { changelog } from '@/routes/changelog/-changelog'
import { Link } from '@tanstack/react-router'
import { PropsWithChildren } from 'react'
import { Menu } from './Menu'
import { UserButton } from './UserButton'
import { GithubIcon } from './icons/Github'
import { KofiIcon } from './icons/Kofi'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export const Sidebar = () => {
  return (
    <aside className="sm:flex flex-col bg-loa-black h-screen p-4 text-white items-center justify-center transition-all duration-200">
      <img
        src={`${APP_ASSETS_URL}/logo_small.webp`}
        width={512}
        height={512}
        alt="LostArk Party"
        className="w-12 object-contain my-4"
      />

      <Menu />

      <div className="flex-auto" />

      <div className="flex flex-col items-center justify-center gap-4">
        <TooltipItem label="Support on Kofi" className="border-kofi">
          <a
            href="https://ko-fi.com/mathewcst"
            target="_blank"
            aria-label="Support on Ko-fi"
            className="bg-loa-gray w-full p-4 flex flex-row items-center justify-center rounded-lg hover:bg-kofi transition-colors duration-200 hover:text-loa-black gap-2"
          >
            <KofiIcon className="h-5 w-5" />
          </a>
        </TooltipItem>

        <TooltipItem label="Github Repo" className="border-loa-orange">
          <a
            href="https://github.com/mathewcst/lostark-party"
            target="_blank"
            aria-label="Github repo"
            className="bg-loa-gray w-full p-4 flex flex-row items-center justify-center rounded-lg hover:bg-loa-orange transition-colors duration-200 hover:text-loa-black gap-2"
          >
            <GithubIcon className="h-5 w-5 fill-current" />
          </a>
        </TooltipItem>

        <UserButton />

        <Link to="/changelog">
          {/* Here we get index 0 cause the array is sorted */}
          <p className="text-sm text-white/50">{changelog[0].version}</p>
        </Link>
      </div>
    </aside>
  )
}

type TooltipItemProps = PropsWithChildren & {
  label: string
  className?: string
}

const TooltipItem = ({ children, label, className }: TooltipItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipContent side="right" className={className}>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}
