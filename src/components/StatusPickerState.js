import React from 'react';

// step 2 - write code for component
class StatusPickerState extends React.Component {
    constructor() {
        super()
        this.state = {
            status: "Active"
        }
    }
    statusActive = () => {
        this.setState({
            status: "Active"
        })   
    }
    statusAway = () => {
        this.setState({
            status: "Away"
        })   
    }
    
    statusOffline = () => {
        this.setState({
            status: "Offline"
        })
    }

    render() {
        
        return (
            <div>
            <h2>{this.state.status}</h2>
            <button onClick={this.statusActive}>Active</button>
            <button onClick={this.statusAway}>Away</button>
            <button onClick={this.statusOffline}>Offline</button>
            </div>
        )
    }
}

// 
export default StatusPickerState;