import React, { Component } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

const bulkTodos = (() => {
  const array = [];
  for (let i = 0; i < 5000; i++) {
    array.push({
      id: i,
      text: `Todo #${i}`,
      checked: false
    });
  }
  return array;
})();

class App extends Component {
  id = 5000;
  state = {
    todos: bulkTodos
  };

  handleCreate = text => {
    const todoData = {
      id: this.id++,
      text,
      checked: false
    };

    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  handleCheck = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          checked: !todo.checked
        };
      })
    });
  };

  handleRemove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate} />
        <div className="white-box">
          <TodoList
            todos={todos}
            onCheck={this.handleCheck}
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
