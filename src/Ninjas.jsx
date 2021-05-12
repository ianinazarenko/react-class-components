import React, { Component } from 'react'

export default class Ninjas extends Component {
  render() {
    console.log(this.props)
    const { name, belt } = this.props
    return (
      <div>
        <h1>Hello from Ninjas</h1>
        <p>Name: {name}</p>
        <p>Belt: {belt}</p>
      </div>
    )
  }
}
