import React from 'react'
import styled from 'styled-components'

export const PanelSlider = ({
  children,
  ...rest
}) => {
  return (
    <StyledPanel {...rest}>
      {children}
    </StyledPanel>
  )
}

const StyledPanel = styled.section`
  min-height: 100vh;
  width: 100vw;
`
