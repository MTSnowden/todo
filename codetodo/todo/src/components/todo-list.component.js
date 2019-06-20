import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// only used in this componenet so no need to export
// pass in props from each component 
// create className that checks if the task has been completed and if so apply the 
// styling from bootstrap that indicates its been completed...strikethrough
// if the prop className is empty string so the text will not be crossed out
const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)


class TodoList extends Component {
    // set the initial state of the component with object containing property of todo
    // todo property initially contains an empty array
    constructor(props) {
        super(props);
        this.state = {todos: []}
    }

    // once the component mounts to the dom, use a 'get' request to the backend  for the list of items
    // .then a callback function is used to reset the state and pass in object containing 
    // an object with the property todo with a value of the response.data
    // use catch block to print to console if there is an error
    componentDidMount() {
        axios.get('http://localhost:3000/todos/')
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch(function(error) {
                console.log(error);
            })
    }


    // this method interates over the elements of the todo array
    // current item as the first argument, index as the second argument
    // returns the component Todo with prop todo containing all the current todo items
    // assigning them the key of 'index'
    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />
        });
    }


    // render function containing the table of items that will print to the page
    render() {
        return (
            <div>
                <h3>To-Do List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>Description</tr>
                        <tr>Responsible</tr>
                        <tr>Priority</tr>
                        <tr>Actions</tr>
                    </thead>
                    {/* the output of the todo data row by row
                    via todoList method */}
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
};

export default TodoList