import React, { Component } from 'react';

class TranslatorForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "Bruce",
            lastName: "Banner"
        };
    }

    updateFormValue = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    render() {
        return (
            <div>
                <h2>
                    {this.state.firstName} {this.state.lastName}
                </h2>
                <label>First Name </label>
                <input
                    value={this.state.firstName}
                    onChange={(event) =>
                        this.updateFormValue("firstName", event.target.value)
                    }
                />
                <br />
                <label>Last Name </label>
                <input
                    value={this.state.lastName}
                    onChange={(event) =>
                        this.updateFormValue("lastName", event.target.value)
                    }
                />
            </div>
        );
    }
}
{/* <input type="text" onChange={e => this.setState({ text: e.target.value })}/> */}
export default TranslatorForm