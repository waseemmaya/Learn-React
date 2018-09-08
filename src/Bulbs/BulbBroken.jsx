import React, { Component } from 'react';

import brokenImg from "./brokenBulb.jpg";

import "./css.css"

class BulbBroken extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <div>
               <img src={brokenImg} className="img" alt="onBulb" />
            </div>
            <div>
                <button onClick={this.props.turnOn}>
                    Turn On
                </button>
            </div>
            </div>
          );
    }
}
 
export default BulbBroken;