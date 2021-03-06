import React from "react";
import Dice0 from "../../assets/img/dice-0.png";
import Dice1 from "../../assets/img/dice-1.png";
import Dice2 from "../../assets/img/dice-2.png";
import Dice3 from "../../assets/img/dice-3.png";
import Dice4 from "../../assets/img/dice-4.png";
import Dice5 from "../../assets/img/dice-5.png";
import Dice6 from "../../assets/img/dice-6.png";
import "./Dice.css";

const DICE_IMAGES = {
  0: Dice0,
  1: Dice1,
  2: Dice2,
  3: Dice3,
  4: Dice4,
  5: Dice5,
  6: Dice6,
};

const Dice = (props) => {
  const diceEls = props.values.map((val, i) => (
    <img
      key={`dice-${i}`}
      src={DICE_IMAGES[val]}
      alt={`dice-${val}`}
      style={val ? { boxShadow: "0 0 10px 5px #ccc" } : {}}></img>
  ));
  return <div className="Dice">{diceEls}</div>;
};

export default Dice;
