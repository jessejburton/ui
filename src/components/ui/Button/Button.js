import React, { useContext } from 'react'
import { StyledButton } from './styles'
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ children, inverted, round, iconLeft, iconRight, onClick }) => {

  /* Theme Context */
  const themeContext = useContext(ThemeContext);

  /* Handle adding any necessary classes */
  let classes = []
  if (inverted) classes.push("inverted");
  if (round | themeContext.buttons.defaultRound) classes.push("round");

  return (
    <StyledButton onClick={onClick} className={classes.length ? classes.join(" ") : ""}>
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      <span>{children}</span>
      {iconRight && <FontAwesomeIcon icon={iconRight} />}
    </StyledButton>
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

