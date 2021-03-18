import React, { useState } from 'react'

import { Heading, MediumSpace } from '../styles/container.styles'
import { PageWrapper } from '../styles/page.styles'
import { Message, Button } from '../ui'

const Messages = () => {

  const [message, setMessage] = useState(null)

  function showToast() {
    let random = Math.floor(Math.random() * 3);
    let types = [
      "success",
      "error",
      "warning",
      "info"
    ]
    let type = types[random]
    setMessage({
      type: type,
      title: type.toUpperCase(),
      text: "This message will show up at the bottom of the screen and then disappear after a few seconds."
    })
  }

  return (
    <PageWrapper>
      <Heading>
        <h1>Messages</h1>
      </Heading>
      <MediumSpace>
        <ul>
          <li>When using toast you need to specify a dismiss function that sets the message state to null otherwise subsequent alerts will not display.</li>
          <li>Put the following code at the bottom of your page for toast messages in order to make sure they show up on top of everything.</li>
        </ul>
        <pre>
          {`{message &&
            <Message
              toast
              autoDismiss={4000}
              dismiss={() => setMessage(null)}
              title={message.title}
              type={message.type}>
              {message.text}
            </Message>
          }`}
        </pre>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Toast</h2>
        </Heading>
        <Button onClick={showToast}>Show Toast</Button>
      </MediumSpace>

      <MediumSpace>
        <Heading>
          <h2>Standard</h2>
        </Heading>
        <Message>This is the default message.</Message>
        <Message type="success" title="SUCCESS!" dismiss={() => alert("Callback for dismissed alert")}>This is a success message.</Message>
        <Message type="warning">This is a warning message with the ability to dismiss.</Message>
        <Message type="error" title="This is a message title" autoDismiss={10000}>This is an error message. This message also has a title and will automatically dismiss after 10 seconds</Message>
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

      {message &&
        <Message
          toast
          autoDismiss={4000}
          dismiss={() => setMessage(null)}
          title={message.title}
          type={message.type}>
          {message.text}
        </Message>
      }
    </PageWrapper>
  )
}

export default Messages