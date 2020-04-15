import React from "react";
import Header from "./Components/layout/Header"
import AddTodo from "./Components/AddTodo"
import Todos from "./Components/Todos";
import { v4 as uuidv4 } from 'uuid';

import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Program",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Practice Guitar and Piano",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Workout",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
