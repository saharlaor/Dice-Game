import React from "react";
import "./Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      active: this.props.isActive,
    };
  }

  render() {
    const titleClass = `Player__title ${this.state.active && "active"}`;
    return (
      <div className="Player">
        <h2 className={titleClass}>{this.state.name}</h2>
        <div className="total-score">{this.props.totalScore}</div>
        <div className="current-score">{this.props.currentScore}</div>
      </div>
    );
  }
}

export default Player;
