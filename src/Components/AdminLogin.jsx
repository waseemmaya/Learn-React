import React, { Component } from "react";
import swal from "sweetalert";
import AdminPanel from "./AdminPanel";

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      orignalEmail: "admin@domain.com",
      orignalPassword: "admin",
      isLoggedIn: false
    };
  }
  render() {
    return this.state.isLoggedIn ? <AdminPanel /> : this.renderLogin();
  }

  renderLogin = () => {
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
  };

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

      return <AdminPanel />;
    } else {
      swal("Error", "Try Again", "error");
    }
  };
}

export default AdminLogin;
