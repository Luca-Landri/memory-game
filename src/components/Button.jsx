import styled from "styled-components";
import { motion } from "framer-motion";

const StartButton = styled(motion.button)`
  background: none;
  padding: 6px 12px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.7rem;
  cursor: pointer;
  border: 2px solid #fff;
  font-family: 'Fira Code', monospace;
  color: #fff;
  margin-top: 15px;
  :hover {
    background: #FAFFAF;
    color: black;
  }
`;

const ButtonTitle = styled.span`
  font-family: 'Fira Code', monospace;
  user-select: none;
`;


const Button = ({text, shuffle}) => {
    return(
    <StartButton onClick={shuffle} whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}>
        <ButtonTitle>{text}</ButtonTitle>
    </StartButton>
    )
}

export default Button;