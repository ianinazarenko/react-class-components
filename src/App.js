import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'Play mario cart' },
    ],
  }

  deleteItem = (id) => {
    this.setState(() => ({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    }))
  }

  addTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now() }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteItem={this.deleteItem} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App
