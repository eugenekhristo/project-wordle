import React from 'react';

function isValidInput(str) {
  return /^[A-Za-z]{5}$/.test(str);
}

function GuessInput({ onAddGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValidInput(guess)) {
      return alert('Not enough letters! 💖');
    }

    onAddGuess(guess);
    setGuess('');
  }

  function handleOnChange(e) {
    const nextGuessString = e.target.value.toUpperCase().trim();
    if (nextGuessString.length > 5) return;
    setGuess(nextGuessString);
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={guess} onChange={handleOnChange} />
      </form>
    </>
  );
}

export default GuessInput;
