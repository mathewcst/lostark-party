import { PropsWithChildren } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type TooltipButtonProps = PropsWithChildren & {
  label: string
  className?: string
}

export const TooltipButton = ({
  children,
  label,
  className,
}: TooltipButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipContent side="right" className={className}>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}
