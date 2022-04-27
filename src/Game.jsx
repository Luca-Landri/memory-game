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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

const TurnCounter = styled.h3`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Fira Code', monospace;
  user-select: none;
`;

function Game() {
  const [cards, setCards] = useState([]);
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [turns, setTurns] = useState(0);



  //funzione per mischiare le carte
  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg];
    shuffledCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards.map((card) => ({...card, id: Math.random() })));
    setCard1(null);
    setCard2(null);
    setTurns(0);
  }



  //funzione per prendere una carta selezionata
  const handleChoice = (card) => {
    card1 ? setCard2(card) : setCard1(card);
    console.log(cards);
  }



  //funzione per comparare 2 carte
  useEffect(() => {
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

  useEffect(() => {
    
    console.log("merluzzo impanato");
    console.log(cards);
    if (cards.every(card => card.matchStatus === true) && cards.length == 12) {
      console.log(cards);
      alert(`You won in ${turns} turns!`);
    }
  }, [turns]);

  useEffect(() => {
    shuffleCards();
  }, []);

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
      <ButtonContainer>
        <Button text="Nuova Partita" shuffle={shuffleCards} />
        <TurnCounter>Turns: {turns}</TurnCounter>
      </ButtonContainer>

    </Container>
  )
}

export default Game;

