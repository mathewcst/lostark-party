import { changelog } from '@/routes/changelog/-changelog'
import { Link } from '@tanstack/react-router'
import { GitHubButton } from './Buttons/GitHub'
import { KofiButton } from './Buttons/KoFi'
import { UserButton } from './Buttons/UserButton'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const Sidebar = () => {
  return (
    <aside className="sm:flex flex-col bg-loa-black h-screen p-4 text-white items-center justify-center transition-all duration-200 hidden">
      <Logo />

      <Menu />

      <div className="flex-auto" />

      <div className="flex flex-col items-center justify-center gap-4">
        <KofiButton />

        <GitHubButton />

        <UserButton />

        <Link to="/changelog">
          {/* Here we get index 0 cause the array is sorted */}
          <p className="text-sm text-white/50">{changelog[0].version}</p>
        </Link>
      </div>
    </aside>
  )
}
