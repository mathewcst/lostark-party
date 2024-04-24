import { PropsWithChildren } from 'react'

export const EmptyState = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-8 bg-loa-black/20 text-center w-full">
      <div className="uppercase font-light">{children}</div>
    </div>
  )
}
