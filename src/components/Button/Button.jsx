import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="Button">
      <button onClick={props.handleClick}>
        <img src={props.icon} alt={props.text} />
        <span>{props.text}</span>
      </button>
    </div>
  );
};

export default Button;
