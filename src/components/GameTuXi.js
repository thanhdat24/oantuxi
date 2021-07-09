import "./GameTuXi.css";

import React, { Component } from "react";

import Computer from "./Computer";
import InFoGame from "./InFoGame";
import Player from "./Player";
import { connect } from "react-redux";

class GameTuXi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <InFoGame />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="game__button mt-4"
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 5) {
          // Dừng hàm setInterval
          clearInterval(randomComputerItem);

          dispatch({
            type: "KET_QUA",
          });
        }
      }, 500);
    },
  };
};
export default connect(null, mapDispatchToProps)(GameTuXi);
