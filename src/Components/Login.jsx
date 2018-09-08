import React, { Component } from "react";
import swal from "sweetalert";
import Counter from "./Counter";
import "./MyCss.css";
// import Todo from "./Todo";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      orignalEmail: "waseemmayaa@gmail.com",
      orignalPassword: "123456",
      isLoggedIn: false,
      taskText: "",
      currentIndex: null
    };
    this.cancel = this.cancel.bind(this);
    // console.log(this.state.isLoggedIn);
  }

  render() {
    return !this.state.isLoggedIn ? this.renderLogin() : this.renderTodoForm();
  }

  renderTodoForm() {
    return (
      <div>
        <div id="toDoForm" className="container">
          <h1 className="display-4 text-center mt-2">Tasks</h1>
          <div className="input-group input-group-newsletter">
            <input
              value={this.state.taskText}
              onChange={this.handleTask}
              type="text"
              placeholder="Enter Your Tasks...."
              className="form-control mb-3"
            />
          </div>

          {this.state.currentIndex == null ? (
            <div className="text-center">
              <button
                onClick={this.addTask}
                className="btn btn-sm addTask btn-primary mb-3 text-center"
              >
                Add Task
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={this.updateTask}
                className="btn btn-sm addTask btn-success mb-3 text-center"
              >
                Update
              </button>
              <button
                onClick={this.cancel}
                id="cancel"
                className="btn btn-sm addTask btn-danger mb-3 text-center"
              >
                Cancel
              </button>
              <br />
              <div className="p-3 mb-2 bg-dark text-white">
                You are currently editing item # {this.state.currentIndex + 1}
              </div>
            </div>
          )}
        </div>
        <div id="tasksAll" className="container">
          {this.state.tasks.map((val, index) => {
            return (
             <div key={index} className="perTask mt-3">
             <p className="taskPara text-center">
             <b className="text-dark">{index + 1}-</b>
                <span className="text-secondary"> {val}</span>
             </p>
                <div className="butt text-center">
                
                <span>
                  <button
                    className="myButton btn btn-sm btn-danger"
                    onClick={this.delete.bind(this, index)}
                  >
                    Delete
                  </button>
                </span>
                <span>
                  <button
                    className="myButton btn btn-sm btn-warning"
                    onClick={this.edit.bind(this, index)}
                  >
                    Edit
                  </button>
                </span>
                </div>
             </div>
            );
          })}
        </div>
      </div> //main div for all
    );
  }

  updateTask = () => {
    const { taskText, tasks, currentIndex } = this.state;
    tasks[currentIndex] = taskText;

    this.setState({
      taskText: "",
      tasks,
      currentIndex: null
    });
  };

  addTask = () => {
    const { taskText, tasks } = this.state;
    tasks.push(taskText);
    this.setState({ tasks, taskText: "" });
  };

  cancel() {
    this.setState({ taskText: "", currentIndex: null });
  }

  delete(index) {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  }

  edit(index) {
    const { tasks } = this.state;

    this.setState({
      taskText: tasks[index],
      currentIndex: index
    });
  }

  handleTask = task => {
    this.setState({
      taskText: task.target.value
    });
    // console.log(this.state.taskText);
  };

  renderLogin() {
    return (
      <div className="container">
        <h3 className="display-4 mb-3 text-center">Login</h3>

        <div className="form-group">
          <input
            value={this.state.email}
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={this.handleEmail}
          />
        </div>
        <div className="form-group">
          <input
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
            id="password1"
            placeholder="Password"
            onChange={this.handlePassword}
          />
        </div>
        <button className="btn btn-primary" onClick={this.HandleLogin}>
          Login
        </button>
      </div>
    );
  }

  handleEmail = email => {
    this.setState({
      email: email.target.value
    });
  };

  handlePassword = password => {
    this.setState({
      password: password.target.value
    });
  };

  HandleLogin = () => {
    if (
      this.state.email === this.state.orignalEmail &&
      this.state.password === this.state.orignalPassword
    ) {
      swal("Success", "Logged In", "success").then(val => {
        this.setState({
          isLoggedIn: true
        });
      });

      return <Counter />;
    } else {
      swal("Error", "Try Again", "error");
    }
  };
}

export default Login;
