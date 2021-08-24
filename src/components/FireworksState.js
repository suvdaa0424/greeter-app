import React from 'react';
class FireworksState extends React.Component {
    constructor() {
        super()
        this.state = {
            fire: false
        }
    }
    toggleClick = () => {
        this.setState({
            fire: !this.state.fire
        })
    }
    render() {
        return (
            <div>
            <button type="click" onClick={this.toggleClick}>{this.state.fire ? '🧨' : '💥'}</button>
            </div>
        )
    }
}
export default FireworksState;