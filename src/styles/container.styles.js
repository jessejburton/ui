import styled from 'styled-components'

const spacing = {
  small: "1rem",
  medium: "2rem",
  large: "3rem"
}

export const Heading = styled.header`
  padding: ${spacing.medium} 0;

  h1 {
    color: ${props => props.theme.colors.primary};
  }
`

export const SmallSpace = styled.div`
  padding: ${spacing.small} 0;
`

export const MediumSpace = styled.div`
  padding: ${spacing.medium} 0;
`

export const LargeSpace = styled.div`
  padding: ${spacing.large} 0;
`

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
`