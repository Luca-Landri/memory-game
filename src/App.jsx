import { Link } from "react-router-dom";
import styled from "styled-components";


const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/game">Start Game</Link>
    </div>
  );
}

export default App;