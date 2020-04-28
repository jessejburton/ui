import React, { useContext, useState } from 'react'
import { StyledMessage } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from 'styled-components';
import { AnimatePresence } from 'framer-motion'

const variants = {
  show: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0, marginTop: 0 }
}

const Message = ({ children, round, dismiss, type = "default", title, ...rest }) => {

  const [isOpen, setIsOpen] = useState(true);

  /* Theme Context */
  const themeContext = useContext(ThemeContext);

  /* Get the theme options */
  let icon = themeContext.message[type].icon;
  let props = Object.assign(themeContext.message[type], themeContext.message["base"])

  /* Handle adding any necessary classes */
  let classes = []
  classes.push("message")
  classes.push(type)
  if (round || props.defaultRound) classes.push("round");

  /* Handle close */
  function handleClose() {
    setIsOpen(false);
    if (dismiss instanceof Function) {
      dismiss();
    }
  }

  return (
    <AnimatePresence>
      {isOpen &&
        <StyledMessage
          variants={variants}
          initial={{ height: 0, opacity: 0 }}
          animate="show"
          exit="exit"
          className={classes.length ? classes.join(" ") : ""}
          type={type}
          {...props}>
          <div className="message-content">
            {dismiss &&
              <button className="message-close" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            }
            <div className="message-icon"><FontAwesomeIcon icon={icon} /></div>
            <div className="message-text">
              {title && <h5>{title}</h5>}
              <p>{children}</p>
            </div>
          </div>
        </StyledMessage>
      }
    </AnimatePresence>
  )
}

export default Message

/* Default Props */
StyledMessage.defaultProps = {
  borderRadius: "5px",
  color: "#2A4365",
  backgroundColor: "#BEE3F8",
  borderColor: "##90CDF4",
  icon: faInfoCircle,
  type: "default"
}

