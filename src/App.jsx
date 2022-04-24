import './App.css';
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import cardImg from './components/CardImgs';

const Title = styled.h1`
  font-family: 'Fira Code', monospace;
  user-select: none;
`;

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

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg];
    shuffledCards.sort(() => Math.random() - 0.5);
    shuffledCards.map((card) => ({...card, id: Math.random()}));
    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  }

  useEffect(() => {
    if (choice2) {
      if (choice1 === choice2) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choice2) {
              console.log("Sono entrato nella map")
              return {...card, matchStatus: true};
            } else {
              return card;
            }
          })
        });
        console.log('match');
        reset();
      } else {
        console.log('no match');
        reset();
      }
    }
  }, [choice1, choice2]);

  console.log(cards);

  const reset = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <Container>
      <Title>PANETTI'S MEMORY CARD</Title>
      <Button text="Nuova Partita" shuffle={shuffleCards} />
      <CardGrid>
        {cards.map((card) => (
          <Card handleChoice={handleChoice} src={card.src} flipped={card === choice1 || card === choice2 || card.matchStatus}/>
        ))}
      </CardGrid>
    </Container>
  )
}

export default App;

