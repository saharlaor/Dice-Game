import React from "react";
import Controls from "../Controls/Controls";
import Player from "../Player/Player";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: { player1: 0, player2: 0 },
      currentScore: 0,
      currentPlayer: "player1",
      dice: [0, 0],
      winningScore: 100,
      isWon: false,
    };
  }

  randomDie() {
    return Math.ceil(Math.random() * 6);
  }

  rollDice() {
    return [this.randomDie(), this.randomDie()];
  }

  checkWin = (player, score) => {
    return score <= this.state.winningScore;
  };

  handleNewGameClick = () => {
    console.log("handleNewGameClick");
    return;
  };

  handleRollDiceClick = () => {
    const newState = { dice: this.rollDice() };
    const diceSum = newState.dice.reduce((acc, value) => acc + value);
    if (diceSum === 12) {
      newState["currentPlayer"] =
        this.state.currentPlayer === "player1" ? "player2" : "player1";
      newState["currentScore"] = 0;
    } else {
      newState["currentScore"] =
        this.state.currentScore +
        newState.dice.reduce((acc, value) => acc + value);
    }
    this.setState(newState);
  };

  handleHoldClick = () => {
    console.log("handleHoldClick");
    this.setState(({ totalScore, currentScore, currentPlayer }) => {
      const newTotal = { ...totalScore };
      newTotal[currentPlayer] += currentScore;
      const isWon = this.checkWin(currentPlayer, newTotal[currentPlayer]);
      return {
        totalScore: newTotal,
        currentScore: 0,
        currentPlayer: currentPlayer === "player1" ? "player2" : "player1",
        isWon: isWon,
      };
    });
  };

  render() {
    return (
      <div id="Game">
        <Player
          totalScore={this.state.totalScore.player1}
          currentScore={
            this.state.currentPlayer === "player1" ? this.state.currentScore : 0
          }
          isActive={this.state.currentPlayer === "player1" ? true : false}
          name="Player1"
        />
        <Controls
          randomValues={this.state.dice}
          handleNewGameClick={this.handleNewGameClick}
          handleRollDiceClick={this.handleRollDiceClick}
          handleHoldClick={this.handleHoldClick}
        />
        <Player
          totalScore={this.state.totalScore.player2}
          currentScore={
            this.state.currentPlayer === "player2" ? this.state.currentScore : 0
          }
          isActive={this.state.currentPlayer === "player2" ? true : false}
          name="Player2"
        />
      </div>
    );
  }
}

export default Game;
