import React, { Component } from "react";
class ShowTable extends Component {
  state = {
    users: []
  };
  render() {
    const { users } = this.state;
    return (
      <div id="showUsers" className="container">
        <button
          className="btn btn-primary btn-lg float-left mb-2"
          onClick={this.enableUserAdd}
        >
          Add User
        </button>

        <button
          className="btn btn-danger btn-lg float-right mb-2"
          //   onClick={this.logout}
        >
          Logout
        </button>
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
                  <td>{user.email2}</td>
                  <td>{user.phone}</td>
                  <td>{user.date}</td>
                  <td>
                    <div className="butt text-center">
                      <span>
                        <button
                          className="myButton btn btn-sm btn-danger"
                          //   onClick={this.delete.bind(this, index)}
                        >
                          Delete
                        </button>
                      </span>
                      <span>
                        <button
                          className="myButton btn btn-sm btn-warning"
                          //   onClick={this.edit.bind(this, index)}
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
}

export default ShowTable;
