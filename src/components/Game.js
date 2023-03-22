import React, { useState, useEffect } from "react";
import Clues from "./Clues";
import Result from "./Result";
import animals from "../animals.json";

const Game = () => {
  const [hiddenAnimal, setHiddenAnimal] = useState(null);
  const [guess, setGuess] = useState("");
  const [correctGuess, setCorrectGuess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [guessesLeft, setGuessesLeft] = useState(5);
  const [additionalClueIndex, setAdditionalClueIndex] = useState(-1);

  useEffect(() => {
    setHiddenAnimal(animals[Math.floor(Math.random() * animals.length)]);
  }, []);

  const onGuess = (e) => {
    e.preventDefault();

    if (guessesLeft === 1) {
      setGameOver(true);
      return;
    }

    if (guess.toLowerCase() === hiddenAnimal.name.toLowerCase()) {
      setCorrectGuess(true);
      setGameOver(true);
    } else {
      setGuessesLeft(guessesLeft - 1);
      setAdditionalClueIndex(additionalClueIndex + 1);
    }

    setGuess("");
  };

  const onReset = () => {
    setHiddenAnimal(animals[Math.floor(Math.random() * animals.length)]);
    setGuess("");
    setCorrectGuess(false);
    setGameOver(false);
    setGuessesLeft(5);
    setAdditionalClueIndex(-1);
  };

  return (
    <div className="game">
      <h1>Animal Guessing Game</h1>
      <form onSubmit={onGuess}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button type="submit">Guess</button>
      </form>
      {additionalClueIndex >= 0 && (
        <p className="additional-clue">
          Additional clue: {hiddenAnimal.additionalClues[additionalClueIndex]}
        </p>
      )}
      <p>Guesses left: {guessesLeft}</p>
      <Clues guess={guess} hiddenAnimal={hiddenAnimal} />
      <Result
        hiddenAnimal={hiddenAnimal}
        correctGuess={correctGuess}
        gameOver={gameOver}
        onReset={onReset}
      />
    </div>
  );
};

export default Game;
