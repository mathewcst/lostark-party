import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type PropsWithClassname = PropsWithChildren & {
  className?: string
}

const Root = ({ children, className }: PropsWithClassname) => {
  return (
    <section className={cn('p-2 sm:p-8 text-white', className)}>
      {children}
    </section>
  )
}

const Title = ({ children, className }: PropsWithClassname) => {
  return (
    <h2
      className={cn('uppercase text-white/50 text-xl font-medium', className)}
    >
      {children}
    </h2>
  )
}

const Header = ({ children, className }: PropsWithClassname) => {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row items-center justify-between w-full bg-loa-black/50 p-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

const Subtitle = ({ children, className }: PropsWithClassname) => {
  return (
    <h3 className={cn('uppercase text-xl font-light', className)}>
      {children}
    </h3>
  )
}

export const Section = {
  Root,
  Title,
  Header,
  Subtitle,
}
