import React, { Component } from 'react';
import swal from 'sweetalert';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orignalEmail: "admin@domain.com",
            orignalPassword: "admin",
            email: "",
            password: ""
        }

    }
    render() {
        return (
            <div className="text-center">
                <h3 className="display-4 mb-3 text-center">Login</h3>

                <div className="form-group">
                    <input
                        value={this.state.email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="admin@domain.com"
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
                        placeholder="admin"
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
                this.props.onLogin();
            });
        } else {
            swal("Error", "Try Again", "error");
        }
    };



}

export default Login;