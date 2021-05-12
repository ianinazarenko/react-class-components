import React, { Component } from 'react'
import Ninjas from './Ninjas'

class App extends Component {
  state = { name: 'Ruy', belt: 'red' }

  componentDidMount() {
    console.log('component did mount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    console.log(prevState, this.state)
  }

  render() {
    console.log('rendered')
    return (
      <div>
        <button onClick={() => this.setState({ name: 'Tory', belt: 'green' })}>
          click me
        </button>
        {/* {this.state.ninjas.map((ninja, index) => (
          <Ninjas name={ninja.name} belt={ninja.belt} key={index} />
        ))} */}
      </div>
    )
  }
}

export default App
