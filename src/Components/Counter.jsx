import React, { Component } from 'react';
class Counter extends Component {
    state = {
        name: "Waseem",
        num: 0,
        tags: ["tag1", "tag2", "tag3", "tag4"]
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return this.state.tags.map((tag, i) => <li key={i}>{tag}</li>);
    }

    renderIncrementButton() {
        return (
            <button
                onClick={this.handleIncrement}
                className="btn btn-secondary display-6 m-3"
                style={{ fontSize: 25 }}
            >
                Increment
      </button>
        );
    }

    renderDecrementButton() {
        return (
            <button
                onClick={this.handleDecrement}
                className="btn btn-secondary display-6 m-3"
                style={{ fontSize: 25 }}
            >
                Decrement
      </button>
        );
    }

    renderSpanQuantity() {
        return (
            <h1 className="display-5">
                <span className={this.getSpanBadgesClass()}>{this.checkQty()}</span>
            </h1>
        );
    }

    getSpanBadgesClass() {
        let spanClasses = "badge badge-";
        spanClasses += this.state.num === 0 ? "warning m-3" : "primary m-3";
        return spanClasses;
    }

    checkQty = () => {
        const { num } = this.state;
        return num === 0 ? "Zero" : num;
    };

    handleIncrement = () => {
        if (this.state.num >= 10) {
            return false;
        } else {
            this.setState({
                num: this.state.num + 1
            });
        }
    };

    handleDecrement = () => {
        if (this.state.num <= 0) {
            return false;
        } else {
            this.setState({
                num: this.state.num - 1
            });
        }
    };

    //Main Render Method
    render() {
        return (
            <div className="container">
                {this.renderIncrementButton()}
                {this.renderSpanQuantity()}
                {this.renderDecrementButton()}
                {this.renderTags()}
            </div>
        );
    }
}

export default Counter;
