import React from "react";

class NameField extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         text: props.friendName
    //     };
    // }
    render() {
        const firstLetter = this.props.firstName.charAt(0)
        return (
            <div>{firstLetter}. {this.props.lastName}</div>
        )
    }
}

export default NameField;