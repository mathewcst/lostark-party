import { Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

type BackButtonProps = {
  backTo: string
}

export const BackButton = ({ backTo }: BackButtonProps) => {
  return (
    <Link
      to={backTo}
      className="flex flex-row items-center justify-start gap-2 uppercase"
    >
      <ChevronLeft size={18} /> Back
    </Link>
  )
}
