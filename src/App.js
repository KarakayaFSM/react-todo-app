import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Read Quran" },
      { id: 3, content: "Learn React" }
    ]
  }

  addTodo = (todo) => {
    todo.id = this.state.todos[this.state.todos.length -1].id + 1
    let todosCopy = this.state.todos.slice()
    todosCopy.push(todo)

    this.setState({
      todos: todosCopy
    });
  }

  deleteTodo = (id) => {
    let todosCopy = this.state.todos.filter(todo => {
      return id !== todo.id;
    });

    this.setState({
      todos: todosCopy
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">TODOs</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;






