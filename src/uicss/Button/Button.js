import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({
  children,
  inverted,
  round,
  iconLeft,
  iconRight,
  onClick,
  small,
  large,
  secondary,
  iconHover,
  ...rest
}) => {

  /* Handle adding any necessary classes */
  let classes = []
  if (iconHover) classes.push("icon-hover");

  return (
    <button
      onClick={onClick}
      className={classes.length ? classes.join(" ") : ""}
      {...rest}
    >
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      <span>{children}</span>
      {iconRight && <FontAwesomeIcon icon={iconRight} />}
    </button>
  )
}
export default Button
