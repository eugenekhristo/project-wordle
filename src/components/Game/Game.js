import React from 'react';
import GuessInput from '../GuessInput';
import PrevGuesses from '../PrevGuesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(guess) {
    setGuesses((prevGuesses) => [...prevGuesses, { id: crypto.randomUUID(), guess }]);
  }

  return (
    <>
      <PrevGuesses guesses={guesses} />
      <GuessInput onAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
