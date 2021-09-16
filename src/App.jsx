import React, { Component } from "react"
import './styles.css'
export default class App extends Component {
  state = { clicksPlayerOne: 0, clicksPlayerTwo: 0 }

  render() {
    let color = "white"
    let color2 = "white"

    this.state.clicksPlayerOne < 0 ? color = "red" : color = "green"
    this.state.clicksPlayerTwo < 0 ? color2 = "red" : color2 = "green"

    return (
        <div>
          <h1>Scoreboard</h1>
      <div className = 'container'>
        <section className="player-one">
          <h2>Player One</h2>
          <h3 className = 'first-player-score' style={{ color: color }}>{this.state.clicksPlayerOne}</h3>
          <button
            className="player-one-btn"
            onClick={() =>
                this.setState({ clicksPlayerOne: this.state.clicksPlayerOne + 1 })
            }
          >
            Increase the Count
          </button>
          <button
            className="player-one-btn"
            onClick={() =>
              this.setState({ clicksPlayerOne: this.state.clicksPlayerOne - 1 })
            }
          >
            Decrease the Count
          </button>
        </section>
        <section className="player-two">
          <h2>Player Two</h2>
          <h3 className = "second-player-score"style={{ color: color2 }}>{this.state.clicksPlayerTwo}</h3>
          <button
            className="player-two-btn"
            onClick={() =>
              this.setState({ clicksPlayerTwo: this.state.clicksPlayerTwo + 1 })
            }
            >
                Increase the Count
          </button>
          <button
            className="player-two-btn"
            onClick={() =>
                this.setState({ clicksPlayerTwo: this.state.clicksPlayerTwo - 1 })
            }
            >
            Decrease the Count
          </button>
        </section>
      </div>
    </div>
    )
  }
}
