import styled from 'styled-components'
import { motion } from "framer-motion";

export const StyledMessage = styled(motion.div)`
  position: relative;
  overflow: hidden;

  &.message {
    margin-top: 1rem;
  }

  .message-content {
    padding: 2rem;
    display: flex;
    align-items: top;
  }

  .message-icon {
    margin-top: -0.7rem;
    margin-right: 2rem;
    font-size: 2.4rem;
  }

  .message-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    opacity: 0.1;
    transition: opacity .3s ease, transform .3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover .message-close {
    opacity: 1;
  }

  /* From Theme */
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};

  &.round {
    border-radius: ${props => props.borderRadius};
  }
`