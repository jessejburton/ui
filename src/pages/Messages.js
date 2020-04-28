import React from 'react'
import { Heading, MediumSpace } from '../styles/container.styles'
import { PageWrapper } from '../styles/page.styles'
import { Message } from '../components/ui/Message'

const Messages = () => {
  return (
    <PageWrapper>
      <Heading>
        <h1>Messages</h1>
      </Heading>

      <MediumSpace>
        <Heading>
          <h2>Standard</h2>
        </Heading>
        <Message dismiss={() => alert("Callback for message dismissed")}>This is the default message.</Message>
        <Message type="success" title="SUCCESS!">This is a success message.</Message>
        <Message type="warning" dismiss={() => alert("Callback for message dismissed")}>This is a warning message with the ability to dismiss.</Message>
        <Message type="error" title="This is a message title">This is an error message. This message also has a title</Message>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Round</h2>
        </Heading>
        <Message round>This is the default message.</Message>
        <Message round type="success" title="SUCCESS!" dismiss>This is a success message with the ability to dismiss, no callback function.</Message>
        <Message round type="warning">This is a warning message.</Message>
        <Message round type="error" title="This is a message title">This is an error message. This message also has a title</Message>
      </MediumSpace>
    </PageWrapper>
  )
}

export default Messages