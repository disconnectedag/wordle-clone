import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOver from '../GameOver';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, changeStatus] = React.useState('running');
  const [numGuesses, addGuess] = React.useState(1);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }
  function checkWin(tentativeGuess) {
    tentativeGuess === answer
      ? changeStatus('won')
      : numGuesses === NUM_OF_GUESSES_ALLOWED
      ? changeStatus('lost')
      : addGuess(numGuesses + 1);
  }

  return (
    <>
      Put a game here!
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        checkWin={checkWin}
        status={status}
      />
      <GameOver status={status} answer={answer} numGuesses={numGuesses} />
    </>
  );
}

export default Game;
