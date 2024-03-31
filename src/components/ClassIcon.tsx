import { getClassIcon } from '@/lib/lostark/classes'

type ClassIconProps = {
  clss: string
  className?: string
}

export const ClassIcon = ({ clss, className }: ClassIconProps) => {
  const Icon = getClassIcon(clss)

  return <Icon className={className} />
}
