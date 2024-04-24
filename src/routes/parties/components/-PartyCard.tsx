import { RaidsType } from '@/lib/lostark/raids'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

type PartyCardProps = {
  raid: RaidsType
  done?: boolean
}

export const PartyCard = ({ raid, done }: PartyCardProps) => {
  return (
    <Link href="/">
      <div
        className={cn('w-full min-h-24 relative', {
          'opacity-30 ': done,
        })}
      >
        {done ? (
          <span
            className={cn(
              'bg-green-500 px-2 py-1 rounded-md text-sm uppercase absolute -top-2 -right-2 z-10',
            )}
          >
            done
          </span>
        ) : (
          <span
            className={cn(
              'bg-loa-party-normal px-2 py-1 rounded-md text-sm uppercase absolute -top-2 -right-2 z-10',
              { 'bg-loa-party-hard': raid.difficulties[0] === 'Hard' },
              { 'bg-loa-party-hell': raid.difficulties[0] === 'Hell' },
            )}
          >
            {raid.difficulties[0]}
          </span>
        )}

        <div className="w-full h-32 overflow-hidden flex flex-col items-start justify-center relative bg-loa-black rounded-tl-lg rounded-tr-lg">
          <img
            src={raid.banner}
            alt={raid.name}
            className="object-cover object-[65%_0] h-full"
            width={900}
            height={120}
            sizes="(max-width: 900px) 100vw, 900px"
          />
          <div className=" absolute inset-y-0 left-0 my-auto flex flex-col items-start justify-center px-8">
            <div className="flex flex-row gap-4 items-center justify-center">
              <h2 className="text-2xl font-bold">Juntos</h2>
            </div>
            <h3 className="my-2">{raid.name}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
