import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"

import TodoList from './todoList';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      {/* <div className="App">
      <TodoList />
      </div> */}
      <Route path='/' exact component={TodoList} />
      <Route path='/edit/:id' component={EditTodo} />
      <Route path='/create' component={CreateTodo} />
      </div>
      </Router>
    );
  }
}

export default App;