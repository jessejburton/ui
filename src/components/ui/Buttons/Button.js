import React from 'react'
import { StyledButton } from './button.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ children, inverted, round, icon, onClick }) => {

  /* Handle adding any necessary classes */
  let classes = []
  if (inverted) classes.push("inverted");
  if (round) classes.push("round");

  return (
    <StyledButton onClick={onClick} className={classes.length ? classes.join(" ") : ""}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{children}</span>
    </StyledButton >
  )
}

export default Button

/* Default Props */
StyledButton.defaultProps = {
  theme: {
    colors: {
      primary: "#5A67D8",
      primaryDark: "#434190"
    },
    buttons: {
      buttonTextColor: "#FFFFFF",
      buttonBorderRadius: "12px",
    }
  }
}

