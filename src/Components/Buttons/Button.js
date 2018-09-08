import React, { Component } from 'react';


class Button extends Component {

    constructor(props) {
        super(props);
      console.log(this.props)
    }
    render() {
        return <button className="btn btn-primary ml-3 mt-3 mb-3" onClick={this.props.click}>{this.props.text}</button>;
    }
}

export default Button;
