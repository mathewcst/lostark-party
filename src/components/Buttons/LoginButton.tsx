import { SignInButton } from '@clerk/clerk-react'
import { PropsWithChildren } from 'react'
import { Button } from '../ui/button'

export const LoginButton = ({ children }: PropsWithChildren) => {
  return (
    <SignInButton mode="modal">
      <Button variant="outline">{children}</Button>
    </SignInButton>
  )
}
