import React, { Component } from "react";

import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyFrame = `@keyframes randomItem${Date.now()} {
    0% {top: -50px;}
      25% {top: 30px;}
      50% {top: -30px;}
      75% {top: 30px;}
      100% {top: 0;}
}`;

    return (
      <div className="computerGame">
        <style>{keyFrame}</style>
        <div className="computerGame__bubble">
          <img
            style={{
              overflow: "hidden",
              position: "relative",
              animation: `randomItem${Date.now()} 0.5s`,
            }}
            className="computerGame__img"
            src={this.props.mangComputer.hinhAnh}
            alt={this.props.mangComputer.hinhAnh}
          />
        </div>
        <div className=" speech-bubble"></div>
        <img
          style={{ width: 200 }}
          src={"./images/playerComputer.png"}
          alt="player"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangComputer: state.GameTuXiReducer.mangComputer,
  };
};
export default connect(mapStateToProps)(Computer);
