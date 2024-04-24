import { GitHubButton } from './Buttons/GitHub'
import { KofiButton } from './Buttons/KoFi'
import { UserButton } from './Buttons/UserButton'
import { Logo } from './Logo'

export const MobileHeader = () => {
  return (
    <header className="flex flex-row items-center justify-between w-full px-4 bg-loa-black sticky top-0 z-20">
      <Logo />

      <div className="flex-auto"></div>

      <div className="flex flex-row items-center justify-center gap-4">
        <GitHubButton />

        <KofiButton />

        <UserButton />
      </div>
    </header>
  )
}
