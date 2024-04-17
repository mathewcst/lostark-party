import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

const Root = ({ children }: PropsWithChildren) => {
  return <section className={cn('p-8 text-white')}>{children}</section>
}

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h2 className={cn('uppercase text-white/50 text-xl font-medium')}>
      {children}
    </h2>
  )
}

const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full bg-loa-black/50 p-4">
      {children}
    </div>
  )
}

const Subtitle = ({ children }: PropsWithChildren) => {
  return <h3 className="uppercase text-xl font-light">{children}</h3>
}

export const Section = {
  Root,
  Title,
  Header,
  Subtitle,
}
