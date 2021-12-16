import React from "react";
import Dice from "../Dice/Dice";
import "./Controls.css";

const Controls = (props) => {
  return (
    <div className="Controls">
      <button>New Game</button>
      <Dice values={props.randomValues} />
      <button>New Game</button>
      <button>New Game</button>
    </div>
  );
};

export default Controls;
