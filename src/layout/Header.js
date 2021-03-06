import React, { useContext } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import { ThemeContext } from 'styled-components';

const Header = () => {

  /* Theme Context */
  const themeContext = useContext(ThemeContext);

  return (
    <header style={{ height: "10rem" }} theme={themeContext}>
      <StyledContent>
        <h1>UI <span>by BURTON<strong>MEDIA</strong></span></h1>
      </StyledContent>
    </header>
  )
}

export default Header

const StyledContent = styled.div`
  max-width: ${props => props.theme.sizes.maxContentWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  h1 {
    color: ${props => props.theme.colors.primary};

    span {
      font-size: 1.8rem;
      font-weight: 300;

      strong {
        font-weight: 900;
      }
    }
  }
`