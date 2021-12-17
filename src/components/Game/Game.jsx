import React from "react";
import Controls from "../Controls/Controls";
import Player from "../Player/Player";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNames: { player1: "Player1", player2: "Player2" },
      totalScore: { player1: 0, player2: 0 },
      currentScore: 0,
      currentPlayer: "Player1",
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

  checkWin = (score) => {
    return score <= this.state.winningScore;
  };

  handleNewGameClick = () => {
    this.setState({
      playerNames: { player1: "Player1", player2: "Player2" },
      totalScore: { player1: 0, player2: 0 },
      currentScore: 0,
      currentPlayer: "Player1",
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
    console.log("handleHoldClick");
    this.setState(({ totalScore, currentScore, currentPlayer }) => {
      const newTotal = { ...totalScore };
      newTotal[currentPlayer] += currentScore;
      const isWon = this.checkWin(currentPlayer, newTotal[currentPlayer]);
      return {
        totalScore: newTotal,
        currentScore: 0,
        currentPlayer:
          currentPlayer === this.state.playerNames.player1
            ? this.state.playerNames.player2
            : this.state.playerNames.player1,
        isWon: isWon,
      };
    });
  };

  render() {
    console.log(this.state.currentPlayer === this.state.playerNames.player2);
    return (
      <div id="Game">
        <Player
          totalScore={this.state.totalScore.player1}
          currentScore={
            this.state.currentPlayer === this.state.playerNames.player1
              ? this.state.currentScore
              : 0
          }
          isActive={this.state.currentPlayer === this.state.playerNames.player1}
          name={this.state.playerNames.player1}
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
            this.state.currentPlayer === this.state.playerNames.player2
              ? this.state.currentScore
              : 0
          }
          isActive={this.state.currentPlayer === this.state.playerNames.player2}
          name={this.state.playerNames.player2}
        />
      </div>
    );
  }
}

export default Game;
