import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        }
    }
    updateFormValue = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    render() {
        return (
            <div>

                <label>Name </label>
                <input
                    value={this.state.name}
                    onChange={(event) =>
                        this.updateFormValue("name", event.target.value)
                    }
                />
                <button onClick={this.state.name}>Submit!</button>
                <br />
                {this.state.name}!
            </div>
        );
    }
}
{/* <input type="text" onChange={e => this.setState({ text: e.target.value })}/> */ }
export default Input