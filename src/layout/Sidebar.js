import React from 'react'
import styled from 'styled-components'

export const Sidebar = ({ children, rest }) => {
  return (
    <StyledSidebar {...rest}>
      {children}
    </StyledSidebar>
  )
}

const StyledSidebar = styled.aside`
  width: 250px;

  nav {
    display: flex;
    flex-direction: column;
  }
`
