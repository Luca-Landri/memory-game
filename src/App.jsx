import './App.css';
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  margin: 40px auto;
`;

const StartButton = styled.button`
  background: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid #fff;
  color: #fff;
  :hover {
    background: #c23866;
    color: #fff;
  }
`;

function App() {

  return (
    <Container>
      <StartButton>
        aoooo
      </StartButton>
    </Container>
  )
}

export default App
