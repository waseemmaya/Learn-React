import React, { Component } from "react";

// import Counter from "./Counter";
// import AdminLogin from "./AdminLogin";
import "./MyCss.css";
// import Todo from "./Todo";

class AdminPanel extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      isLoggedIn: false,
      currentIndex: null
    };
    this.cancel = this.cancel.bind(this);
  }

  render() {
    return this.renderUserForm();
  }

  renderUserForm() {
    return (
      <div>
        <div id="userForm" className="container">
          <h1 className="h1 text-center mt-2">Members</h1>

          {this.FirstName()}
          {this.LastName()}
          {this.Email()}
          {this.Salary()}
          {this.JoiningDate()}

          <div className="text-center">
            <button
              onClick={this.addUser}
              className="btn btn-sm addTask btn-primary mb-3 text-center"
            >
              Add User
            </button>
          </div>
        </div>
        {this.ShowUsers()}
      </div> //main div for all
    );
  }

  addUser = () => {
    const { firstName, lastName, email, phone, date, users } = this.state;
    users.push({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      date: date
    });
    this.setState({
      users,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: ""
    });
  };

  handleFirstName = firstName => {
    this.setState({
      firstName: firstName.target.value
    });
  };

  handleLastName = lastName => {
    this.setState({
      lastName: lastName.target.value
    });
  };

  handleEmail = email => {
    this.setState({
      email: email.target.value
    });
  };

  handlePhone = phone => {
    this.setState({
      phone: phone.target.value
    });
  };

  handleDate = date => {
    this.setState({
      date: date.target.value
    });
  };

  ShowUsers() {
    const { users } = this.state;
    return (
      <div id="showUsers" className="container">
        <table className="table table-bordered table-light table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Index</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Edit Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.date}</td>
                  <td>
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  JoiningDate() {
    return (
      <input
        value={this.state.date}
        onChange={this.handleDate}
        type="date"
        placeholder="Date"
        className="form-control mb-3"
      />
    );
  }

  Salary() {
    return (
      <input
        value={this.state.phone}
        onChange={this.handlePhone}
        type="number"
        placeholder="Phone"
        className="form-control mb-3"
      />
    );
  }

  Email() {
    return (
      <input
        value={this.state.email}
        onChange={this.handleEmail}
        type="email"
        placeholder="Email"
        className="form-control mb-3"
      />
    );
  }

  LastName() {
    return (
      <input
        value={this.state.lastName}
        onChange={this.handleLastName}
        type="text"
        placeholder="Last Name"
        className="form-control mb-3"
      />
    );
  }

  FirstName() {
    return (
      <input
        value={this.state.firstName}
        onChange={this.handleFirstName}
        type="text"
        placeholder="First Name"
        className="form-control mb-3"
      />
    );
  }

  cancel() {
    this.setState({ taskText: "", currentIndex: null });
  }

  delete(index) {
    const { users } = this.state;
    users.splice(index, 1);
    this.setState({
      users
    });
  }

  edit(index) {
    const { users } = this.state;

    this.setState({
      firstName: users[index].firstName,
      lastName: users[index].lastName,
      email: users[index].email,
      phone: users[index].phone,
      date: users[index].handleDate
      // currentIndex: index
    });
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
}

export default AdminPanel;
