import { Avatar, Button, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'

export const NavbarUI = () => {
  return (
    <Navbar isBordered >
      <Avatar 
        isBordered
        src="/img/banner.png"
        className="w-10 h-10 text-large"
      />
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Pokemòn
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/favorites" aria-current="page">
            Favoritos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
  </Navbar>
  )
}
