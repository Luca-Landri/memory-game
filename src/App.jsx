import { Link } from "react-router-dom";
import styled from "styled-components";
import cardImg from "./components/CardImgs";
import "./App.css";
import { motion } from "framer-motion";

const BrainImg = styled.img`
  width: 100px;
`

const Title = styled.h1`
  font-family: 'Fira Code', monospace;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const StartGame = styled.button`
  margin: 20px;
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
  background: none;
  padding: 6px 12px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  border: 4px solid #fff;

  :hover {
    background: #FAFFAF;
  }
`

const GameLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  :hover {
    color: black;
  }
`

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5
    }
  }
}

const CardImg = styled(motion.img)`
  width: 100px;
  height: 200px;
  border-radius: 50%;
  flex-basis: 10%;
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`


const App = () => {

  return (
    <PageContainer>
      <TitleContainer>
        <Title>Welcome to the memory game</Title>
        <BrainImg src="https://ouch-cdn2.icons8.com/CHhb3FTOvZJCefuu0C-zGGj7kIn73pLgaAW-uX1OU8k/rs:fit:1384:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODcy/L2EzYmIwMjliLTM1/OTktNDI4Mi04MzAy/LTg1MGY3MWQ3ZTUw/ZS5zdmc.png" alt="" />
      </TitleContainer>

      <StartGame>
        <GameLink whileHover={{scale: 1.1}} to="/game">Start Game</GameLink>
      </StartGame>

      <ImgContainer className="circle-container">
        {cardImg.map((card) => (
          <CardImg variants={buttonVariants} whileHover="hover" src={card.src} alt="" />
        ))}
      </ImgContainer>
    </PageContainer>
  );
}

export default App;