import { APP_ASSETS_URL } from '@/config/constants'
import { Link } from '@tanstack/react-router'

export const Logo = () => {
  return (
    <Link href="/">
      <img
        src={`${APP_ASSETS_URL}/logo_small.webp`}
        width={512}
        height={512}
        alt="LostArk Party"
        className="w-12 object-contain my-4"
      />
    </Link>
  )
}
