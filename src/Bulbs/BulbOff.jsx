import React, { Component } from 'react';
import offIMg from './offBulb.jpg';
import "./css.css"

class BulbOff extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return ( 
            <div>
            <div>
               <img src={offIMg} className="img" alt="onBulb" />
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
 
export default BulbOff;