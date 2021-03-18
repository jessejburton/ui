import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { Sidebar } from './Sidebar'
import Navigation from './Navigation'
import { ContentWrapper } from '../styles/container.styles'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper style={{ display: "flex" }}>
        <Sidebar>
          <Navigation />
        </Sidebar>
        <main>{children}</main>
      </ContentWrapper>
      <Footer />
    </>
  )
}

export default Layout
