import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <StyledButton>

    </StyledButton>
  )
}

export default Button

export const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 0.5rem 1.5rem;
  transition: color .3s ease;
  position: relative;

  &:hover,
  &:focus,
  &.active {

  }

  &:focus {
    outline: none;
  }
`