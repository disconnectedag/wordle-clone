import React from 'react';

function GameOver({ status, answer, numGuesses }) {
  const className =
    status === 'won'
      ? 'happy banner'
      : status === 'lost'
      ? 'sad banner'
      : undefined;
  return (
    <div className={className}>
      {status === 'won' && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numGuesses} guesses</strong>.
        </p>
      )}
      {status === 'lost' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default GameOver;
