import React from "react";

const Result = ({ hiddenAnimal, correctGuess, gameOver, onReset }) => {
  if (!gameOver) {
    return null;
  }

  return (
    <div className="result">
      {correctGuess ? (
        <>
          <h2>Congratulations! You guessed correctly!</h2>
          <img src={hiddenAnimal.imageUrl} alt={hiddenAnimal.name} />
        </>
      ) : (
        <h2>Game Over! The correct animal was {hiddenAnimal.name}.</h2>
      )}
      <button onClick={onReset}>Try Again</button>
    </div>
  );
};

export default Result;
