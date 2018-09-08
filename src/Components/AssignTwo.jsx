import React, { Component } from "react";

class AssignTwo extends Component {
  state = {
    text: 'Hello World',
    textState: true
  };



 changeText = () => {
if (this.state.textState) {
  this.setState({
    text: 'Hello Saylani',
    textState: false
  })
} else {
  this.setState({
    text: 'Hello World',
    textState: true
  })
}
  }

  render() {
    return (
      <div className="container">
      <p className="display-1"><span className="badge badge-info">Saylani React Assignment 2</span></p>
      <p className="display-2"><span className="badge badge-dark">{this.state.text}</span></p>
      <button className="btn btn-success display-4 btn-lg" onClick={this.changeText}>Change Text</button>
    </div>
  )
  }
}

export default AssignTwo;
