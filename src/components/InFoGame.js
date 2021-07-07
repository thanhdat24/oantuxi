import React, { Component } from 'react'

export default class InFoGame extends Component {
    render() {
        return (
          <div className="inFoGame">
            <div className="inFoGame__name text-warning mt-3">
              I'm iron man, i love you 3000 !!!
            </div>
            <div className="inFoGame__goals">
              Số bàn thắng: <span className="text-warning">1</span>
            </div>
            <div className="info__total">
              Số bàn chơi: <span className="text-warning">2</span>
            </div>
          </div>
        );
    }
}
