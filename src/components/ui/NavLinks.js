import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { primary } from '../theme/theme'

export const NavLinks = ({ links }) => {
  console.log(window.location.pathname);
  return (
    <StyledNav>
      <NavLink activeClassName="active" exact to="/">UI</NavLink>
      {links.map(link => (
        <NavLink activeClassName="active" to={link.href}>{link.text}</NavLink>
      ))}
    </StyledNav>
  )
}

export default NavLinks

const StyledNav = styled.nav`
  display: flex;

  a {
    text-decoration: none;
    margin: .5rem 1rem;
    transition: color .3s ease;
    color: inherit;

    &:hover,
    &.active,
    &:focus {
      outline: none;
      color: ${primary};
    }

    &.active {
      font-weight: 600;
      border-bottom: 3px solid ${primary};
    }
  }
`