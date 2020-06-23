import React from 'react'

import NavButton from '../ui/NavButton/NavButton'

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
  },
  {
    href: "/modals",
    text: "Modals"
  },
  {
    href: "/data",
    text: "Data"
  },
]

const Navigation = () => {
  return (
    <nav>
      {links.map((link, index) => (
        <NavButton key={index} to={link.href}>{link.text}</NavButton>
      ))}
    </nav>
  )
}

export default Navigation

