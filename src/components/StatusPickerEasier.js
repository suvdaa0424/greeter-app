import React from 'react';

// step 2 - write code for component
class StatusPickerEasier extends React.Component {
    constructor() {
        super()
        this.state = {
            status: "Active"
        }
    }
    updateStatus = (status) => {
        this.setState({
            status: status
        });
    };

    render() {
        
        return (
            <div>
            <h2>{this.state.status}</h2>
            <button onClick={() => this.updateStatus("Active")}>Active</button>
            <button onClick={() => this.updateStatus("Away")}>Away</button>
            <button onClick={() => this.updateStatus("Offline")}>Offline</button>
            </div>
        )
    }
}

// 
export default StatusPickerEasier;