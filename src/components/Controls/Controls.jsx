import React from "react";
import Dice from "../Dice/Dice";
import Button from "../Button/Button";
import { Howl, Howler } from "howler";
import DiceRollSound1 from "../../assets/audio/dice-roll1.mp3";
import DiceRollSound2 from "../../assets/audio/dice-roll2.mp3";
import DiceRollSound3 from "../../assets/audio/dice-roll3.mp3";
import ResetIcon from "../../assets/img/reset-icon.png";
import RollDiceIcon from "../../assets/img/roll-dice-icon.png";
import HoldIcon from "../../assets/img/hold-icon.png";
import "./Controls.css";

const SOUNDS = [DiceRollSound1, DiceRollSound2, DiceRollSound3].map(
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
      <Button
        handleClick={props.handleNewGameClick}
        icon={ResetIcon}
        text="New Game"
      />
      <Dice values={props.randomValues} />
      <div className="Controls__play-buttons">
        <Button
          handleClick={() => handleRollDiceClick(props.handleRollDiceClick)}
          icon={RollDiceIcon}
          text="Roll Dice"
        />
        <Button
          handleClick={props.handleHoldClick}
          icon={HoldIcon}
          text="Hold"
        />
      </div>
    </div>
  );
};

export default Controls;
