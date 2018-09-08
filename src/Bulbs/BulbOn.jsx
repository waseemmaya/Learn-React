import React, { Component } from 'react';
import onImg from './onBulb.jpg';
import "./css.css"

class BulbOn extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() { 
        return ( 
            <div>
            <div>
               <img src={onImg} className="img" alt="onBulb" />
            </div>
            <div>
                <button onClick={this.props.turnOff}>
                    Turn Off
                </button>
            </div>
            </div>
         );
    }
}
 
export default BulbOn;