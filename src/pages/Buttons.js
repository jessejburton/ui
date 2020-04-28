import React from 'react'
import { PageWrapper } from '../styles/page.styles'
import { Heading, MediumSpace } from '../styles/container.styles'
import { Button } from '../components/ui/Button'
import { LinkButton } from '../components/ui/LinkButton'
import { ButtonGroup } from '../components/ui/ButtonGroup'
import Navigation from '../layout/Navigation'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const Buttons = () => {
  return (
    <PageWrapper>
      <Heading>
        <h1>Buttons</h1>
      </Heading>

      <MediumSpace>
        <Heading>
          <h2>Standard</h2>
        </Heading>
        <Button onClick={() => alert("hello")}>Button</Button>
        <Button iconLeft={faCalendarCheck}>With Icon</Button>
        <Button inverted>Button Inverted</Button>
        <Button inverted iconRight={faCalendarCheck}>Icon Inverted</Button>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Rounded</h2>
        </Heading>
        <Button round>Button</Button>
        <Button round iconRight={faCalendarCheck}> With Icon</Button>
        <Button round inverted>Button Inverted</Button>
        <Button round inverted iconLeft={faCalendarCheck}>Icon Inverted</Button>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Button Group</h2>
        </Heading>
        <ButtonGroup>
          <Button inverted>Button</Button>
          <Button iconRight={faCalendarCheck}> With Icon</Button>
          <Button inverted>Another Button</Button>
          <Button inverted iconLeft={faCalendarCheck}>Icon Left</Button>
        </ButtonGroup>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Button Group Rounded</h2>
        </Heading>
        <ButtonGroup round>
          <Button inverted>Button</Button>
          <Button iconRight={faCalendarCheck}> With Icon</Button>
          <Button inverted>Another Button</Button>
          <Button iconLeft={faCalendarCheck}>Icon Left</Button>
        </ButtonGroup>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Link Buttons</h2>
        </Heading>
        <LinkButton>Link</LinkButton>
        <LinkButton iconLeft={faCalendarCheck}>With Icon</LinkButton>
        <LinkButton active>Active</LinkButton>
        <LinkButton active iconRight={faCalendarCheck}>Active With Icon</LinkButton>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Link Buttons Rounded</h2>
        </Heading>
        <LinkButton round>Link</LinkButton>
        <LinkButton round iconLeft={faCalendarCheck}>With Icon</LinkButton>
        <LinkButton round active>Active</LinkButton>
        <LinkButton round active iconRight={faCalendarCheck}>Active With Icon</LinkButton>
      </MediumSpace>
    </PageWrapper>
  )
}

export default Buttons