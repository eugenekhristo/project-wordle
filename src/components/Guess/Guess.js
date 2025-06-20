import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value }) {
  const checkGuessResult = checkGuess(value, window.wordleAnswer);

  function className(num) {
    return checkGuessResult ? `cell ${checkGuessResult[num].status}` : 'cell';
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={className(num)}>
          {value && value.at(num)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
