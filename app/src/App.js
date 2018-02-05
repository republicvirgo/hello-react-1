import React, { Component } from "react"
import "./App.css"

import Profile from "./components/Profile"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">VOTINC</h1>
          <p className="App-intro">Pilkada abal-abal</p>
        </header>
        <div className="container">
          <Profile image="/images/dzaky.jpg" name="Dzaky " />
          <Profile image="/images/ferry.jpg" name="Ferry " />
          <Profile image="/images/miftah.jpg" name="Miftah " />
        </div>
      </div>
    )
  }
}
