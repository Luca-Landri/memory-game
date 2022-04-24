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
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);



  //funzione per mischiare le carte
  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg];
    shuffledCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards.map((card) => ({...card, id: Math.random() })));
    setTurns(0);
  }



  //funzione per prendere una carta selezionata
  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  }



  //funzione per comparare 2 carte
  useEffect(() => {
    console.log(choice1, choice2);
    if (choice1 && choice2) {
      if (choice1.src === choice2.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choice1.src) {
              console.log("Sono entrato nella map")
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
  }, [choice1, choice2]);




  //funzione per resettare le scelte dell'utente
  const reset = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(turns + 1)
  }

  return (
    <Container>
      <Title>PANETTI'S MEMORY CARD</Title>
      <CardGrid>
        {cards.map((card) => (
          <Card key={card.id} handleChoice={handleChoice} card={card} flipped={card === choice1 || card === choice2 || card.matchStatus}/>
        ))}
      </CardGrid>
      <Button text="Nuova Partita" shuffle={shuffleCards} />
    </Container>
  )
}

export default App;

