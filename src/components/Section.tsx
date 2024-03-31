import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

const Root = ({ children }: PropsWithChildren) => {
  return (
    <section className={cn('p-8 text-white container mx-auto max-w-screen-xl')}>
      {children}
    </section>
  )
}

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h2 className={cn('uppercase text-white/50 text-xl font-medium')}>
      {children}
    </h2>
  )
}

export const Section = {
  Root,
  Title,
}
