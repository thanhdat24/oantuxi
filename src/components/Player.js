import React, { Component } from "react";

import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="playerGame">
        <div className="playerGame__bubble">
          <img
            className="playerGame__img"
            src={this.props.mangTuXi.find((item) => item.status).hinhAnh}
            alt={this.props.mangTuXi.find((item) => item.status).hinhAnh}
          />
        </div>
        <div className=" speech-bubble"></div>
        <img style={{ width: 200 }} src="./images/player.png" alt="player" />
        <div className="row">
          {this.props.mangTuXi.map((item, index) => {
            // Xét status cho item
            let status = {};
            if (item.status) {
              status = {
                border: "4px solid #eaab2c",
                borderRadius: "50%",
              };
            }
            return (
              <div className="col-4">
                <button style={status} className="btnItem">
                  {" "}
                  <img
                    style={{ width: 40 }}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { mangTuXi: state.GameTuXiReducer.mangTuXi };
};
export default connect(mapStateToProps)(Player);
