import React, { Component } from 'react';
import './App.css'

export default class TodoList extends Component {
   render() {
       return(
        <div>
            <div id='title-container'>
                <h1>To-Do List</h1>
            </div>
            <div id="input-container">
                <input id="input-box" placeholder="WHATCHA GOTTA DO?"></input>
            </div>
        </div>
       )
   }
}

