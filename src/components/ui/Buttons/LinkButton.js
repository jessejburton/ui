import React from 'react'
import { StyledLinkButton } from './button.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkButton = ({ children, icon, onClick, active }) => {

  /* Handle adding any necessary classes */
  let classes = []
  if (active) classes.push("active");

  return (
    <StyledLinkButton
      onClick={onClick}
      className={classes.length ? classes.join(" ") : ""}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{children}</span>
    </StyledLinkButton>
  )
}

export default LinkButton

/* Default Props */
StyledLinkButton.defaultProps = {
  theme: {
    colors: {
      primary: "#5A67D8",
    }
  }
}

