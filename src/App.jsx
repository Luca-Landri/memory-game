import { Link } from "react-router-dom";
import styled from "styled-components";
import cardImg from "./components/CardImgs";
import "./App.css";
import { motion } from "framer-motion";

const BrainImg = styled.img`
  width: 100px;

  @media (max-width: 600px) {
    width: 75px;
  }
`

const Title = styled.h1`
  font-family: 'Fira Code', monospace;

  @media (max-width: 600px) {
    font-size: 2rem;
    width: 80%;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const StartGame = styled(motion.button)`
  background: none;
  padding: 6px 12px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.7rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #fff;
  font-family: 'Fira Code', monospace;
  color: #fff;
  margin-top: 15px;
  :hover {
    background: #FAFFAF;
  }
`

const GameLink = styled(motion(Link))`
  text-decoration: none;
  color: #fff;
  user-select: none;
  :hover {
    color: black;
  }

`;

const buttonVariants = {
  hover: {
    y: 30,
    transition: {
      duration: 0.8,
      yoyo: Infinity,
    }
  }
}

const CardImg = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  flex-basis: 10%;
  
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
  
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 20%;
`

const OnlyButton = styled(motion.button)`
  background: none;
  padding: 6px 12px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.7rem;
  cursor: pointer;
  border: 4px solid #fff;
  font-family: 'Fira Code', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 600px) {
    width: 65%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`

const OfLogo = styled.img`
  width: 50px;
`

const OfLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`


const App = () => {

  return (
    <PageContainer>
      <TitleContainer>
        <Title>Welcome to the memory game</Title>
        <BrainImg src="https://ouch-cdn2.icons8.com/CHhb3FTOvZJCefuu0C-zGGj7kIn73pLgaAW-uX1OU8k/rs:fit:1384:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODcy/L2EzYmIwMjliLTM1/OTktNDI4Mi04MzAy/LTg1MGY3MWQ3ZTUw/ZS5zdmc.png" alt="" />
      </TitleContainer>

      <StartGame whileHover={{scale: 1.1}}>
        <GameLink to="/game">Start Game</GameLink>
      </StartGame>

      <ImgContainer className="circle-container">
        {cardImg.map((card) => (
          <CardImg variants={buttonVariants} animate="hover" src={card.src} alt="" />
        ))}
      </ImgContainer>
      <Footer>
        <OnlyButton whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
          <OfLogo src="https://seeklogo.com/images/O/onlyfans-logo-C7DEFE44F5-seeklogo.com.png"/>
          <OfLink to="/OfSac">OnlyFans Sacchetti</OfLink>
        </OnlyButton>     
      </Footer>
    </PageContainer>
  );
}

export default App;