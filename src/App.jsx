import './App.css';
import styled from "styled-components";
import React, { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';

const Container = styled.div`
  max-width: 100%;
  margin: 40px auto;
`;

const CardGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
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
      <Button text="Nuova Partita" shuffle={shuffleCards} />
      <CardGrid>
        {cards.map((card) => (
          <Card src={card.src} id={card.id}/>
        ))}
      </CardGrid>
    </Container>
  )
}

export default App
