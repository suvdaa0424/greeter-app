import React from "react";
import "./Counter.css";


class CounterStateEasier extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    updateCount = (count) => {
        this.setState({
            count: this.state.count + count
        });
    };

    render() {
        return (
            <div className="Counter">
                <button onClick={() => this.updateCount(-1)}>-1</button>
                <button onClick={() => this.updateCount(-10)}>-10</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.updateCount(10)}>+10</button>
                <button onClick={() => this.updateCount(1)}>+1</button>
            </div>
        );
    }
}

export default CounterStateEasier;
