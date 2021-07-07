import React, { Component } from "react";

import { connect } from "react-redux";

class Computer extends Component {
  render() {
    return (
      <div className="computerGame">
        <div className="computerGame__bubble">
          <img
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
