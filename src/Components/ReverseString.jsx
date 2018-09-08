import React, { Component } from 'react';

class ReverseString extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            list: []
        }

        this.updateText = this.updateText.bind(this);
        this.add = this.add.bind(this);
    }
    render() {
        const { text, list } = this.state;
        return (
            <div>
               <div className="text-center">
               <h1 className="display-4">Add Text</h1></div>
                <input
                    className="form-control"
                    placeholder="Enter Text"
                    value={this.state.text}
                    onChange={this.updateText}
                />
                <div className="text-center">
                    <button className="btn btn-primary btn-lg" onClick={this.add}>Add</button>
                </div>
                <div>
                    <h1>{text.split('').reverse()}</h1>
                    <div>
                        {list.map((item, i) => {
                            const isChecked = item.checked;
                            return <ul className="text-center list-group" key={i}>
                                <li className="list-group-item">
                                    {!isChecked && <p>{item.text} | {item.date}</p>}
                                    {!isChecked ?
                                        <button onClick={this.saveIndex.bind(this, i)} className="btn ml-3 btn-warning btn-sm">Hide</button>
                                        :
                                        <button onClick={this.show.bind(this,i)} className="btn ml-3 btn-warning btn-sm">Show</button>}
                                </li>
                            </ul>
                        })}
                    </div>
                </div>
            </div>
        );
    }

    saveIndex(i) {
        const { list } = this.state;
        list[i].checked = true;
        this.setState({
            list
        })
    }

    show(i) {
        const { list } = this.state;
        list[i].checked = false;
        this.setState({
            list
        })
    }


    add() {
        const { text, list } = this.state;
        const obj = { text, date: new Date().toString() };

        list.push(obj);
        this.setState({
            list: list,
            text: ''
        })
    }

    updateText = e => {
        this.setState({
            text: e.target.value
        });
    };
}

export default ReverseString;