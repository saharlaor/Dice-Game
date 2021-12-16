import React from "react";
import Dice from "../Dice/Dice";
import "./Controls.css";

const Controls = (props) => {
  return (
    <div className="Controls">
      <button onClick={props.handleNewGameClick}>New Game</button>
      <Dice values={props.randomValues} />
      <button onClick={props.handleRollDiceClick}>Roll Dice</button>
      <button onClick={props.handleHoldClick}>Hold</button>
    </div>
  );
};

export default Controls;
