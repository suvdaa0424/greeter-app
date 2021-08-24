import React from 'react';

class Greeter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        if (this.state.count >=10) {
            this.setState({ count: 0})
        } else {
            this.setState({
            count: this.state.count + 1
        })
    }
}

    render() {
        return (
            <div className='greeter'> 
                <span className='first-word'>hello</span> {this.props.name || 'world'}!
                <button onClick={this.handleClick}>👋</button>
                <span>{this.state.count}</span>
            </div>
        )
    }
}

// 
export default Greeter