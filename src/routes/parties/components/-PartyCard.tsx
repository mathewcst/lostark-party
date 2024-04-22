import { RaidsType } from '@/lib/lostark/raids'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

type PartyCardProps = {
  raid: RaidsType
}

export const PartyCard = ({ raid }: PartyCardProps) => {
  return (
    <Link href="/">
      <div className="w-full min-h-24 relative">
        <span
          className={cn(
            'bg-loa-party-normal px-2 py-1 rounded-md text-sm uppercase absolute -top-2 -right-2 z-10',
            { 'bg-loa-party-hard': raid.difficulties[0] === 'Hard' },
            { 'bg-loa-party-hell': raid.difficulties[0] === 'Hell' },
          )}
        >
          {raid.difficulties[0]}
        </span>

        <div className="w-full h-32 overflow-hidden flex flex-col items-start justify-center relative bg-loa-black rounded-lg">
          <img
            src={raid.banner}
            alt={raid.name}
            className="object-cover object-[65%_0] h-full"
          />
          <div className=" absolute inset-y-0 left-0 my-auto flex flex-col items-start justify-center px-8">
            <div className="flex flex-row gap-4 items-center justify-center">
              <h2 className="text-2xl font-bold">PT de Segunda</h2>
            </div>
            <h3 className="my-2">{raid.name}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
