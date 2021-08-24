import React from 'react';

// step 2 - write code for component
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 46
        }
    }
    plusClick = () => {
            this.setState({
                // setting this attributes
            count: this.state.count + 1
        })
    }
    minusClick = () => {
        this.setState({
        count: this.state.count - 1
    })
}


    render() {
        return (
            <div className='counter'> 
                <button onClick={this.minusClick}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.plusClick}>+</button>
            </div>
        )
    }
}

// 
export default Counter