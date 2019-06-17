import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from './components/todo-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';
import logo from '../src/logo.png';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">
            <img src={logo} width="30" height="30" alt="logo" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack To-Do App</Link>
            <div className="collapse nav-collapse">
              <ul className="navbar nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">Tasks</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Task</Link>
                </li>
              </ul>
            </div>
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