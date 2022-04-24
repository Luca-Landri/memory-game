import styled from "styled-components";

const StartButton = styled.button`
  background: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid #fff;
  font-family: 'Fira Code', monospace;
  color: #fff;
  :hover {
    background: #c23866;
    color: #fff;
  }
`;


const Button = ({text, shuffle}) => {
    return(
    <StartButton onClick={shuffle}>
        {text}
    </StartButton>
    )
}

export default Button;