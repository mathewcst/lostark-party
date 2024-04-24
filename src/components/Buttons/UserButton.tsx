import {
  ClerkLoaded,
  ClerkLoading,
  UserButton as ClerkUser,
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react'
import { DiscordIcon } from '../icons/Discord'
import { UserIcon } from '../icons/User'

export const UserButton = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ClerkLoaded>
        <SignedIn>
          <ClerkUser
            appearance={{
              elements: {
                userButtonAvatarBox: 'h-11 w-11 bg-loa-orange',
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button
              name="Login with Discord"
              aria-label="Login with Discord"
              className="flex h-12 w-12 items-center justify-center rounded-md bg-discord transition-all duration-200 hover:bg-discord/80"
            >
              <DiscordIcon className="h-4 w-4" />
            </button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>

      <ClerkLoading>
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-500 animate-pulse">
          <UserIcon className="h-4 w-4" />
        </div>
      </ClerkLoading>
    </div>
  )
}
