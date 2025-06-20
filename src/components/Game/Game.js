import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
window.wordleAnswer = sample(WORDS);
console.info({ answer: window.wordleAnswer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(tentativeGuess) {
    setGuesses((prevGuesses) => [...prevGuesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
