// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    input: '',
  }

  onChangeInput = event => {
    const {value} = event.target

    this.setState({input: value})
  }

  render() {
    const {input} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="instruction" htmlFor="in">
              Enter the phrase
            </label>
            <input
              type="text"
              id="in"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.onChangeInput}
              value={input}
            />
            <p className="count">No.of letters: {input.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
