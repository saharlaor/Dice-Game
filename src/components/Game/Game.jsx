import React from "react";
import Controls from "../Controls/Controls";
import Player from "../Player/Player";
import { Howl, Howler } from "howler";
import Fireworks from "../../assets/audio/fireworks.mp3";
import Victory from "../../assets/audio/victory.mp3";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNames: { player1: "player1", player2: "player2" },
      totalScore: { player1: 0, player2: 0 },
      currentScore: 0,
      currentPlayer: "player1",
      dice: [0, 0],
      winningScore: 100,
      isWon: false,
    };
  }

  // Util methods
  randomDie() {
    return Math.ceil(Math.random() * 6);
  }

  rollDice() {
    return [this.randomDie(), this.randomDie()];
  }

  checkWin = (score) => {
    return score >= this.state.winningScore;
  };

  victorySounds() {
    Howler.volume(0.3);
    const victory = new Howl({ src: Victory });
    const fireworks = new Howl({ src: Fireworks });

    victory.play();
    const fireworksInterval = setInterval(() => {
      fireworks.play();
    }, 3000);
    setTimeout(() => {
      console.log("Clearing fireworks");
      clearInterval(fireworksInterval);
    }, 12000);
  }

  // Handler methods
  handleNewGameClick = () => {
    console.log(this.state.audioInterval);
    clearInterval(this.state.audioInterval);
    this.setState({
      playerNames: { player1: "player1", player2: "player2" },
      totalScore: { player1: 0, player2: 0 },
      currentScore: 0,
      currentPlayer: "player1",
      dice: [0, 0],
      winningScore: 100,
      isWon: false,
    });
  };

  handleRollDiceClick = () => {
    const newState = { dice: this.rollDice() };
    const diceSum = newState.dice.reduce((acc, value) => acc + value);
    if (diceSum === 12) {
      newState["currentPlayer"] =
        this.state.currentPlayer === this.state.playerNames.player1
          ? this.state.playerNames.player2
          : this.state.playerNames.player1;
      newState["currentScore"] = 0;
    } else {
      newState["currentScore"] =
        this.state.currentScore +
        newState.dice.reduce((acc, value) => acc + value);
    }
    this.setState(newState);
  };

  handleHoldClick = () => {
    this.setState(
      ({ playerNames, totalScore, currentScore, currentPlayer }) => {
        const newState = {};
        const newTotal = { ...totalScore };
        newTotal[currentPlayer] += currentScore;
        newState.totalScore = newTotal;
        newState.playerNames = playerNames;
        newState.currentScore = 0;
        if (this.checkWin(newTotal[currentPlayer])) {
          newState.playerNames[currentPlayer] = "Winner";
          newState.isWon = true;
          newState.currentPlayer = newState.playerNames[currentPlayer];
          this.victorySounds();
        } else {
          newState.currentPlayer =
            currentPlayer === this.state.playerNames.player1
              ? this.state.playerNames.player2
              : this.state.playerNames.player1;
        }
        return newState;
      }
    );
  };

  render() {
    const isPlayer1Active =
      this.state.currentPlayer === this.state.playerNames.player1;
    return (
      <div id="Game">
        <Player
          name={this.state.playerNames.player1}
          totalScore={this.state.totalScore.player1}
          currentScore={isPlayer1Active ? this.state.currentScore : 0}
          isActive={isPlayer1Active}
          isWinner={this.state.isWon && isPlayer1Active}
        />
        <Controls
          randomValues={this.state.dice}
          handleNewGameClick={this.handleNewGameClick}
          handleRollDiceClick={
            !this.state.isWon ? this.handleRollDiceClick : null
          }
          handleHoldClick={!this.state.isWon ? this.handleHoldClick : null}
        />
        <Player
          name={this.state.playerNames.player2}
          totalScore={this.state.totalScore.player2}
          currentScore={!isPlayer1Active ? this.state.currentScore : 0}
          isActive={!isPlayer1Active}
          isWinner={this.state.isWon && !isPlayer1Active}
        />
      </div>
    );
  }
}

export default Game;
