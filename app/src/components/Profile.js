import React, { Component } from "react"

import Person from "./Person"
import VoteCount from "./VoteCount"

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increaseVote = this.increaseVote.bind(this)
  }

  increaseVote() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <Person image={this.props.image} name={this.props.name} />
        <button onClick={this.increaseVote}>VOTE</button>
        <VoteCount count={this.state.count} />
      </div>
    )
  }
}
