import React from 'react';

// step 2 - write code for component
class CounterState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    plus1Click = () => {
        this.setState({
            // setting this attributes
            count: this.state.count + 1
        })
    }
    minus1Click = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    plus10Click = () => {
        this.setState({
            // setting this attributes
            count: this.state.count + 10
        })
    }
    minus10Click = () => {
        this.setState({
            count: this.state.count - 10
        })
    }


    render() {
        return (
            <div className='counter'>
                <button onClick={this.minus1Click}>-1</button>
                <button onClick={this.minus10Click}>-10</button>
                <span>{this.state.count}</span>
                <button onClick={this.plus1Click}>+1</button>
                <button onClick={this.plus10Click}>+10</button>
            </div>
        )
    }
}

// 
export default CounterState