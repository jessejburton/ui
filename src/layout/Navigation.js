import React from 'react'
import NavButton from '../components/ui/Buttons/NavButton'

const links = [
  {
    href: "/colors",
    text: "Colors"
  },
  {
    href: "/inputs",
    text: "Inputs"
  },
  {
    href: "/buttons",
    text: "Buttons"
  },
  {
    href: "/messages",
    text: "Messages"
  }
]

const Navigation = () => {
  return (
    <nav>
      <NavButton exact to="/">UI</NavButton>
      {links.map((link, index) => (
        <NavButton key={index} to={link.href}>{link.text}</NavButton>
      ))}
    </nav>
  )
}

export default Navigation

