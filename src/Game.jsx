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
    //viene duplicato l'array delle carte perchè ci devono essere 2 carte di ogni tipo
    const shuffledCards = [...cardImg, ...cardImg];
    // coon sort mischiamo l'array in modo casuale
    shuffledCards.sort(() => Math.random() - 0.5);
    // ad ogni carta viene settato un'id in modo casuale
    setCards(shuffledCards.map((card) => ({...card, id: Math.random() })));
    // inizializzazione di tutti i setter
    setCard1(null);
    setCard2(null);
    setTurns(0);
  }



  //funzione per prendere una carta selezionata
  const handleChoice = (card) => {
    // se card 1 è nulla, allora la carta è la prima carta selezionata
    // se card 1 è true allora la carta da settare sarà la seconda
    card1 ? setCard2(card) : setCard1(card);
  }



  //funzione per comparare 2 carte
  useEffect(() => {
    if (card2) {
      // si entra nella condizione solo se la seconda carta è stata selezionata
      if (card1.src === card2.src) {
        // se le 2 carte selezionate sono uguali si entra nella condizione
        setCards(prevCards => {
          // map che matchando la carta selezionata con quella nell'array se sono uguali un booleano viene messo a true
          return prevCards.map(card => {
            if (card.src === card1.src) {
              return {...card, matchStatus: true};
            } else {
              return card;
              // se le 2 carte selezionate sono diverse non succede niente
            }
          })
        });
        reset();
        //funzione che resetta tutti gli state
      } else {
        setTimeout(() => reset(), 800)
      }
    }
  }, [card1, card2]);
  //quando tutte le card hanno un matchStatus: true viene mandato questo allert che ti dice il numero di turni che ci hai messo
  useEffect(() => {
    if (cards.every(card => card.matchStatus === true) && cards.length == 12) {
      alert(`You won in ${turns} turns!`);
    }
  }, [turns]);

  // ogni aggiornamento vengono rimescolate le carte
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
      <Title>MEMORLANDRI</Title>
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

