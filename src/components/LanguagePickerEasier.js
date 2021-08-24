import React from 'react';

// step 2 - write code for component
class LanguagePickerEasier extends React.Component {
    constructor() {
        super()
        this.state = {
            flag: "🇰🇷"
        }
    }
    updateFlag = (flag) => {
        this.setState({
            flag: flag
        });
    };

    render() {
        
        return (
            <div>
            <h2>{this.state.flag}</h2>
            <button onClick={() => this.updateFlag("🇰🇷")}>🇰🇷</button>
            <button onClick={() => this.updateFlag("🇯🇵")}>🇯🇵</button>
            <button onClick={() => this.updateFlag("🇨🇳")}>🇨🇳</button>
            <button onClick={() => this.updateFlag("🇲🇳")}>🇲🇳</button>
            </div>
        )
    }
}

// 
export default LanguagePickerEasier;