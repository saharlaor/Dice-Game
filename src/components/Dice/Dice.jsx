import React from "react";
import { Howl, Howler } from "howler";
import DiceRoll1 from "../../assets/audio/dice-roll1.mp3";
import DiceRoll2 from "../../assets/audio/dice-roll2.mp3";
import DiceRoll3 from "../../assets/audio/dice-roll3.mp3";
import Dice0 from "../../assets/img/dice-0.png";
import Dice1 from "../../assets/img/dice-1.png";
import Dice2 from "../../assets/img/dice-2.png";
import Dice3 from "../../assets/img/dice-3.png";
import Dice4 from "../../assets/img/dice-4.png";
import Dice5 from "../../assets/img/dice-5.png";
import Dice6 from "../../assets/img/dice-6.png";
import "./Dice.css";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceImage: {
        0: Dice0,
        1: Dice1,
        2: Dice2,
        3: Dice3,
        4: Dice4,
        5: Dice5,
        6: Dice6,
      },
      sounds: [DiceRoll1, DiceRoll2, DiceRoll3].map(
        (sound) => new Howl({ src: sound })
      ),
    };
  }

  render() {
    const diceEls = this.props.values.map((val, i) => (
      <img
        key={`dice-${i}`}
        src={this.state.diceImage[val]}
        alt={`dice-${val}`}
        style={val ? { boxShadow: "0 0 10px 5px #ccc" } : {}}></img>
    ));
    return <div className="Dice">{diceEls}</div>;
  }

  componentDidUpdate(prevProps, prevState) {
    Howler.volume(0.5);
    this.state.sounds[
      Math.floor(Math.random() * this.state.sounds.length)
    ].play();
  }
}

export default Dice;
