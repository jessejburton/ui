import React from 'react'
import { PageWrapper } from '../styles/page.styles'
import { Heading, SmallSpace, MediumSpace } from '../styles/container.styles'
import { LinkButton, ButtonGroup, ConfirmButton } from '../ui'
import { Button } from '../uicss'
import { faCalendarCheck, faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

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
          <h2>Sizes</h2>
        </Heading>
        <SmallSpace>
          <Button small onClick={() => alert("hello")}>Small</Button>
          <Button iconLeft={faCalendarCheck}>Regular</Button>
          <Button large>Large</Button>
        </SmallSpace>
        <SmallSpace>
          <Button small round inverted iconRight={faCalendarCheck}>Small</Button>
          <Button round inverted>Regular</Button>
          <Button large round inverted>Large</Button>
        </SmallSpace>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Button Group</h2>
        </Heading>
        <ButtonGroup>
          <Button inverted>Button</Button>
          <Button iconRight={faCalendarCheck}> With Icon</Button>
          <Button inverted>Another Button</Button>
          <Button iconHover inverted iconLeft={faCalendarCheck}>Icon Left</Button>
        </ButtonGroup>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Button Group Rounded</h2>
        </Heading>
        <ButtonGroup round>
          <Button inverted>Button</Button>
          <Button iconHover iconRight={faCaretRight}> With Icon</Button>
          <Button inverted>Another Button</Button>
          <Button iconHover iconLeft={faCaretLeft}>Icon Left</Button>
        </ButtonGroup>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Confirm Button</h2>
        </Heading>
        <ConfirmButton onConfirm={() => alert('You said yes!')}>Click Me</ConfirmButton>
        <ConfirmButton small inverted onConfirm={() => alert('You said yes!')}>Click Me</ConfirmButton>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Confirm Button Round</h2>
        </Heading>
        <ConfirmButton round onConfirm={() => alert('You said yes!')}>Click Me</ConfirmButton>
        <ConfirmButton large round inverted onConfirm={() => alert('You said yes!')}>Click Me</ConfirmButton>
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
    </PageWrapper >
  )
}

export default Buttons