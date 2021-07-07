import "./GameTuXi.css";

import React, { Component } from "react";

import Computer from "./Computer";
import InFoGame from "./InFoGame";
import Player from "./Player";

export default class GameTuXi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <InFoGame />
            <button className="game__button mt-4">Play game</button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
