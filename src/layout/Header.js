import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import { maxContentWidth } from '../components/theme/sizes.js'

const Header = () => {

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

  return (
    <header style={{ height: "10rem" }}>
      <StyledContent>
        <h1>UI</h1>
        <Navigation />
      </StyledContent>
    </header>
  )
}

export default Header

const StyledContent = styled.div`
  max-width: ${maxContentWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`