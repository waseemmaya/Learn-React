import React, { Component } from 'react';

import BulbOn from "./BulbOn";
import BulbOff from "./BulbOff";
import BulbBroken from "./BulbBroken";


import "./css.css"



import "./css.css"

class DefaultBulb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulb: false,
            enableButton: false,
            torde: false
        }
    }
    render() {
        const { bulb, enableButton, torde } = this.state;
        return (
            <div className="container">
                {!bulb && !enableButton && < BulbOff turnOn={this.turnOn} />}
                {bulb && !enableButton && < BulbOn turnOff={this.turnOff} />}
                {!bulb && enableButton && <div>< BulbOff /> <button className="btn btn-warning btn-lg" onClick={this.breakBulb}>Break</button></div>}
                {torde && bulb && enableButton && < BulbBroken turnOn={this.turnOn} />}
            </div>
        );
    }

    turnOn = () => {
        this.setState({
            bulb: true,
            torde: false,
            enableButton: false
        })
    }

    turnOff = () => {
        this.setState({
            bulb: false,
            enableButton: true
        })
    }

    breakBulb = () => {
        this.setState({
            bulb: true,
            enableButton: true,
            torde: true
        })
    }


}

export default DefaultBulb;