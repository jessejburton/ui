import styled from 'styled-components'

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
    margin-right: 1rem;
  }

  &:hover,
  &.active {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    font-weight: 600;
  }
`