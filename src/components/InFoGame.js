import React, { Component } from "react";

import { connect } from "react-redux";

class InFoGame extends Component {
  render() {
    return (
      <div className="inFoGame">
        <div className="inFoGame__name text-warning mt-3">
          {this.props.ketQua}
        </div>
        <div className="inFoGame__goals">
          Số bàn thắng:{" "}
          <span className="text-warning"> {this.props.soBanThang}</span>
        </div>
        <div className="info__total">
          Số bàn chơi:{" "}
          <span className="text-warning"> {this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.GameTuXiReducer.ketQua,
    soBanChoi: state.GameTuXiReducer.soBanChoi,
    soBanThang: state.GameTuXiReducer.soBanThang,
  };
};

export default connect(mapStateToProps)(InFoGame);
