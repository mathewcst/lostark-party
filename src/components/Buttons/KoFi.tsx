import { KofiIcon } from '../icons/Kofi'
import { TooltipButton } from './TooltipButton'

export const KofiButton = () => {
  return (
    <TooltipButton label="Support on Kofi" className="border-kofi">
      <a
        href="https://ko-fi.com/mathewcst"
        target="_blank"
        aria-label="Support on Ko-fi"
        className="bg-loa-gray w-full p-4 flex flex-row items-center justify-center rounded-lg hover:bg-kofi transition-colors duration-200 hover:text-loa-black gap-2"
      >
        <KofiIcon className="h-5 w-5" />
      </a>
    </TooltipButton>
  )
}
