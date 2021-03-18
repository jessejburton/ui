import React from 'react'
import { Link } from 'react-router-dom'

import { Heading, MediumSpace } from '../styles/container.styles'
import { PageWrapper } from '../styles/page.styles'

const Other = () => {
  return (
    <PageWrapper>
      <Heading>
        <h1>Other Elements</h1>
      </Heading>
      <MediumSpace>
        <ul>
          <Link to="/panels">Panels</Link>
          <Link to="/colors">Colors</Link>
        </ul>
      </MediumSpace>
    </PageWrapper>
  )
}

export default Other