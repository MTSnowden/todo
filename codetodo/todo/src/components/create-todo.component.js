import React, { Component } from 'react';
import axios from 'axios';

class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state ={
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
        
        // bind this to each onChange function
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // create newTodo object containing the value from each component
        //  that were entered by the user in the form
        
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };



        // make a post call to the axios library 
        // first pass in a string with the url path of the endpoint which is accepting new incoming requests
        // second pass in the newTodo object 
        // .then send the response to the console
        axios.post('http://localhost:4000/todos/add', newTodo) 
            .then(res => console.log(res.data))

        
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form sumbitted:`)
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsibile: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        this.setState=({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
            <h3>Create New Task</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                        />
                </div>
                <div className="form-group">
                    <label>Responsibile:</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}
                        />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.todo_priority==='Low'}
                                onChange={this.onChangeTodoPriority}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.todo_priority==='Medium'}
                                onChange={this.onChangeTodoPriority}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.todo_priority==='High'}
                                onChange={this.onChangeTodoPriority}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Task" className="btn btn-success" />
                </div>
            </form>
            </div>
        )
    }
};

export default CreateTodo;