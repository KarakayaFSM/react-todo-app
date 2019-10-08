import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content : ''
    }

    onChange = (e) => {
        this.setState({
            content : e.target.value
        });
    }

    onsubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content:''
        });
    } 

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit}>
                <label >ADD TODO</label>
                <input type="text" onChange = {this.onChange} value = {this.state.content}/>    
                </form>
            </div>
        )
    }
}

export default AddTodo