import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div className="playerGame">
        <div className="playerGame__bubble">
          <img
            className="playerGame__img"
            src="./images/bua.png"
            alt="bua"
          />
        </div>
        <div className=" speech-bubble"></div>
        <img style={{ width: 200 }} src="./images/player.png" alt="player" />
        <div className="row">
          <div className="col-4">
            <button className="btnItem">
              {" "}
              <img style={{ width: 40 }} src="./images/keo.png" alt="keo" />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img style={{ width: 40 }} src="./images/bua.png" alt="bua" />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              {" "}
              <img style={{ width: 40 }} src="./images/bao.png" alt="bao" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
