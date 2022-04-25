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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;

`;

function App() {
  const [cards, setCards] = useState([]);
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [turns, setTurns] = useState(0);



  //funzione per mischiare le carte
  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg];
    shuffledCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards.map((card) => ({...card, id: Math.random() })));
    setTurns(0);
  }



  //funzione per prendere una carta selezionata
  const handleChoice = (card) => {
    card1 ? setCard2(card) : setCard1(card);
  }



  //funzione per comparare 2 carte
  useEffect(() => {
    console.log(card1, card2);
    if (card2) {
      if (card1.src === card2.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === card1.src) {
              return {...card, matchStatus: true};
            } else {
              return card;
            }
          })
        });
        reset();
      } else {
        setTimeout(() => reset(), 800)
      }
    }
  }, [card1, card2]);




  //funzione per resettare le scelte dell'utente
  const reset = () => {
    setCard1(null)
    setCard2(null)
    setTurns(turns + 1)
  }

  return (
    <Container>
      <Title>PANETTI'S MEMORY CARD</Title>
      <CardGrid>
        {cards.map((card) => (
          <Card key={card.id} handleChoice={handleChoice} card={card} flipped={card === card1 || card === card2 || card.matchStatus}/>
        ))}
      </CardGrid>
      <Button text="Nuova Partita" shuffle={shuffleCards} />
    </Container>
  )
}

export default App;

