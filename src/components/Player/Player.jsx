import React from "react";
import "./Player.css";

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const Player = (props) => {
  const playerClass = `Player ${props.isActive ? "active" : "inactive"} ${
    props.isWinner ? "winner" : ""
  }`;
  return (
    <div className={playerClass}>
      <h2 className="Player__title">{capitalize(props.name)}</h2>
      <div className="Player__total-score">{props.totalScore}</div>
      <div className="Player__current-score">{props.currentScore}</div>
    </div>
  );
};

export default Player;
