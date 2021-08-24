import React from "react";

class NameFieldLoop extends React.Component {
    render() {
        const firstInitial = this.props.firstName[0];
        return (
            <div>
                {firstInitial}. {this.props.lastName}
            </div>
        )
    }
}

export default NameFieldLoop;