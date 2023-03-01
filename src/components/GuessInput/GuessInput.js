import React from 'react';

function GuessInput({ handleSubmitGuess, checkWin, status }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function formSubmitHandler(event) {
    event.preventDefault();

    checkWin(tentativeGuess);
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={formSubmitHandler}>
      <label htmlFor="guess">Enter Guess:</label>
      <input
        required
        pattern="[a-zA-Z]{5}"
        title="Enter a 5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
        type="text"
        id="guess"
        disabled={status === 'running' ? false : true}
      />
    </form>
  );
}

export default GuessInput;
