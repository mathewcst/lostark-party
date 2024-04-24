import { HomeIcon } from '../icons/Home'
import { StackIcon } from '../icons/Stack'
import { UserGroupIcon } from '../icons/UserGroup'
import { UsersIcon } from '../icons/Users'
import { MenuLink } from './MenuItem'

export const Menu = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-row sm:flex-col items-center justify-evenly sm:justify-center gap-4">
        <MenuLink to="/" label="Home">
          <HomeIcon />
        </MenuLink>

        <MenuLink to="/parties" label="Parties">
          <UserGroupIcon />
        </MenuLink>

        <MenuLink to="/roster" label="My Roster">
          <StackIcon />
        </MenuLink>

        <MenuLink to="/friends" label="Friends">
          <UsersIcon />
        </MenuLink>
      </ul>
    </nav>
  )
}
