import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from './components/todo-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';

import logo from '../src/logo.png';

// import TodoList from './todoList';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">
        <img src={logo} width="30" height="30" alt="logo" />
        </a>
      </nav>

      <Route path='/' exact component={TodoList} />
      <Route path='/edit/:id' component={EditTodo} />
      <Route path='/create' component={CreateTodo} />
      </div>
      </Router>
    );
  }
}

export default App;