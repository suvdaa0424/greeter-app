import React from "react";

class Friend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.friendName
        };
    }
    render() {
        return (
            <div>{this.state.text} is my friend!</div>
        )
    }
}

export default Friend;