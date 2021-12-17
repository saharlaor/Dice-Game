import React from "react";
import "./Player.css";

const Player = (props) => {
  const playerClass = `Player ${props.isActive ? "active" : "inactive"}`;
  console.log(props.name, props.isActive);
  return (
    <div className={playerClass}>
      <h2 className="Player__title">{props.name}</h2>
      <div className="total-score">{props.totalScore}</div>
      <div className="current-score">{props.currentScore}</div>
    </div>
  );
};

export default Player;
