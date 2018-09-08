import React, { Component } from 'react';
import "./MyCss.css";
import Login from "./Login";
import DashBoard from "./DashBoard";
import AddUser from "./AddUser"

class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoggedIn: false,
            form: false,
        }
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.formChalao = this.formChalao.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.addUser = this.addUser.bind(this);
       
    }

    render() {
        const { isLoggedIn, form } = this.state;
        return (
            <div className="container">
                {!isLoggedIn && < Login onLogin={this.onLogin} />}
                {isLoggedIn && !form && < DashBoard formChalao={this.formChalao} onLogout={this.onLogout} />}
                {isLoggedIn && form && < AddUser hideForm={this.hideForm} jabAddKare={this.addUser} />}
            </div>
        );
    }


    onLogin() {
        this.setState({
            isLoggedIn: true
        })
        console.log("user logged in")
    }

    onLogout() {
        this.setState({
            isLoggedIn: false
        })
        console.log("user logged out")
    }

    formChalao() {
        this.setState({
            form: true
        })
    }

    hideForm() {
        this.setState({
            form: false
        })
    }

    addUser(user) {
        const { users } = this.state;
        let newObj = user;
        console.log(newObj);
        users.push(newObj)

        this.setState({
            users
        })
    //     const { users } = this.state;
      
    //    users.push(user);
       console.log(this.state.users)
    }


}

export default App2;