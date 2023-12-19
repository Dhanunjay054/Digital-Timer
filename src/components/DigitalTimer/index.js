import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {Timer: 0, running: false}

  render() {
    const {Timer, running} = this.state
    return (
      <div className="Main-container">
        <h1>Digital Timer</h1>
        <div className="icons-container">
          <div className="Timer-container">
            <div className="Timer">
              <p>{Timer}</p>
              <p>{running ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="icons-names">
            <img
              src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
              alt="play-icon"
              className="icon-size"
            />
            <p>Start</p>
          </div>
          <div className="icons-names">
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt="restart-icon"
              className="icon-size"
            />
            <p>Restart</p>
          </div>
          <div className="conter-increase-decrease">
          <p>-</p>
          <p className="counter-set">Count</p>
          <p>+</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
