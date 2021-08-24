import React from "react";
import rot13 from "rot-thirteen";

class Translator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.initialText || "",
            translated: rot13(props.initialText)
        };
    }

    handleTextChange = (event) => {
        console.log(event.target.value);
        this.setState({
            text: event.target.value,
            translated: rot13(event.target.value)
        })
    }

    render() {
        return (
            <div>
                {this.state.translated}
                <br />
                <input type="text" onChange={this.handleTextChange} value={this.state.text}/>
            </div>
        )
    }
}

export default Translator;