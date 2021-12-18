import React from "react";
import Dice from "../Dice/Dice";
import { Howl, Howler } from "howler";
import DiceRoll1 from "../../assets/audio/dice-roll1.mp3";
import DiceRoll2 from "../../assets/audio/dice-roll2.mp3";
import DiceRoll3 from "../../assets/audio/dice-roll3.mp3";
import "./Controls.css";

const SOUNDS = [DiceRoll1, DiceRoll2, DiceRoll3].map(
  (sound) => new Howl({ src: sound })
);

const handleRollDiceClick = (handler) => {
  Howler.volume(0.5);
  SOUNDS[Math.floor(Math.random() * SOUNDS.length)].play();
  handler();
};

const Controls = (props) => {
  return (
    <div className="Controls">
      <button onClick={props.handleNewGameClick}>New Game</button>
      <Dice values={props.randomValues} />
      <div className="Controls__play-buttons">
        <button onClick={() => handleRollDiceClick(props.handleRollDiceClick)}>
          Roll Dice
        </button>
        <button onClick={props.handleHoldClick}>Hold</button>
      </div>
    </div>
  );
};

export default Controls;
