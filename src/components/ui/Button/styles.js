import styled from 'styled-components'

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
  span+svg,
  svg+span {
    margin-left: 1rem;
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