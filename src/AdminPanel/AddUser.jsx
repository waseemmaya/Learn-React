import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email2: "",
            phone: "",
            date: ""
        }
        this.add = this.add.bind(this);
    }
    render() {
        const { editClicked } = this.state;
        return (
            <div>
                <div id="userForm" className="container">
                    <h1 className="h1 text-center mt-2">Add User</h1>

                    {this.FirstName()}
                    {this.LastName()}
                    {this.Email2()}
                    {this.Salary()}
                    {this.JoiningDate()}

                    <div className="text-center">
                        {!editClicked ? (
                            <button
                                onClick={this.add}
                                className="btn btn-sm addTask btn-primary mb-3 text-center"
                            >
                                Add User
                  </button>
                        ) : (
                                <button className="btn btn-info" onClick={this.updateTask}>
                                    Update
                  </button>
                            )}
                    </div>
                </div>
            </div>
        );
    }


    add () {
        const { firstName, lastName, email2, phone, date } = this.state;

        console.log(this.props);


        this.props.jabAddKare({
            firstName: firstName,
            lastName: lastName,
            email2: email2,
            phone: phone,
            date: date
        });

        this.props.hideForm();
        // this.props.formData(this.props);
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

    handleEmail2 = email2 => {
        this.setState({
            email2: email2.target.value
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

    Email2() {
        return (
            <input
                value={this.state.email2}
                onChange={this.handleEmail2}
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
            currentIndex: index,
            editClicked: true,
            enableForm: true,
            firstName: users[index].firstName,
            lastName: users[index].lastName,
            email2: users[index].email2,
            phone: users[index].phone,
            date: users[index].handleDate
            // currentIndex: index
        });
    }

}

export default AddUser;