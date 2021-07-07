import React, { Component } from "react";

export default class Computer extends Component {
  render() {
    return (
      <div className="computerGame">
        <div className="computerGame__bubble">
          <img className="computerGame__img" src="./images/keo.png" alt="keo" />
        </div>
        <div className=" speech-bubble"></div>
        <img
          style={{ width: 200 }}
          src="./images/playerComputer.png"
          alt="player"
        />
      </div>
    );
  }
}
