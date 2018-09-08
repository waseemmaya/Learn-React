import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderTodoForm() {
    return (
      <div id="main" className="text-center">
        <h1 className="display-4 text-center mt-2">Tasks</h1>
        <input
          type="text"
          id="task"
          placeholder="Enter Your Tasks..."
          className="form-control"
        />
        <buttton
          onClick={this.addTask}
          className="btn btn-info mt-2 text-center"
        >
          Add Task
        </buttton>
      </div>
    );
  }

  addTask() {}

  render() {
    return <div className="container">{this.renderTodoForm()}</div>;
  }
}

export default Todo;
