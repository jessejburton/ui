import React, { useState } from 'react'
import styled from 'styled-components'

import { colors, black, white } from '../themes/colors'
import { MediumSpace, Heading } from '../styles/container.styles'
import { PageWrapper } from '../styles/page.styles'
import { LinkButton, ColorCard } from '../ui'

const Colors = () => {

  const [rgb, setRgb] = useState(false);

  return (
    <PageWrapper>
      <Heading>
        <h1>Colors</h1>
      </Heading>
      <MediumSpace>
        <LinkButton active={!rgb} onClick={() => setRgb(false)}>HEX</LinkButton>
        <LinkButton active={rgb} onClick={() => setRgb(true)}>RGB</LinkButton>
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
    </PageWrapper>
  )
}

export default Colors

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 1rem;
`