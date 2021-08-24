import React from 'react';

// step 2 - write code for component
class LanguagePickerState extends React.Component {
    constructor() {
        super()
        this.state = {
            language: "🇰🇷"
        }
    }
    korean = () => {
        this.setState({
            language: "🇰🇷"
        })   
    }
    japanese = () => {
        this.setState({
            language: "🇯🇵"
        })   
    }
    
    chinese = () => {
        this.setState({
            language: "🇨🇳"
        })
    }
    mongolian = () => {
        this.setState({
            language: "🇲🇳"
        })
    }

    render() {
        
        return (
            <div>
            <h2>{this.state.language}</h2>
            <button onClick={this.korean}>🇰🇷</button>
            <button onClick={this.japanese}>🇯🇵</button>
            <button onClick={this.chinese}>🇨🇳</button>
            <button onClick={this.mongolian}>🇲🇳</button>
            </div>
        )
    }
}

// 
export default LanguagePickerState;