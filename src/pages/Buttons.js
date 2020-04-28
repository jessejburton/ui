import React from 'react'
import { PageWrapper } from '../styles/page.styles'
import { Heading, MediumSpace } from '../styles/container.styles'
import { Button } from '../components/ui/Button'
import { LinkButton } from '../components/ui/LinkButton'
import Navigation from '../layout/Navigation'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const Buttons = () => {
  return (
    <PageWrapper>
      <Heading>
        <h1>Buttons</h1>
      </Heading>
      <Heading>
        <h2>Standard</h2>
      </Heading>
      <MediumSpace>
        <Button onClick={() => alert("hello")}>Button</Button>
        <Button iconLeft={faCalendarCheck}>With Icon</Button>
        <Button inverted>Button Inverted</Button>
        <Button inverted iconRight={faCalendarCheck}>Icon Inverted</Button>
      </MediumSpace>
      <Heading>
        <h2>Rounded</h2>
      </Heading>
      <MediumSpace>
        <Button round>Button</Button>
        <Button round iconRight={faCalendarCheck}> With Icon</Button>
        <Button round inverted>Button Inverted</Button>
        <Button round inverted iconLeft={faCalendarCheck}>Icon Inverted</Button>
      </MediumSpace>
      <Heading>
        <h2>Link Buttons</h2>
      </Heading>
      <MediumSpace>
        <LinkButton>Link</LinkButton>
        <LinkButton icon={faCalendarCheck}>With Icon</LinkButton>
        <LinkButton active>Active</LinkButton>
        <LinkButton active icon={faCalendarCheck}>Active With Icon</LinkButton>
      </MediumSpace>
      <Heading>
        <h2>Navigation</h2>
      </Heading>
      <MediumSpace>
        <Navigation />
      </MediumSpace>
    </PageWrapper>
  )
}

export default Buttons