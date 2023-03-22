import React from "react";

const Clues = ({ clues }) => {
  return (
    <div className="clues">
      <h2>Clues</h2>
      <ul>
        <li>Class: {clues.class || "-"}</li>
        <li>Danger Level: {clues.dangerLevel || "-"}</li>
        <li>Food Diet: {clues.foodDiet || "-"}</li>
        <li>Habitat: {clues.habitat || "-"}</li>
        <li>Species Count: {clues.speciesCount || "-"}</li>
      </ul>
    </div>
  );
};

export default Clues;
