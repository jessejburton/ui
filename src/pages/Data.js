import React from 'react'

import { PageWrapper } from '../styles/page.styles'
import { Heading, MediumSpace } from '../styles/container.styles'
import { DotWave, DotPulse, DotWiggle } from '../ui'


const Data = () => {
  return (
    <PageWrapper>
      <Heading>
        <h1>Data</h1>
      </Heading>

      <MediumSpace>
        <Heading>
          <h2>Loaders</h2>
        </Heading>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center", marginRight: "2rem" }}>
            <h3>Dot Wave</h3>
            <DotWave />
          </div>
          <div style={{ textAlign: "center", marginRight: "2rem" }}>
            <h3>Dot Pulse</h3>
            <DotPulse />
          </div>
          <div style={{ textAlign: "center", marginRight: "2rem" }}>
            <h3>Dot Wiggle</h3>
            <DotWiggle />
          </div>
        </div>
      </MediumSpace>

    </PageWrapper >
  )
}

export default Data