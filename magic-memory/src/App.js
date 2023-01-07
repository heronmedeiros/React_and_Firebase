import './App.css';
import { useEffect, useState } from "react";
import SingleCard from './components/SingleCard';
const cardImages = [
  {"src": "/images/helmet-1.png", matched: false },
  {"src": "/images/potion-1.png", matched: false },
  {"src": "/images/ring-1.png", matched: false },
  {"src": "/images/scroll-1.png", matched: false },
  {"src": "/images/shield-1.png", matched: false },
  {"src": "/images/sword-1.png", matched: false },
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    console.log('useEffect')

    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        console.log("those cards match");

        setCards( prevCards => {
          debugger
          prevCards && prevCards.map(card => {
            if (card.src === choiceOne.src) {
              console.log('matched')
              console.log(cards)
              return ({ ...card, matched: true })
            } else {
              console.log('not matched')
              return card;
            }
          });
        });

        resetTurn();
      } else {
        console.log("those cards don't match");
        setTimeout(() => resetTurn(), 1000);
      }
    }

  }, [choiceOne, choiceTwo])

  // console.log(cards);

  //reset choices e increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false);
  }

  // Start a new game automagically

  useEffect( () => {
    shuffleCards();
  }, [])

  //shuffle cards
  const shuffleCards = () =>{
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setTurns(0);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards && cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === choiceOne ||
              card === choiceTwo ||
              card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
