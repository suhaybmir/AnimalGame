import React, { useState } from "react";

const GuessForm = ({ onGuess }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuess(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess">Enter your guess:</label>
      <input
        type="text"
        id="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuessForm;
