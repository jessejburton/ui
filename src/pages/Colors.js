import React, { useState } from 'react'
import ColorCard from '../components/ui/ColorCard'
import { colors, black, white } from '../components/theme/colors'
import { MediumSpace, Heading } from '../styles/container.styles'
import { LinkButton } from '../styles/button.styles'
import styled from 'styled-components'

const Colors = () => {

  const [rgb, setRgb] = useState(false);

  return (
    <div>
      <h1>Colors</h1>
      <MediumSpace>
        <LinkButton className={rgb ? '' : 'active'} onClick={() => setRgb(false)}>HEX</LinkButton>
        <LinkButton className={rgb ? 'active' : ''} onClick={() => setRgb(true)}>RGBA</LinkButton>
      </MediumSpace>
      <MediumSpace>
        <Heading>
          <h2>Standards</h2>
        </Heading>
        <StyledGrid>
          <ColorCard color={black} rgb={rgb}></ColorCard>
          <ColorCard color={white} rgb={rgb}></ColorCard>
        </StyledGrid>
      </MediumSpace>
      {colors.map((color, index) => (
        <MediumSpace key={index}>
          <Heading>
            <h2>{color.title}</h2>
          </Heading>
          <StyledGrid>
            {color.colors.map(color => (
              <ColorCard key={color} color={color} rgb={rgb}></ColorCard>
            ))}
          </StyledGrid>
        </MediumSpace>
      ))}
    </div>
  )
}

export default Colors

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 1rem;
`