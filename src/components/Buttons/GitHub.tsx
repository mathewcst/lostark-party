import { GithubIcon } from '../icons/Github'
import { TooltipButton } from './TooltipButton'

export const GitHubButton = () => {
  return (
    <TooltipButton label="Github Repo" className="border-loa-orange">
      <a
        href="https://github.com/mathewcst/lostark-party"
        target="_blank"
        aria-label="Github repo"
        className="bg-loa-gray w-full p-4 flex flex-row items-center justify-center rounded-lg hover:bg-loa-orange transition-colors duration-200 hover:text-loa-black gap-2"
      >
        <GithubIcon className="h-5 w-5 fill-current" />
      </a>
    </TooltipButton>
  )
}
