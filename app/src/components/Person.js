import React, { Component } from "react"

export default class Person extends Component {
  render() {
    return <img src={this.props.image} alt={this.props.name} />
  }
}
