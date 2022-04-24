import './App.css';
import styled from "styled-components";
import React, { useState } from 'react';

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
  font-family: 'Fira Code', monospace;
  color: #fff;
  :hover {
    background: #c23866;
    color: #fff;
  }
`;

const cardImg = [
  {
    src: "https://cdn.discordapp.com/attachments/707531038360076288/928419003125350430/unknown.png"
  },
  {
    src: "https://cdn.discordapp.com/attachments/707531038360076288/891783318754955334/Immagine_2021-09-26_222703.png"
  },
  {
    src: "https://cdn.discordapp.com/attachments/707531038360076288/830857317464539175/sacchetti.png"
  },
  {
    src: "https://cdn.discordapp.com/attachments/707531038360076288/818394908125167686/unknown.png"
  },
  {
    src: "https://cdn.discordapp.com/attachments/707531038360076288/806793672233320458/unknown.png"
  },
  {
    src: "https://cdn.discordapp.com/attachments/707531038360076288/805855362757820426/unknown.png"
  }
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg];
    shuffledCards.sort(() => Math.random() - 0.5);
    shuffledCards.map((card) => ({...card, id: Math.random()}));
    setCards(shuffledCards);
    setTurns(0);
  }

  console.log(cards, turns);
  return (
    <Container>
      <StartButton onClick={shuffleCards}>
        Nuova partita
      </StartButton>

      <div className='card-grid'>
        {cards.map((card) => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.src} alt='card'/>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default App
