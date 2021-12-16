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
      winningScore: 100,
      isWon: false,
    };
  }

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
        <Controls />
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
