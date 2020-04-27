import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ContentWrapper } from '../styles/container.styles'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </>
  )
}

export default Layout
