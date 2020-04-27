import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledButton = styled.button`
  border: none;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  font-size: 1.6rem;
  height: 4.5rem;
  font-weight: 400;
  text-transform: uppercase;
  outline: none;

  /* Give some space for an icon */
  svg {
    margin: 0 0.5rem;
  }

  /* Give space if more than one button are in a row */
  &+button {
    margin-left: 1rem;
  }

  /* From Theme */
  color: ${props => props.theme.buttons.buttonTextColor};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    color: ${props => props.theme.buttons.buttonTextColor};
  }

  &.inverted {
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
  }

  &.inverted:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    border-color: ${props => props.theme.colors.primaryDark};
    color: ${props => props.theme.buttons.buttonTextColor};
  }

  &.round {
    border-radius: ${props => props.theme.buttons.buttonBorderRadius};
  }
`

export const StyledLinkButton = styled.button`
  border: none;
  background: none;
  transition: color 0.3s ease;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  outline: none;

  /* Give some space for an icon */
  svg {
    margin: 0 0.5rem;
  }

  &:hover,
  &.active {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    font-weight: 600;
  }
`

export const StyledNavLink = styled(NavLink)`
  border: none;
  background: none;
  transition: color 0.3s ease;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  outline: none;
  text-decoration: none;

  /* Give some space for an icon */
  svg {
    margin: 0 0.5rem;
  }

  &:hover,
  &.active {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    font-weight: 600;
  }
`