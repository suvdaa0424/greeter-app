// create class component
import React from 'react';

// defining
class Timestamp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    getMonthName(dayOfMonth) {
        const months = [
        'January',
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September',
        'October', 
        'November',
        'December'
    ]
    return months[dayOfMonth]
}
    // 
    // getDate() {
    //     var date = { currentTime: new Date().toLocaleString() };

    //     this.setState({
    //         date: date
    //     });
    // }
    resetClick = () => {
        this.setState({
        date: new Date()
    })
}


    // components should always render
    render() {
        // create new instance of date and storing in date attribute
        const date = this.state.date;
        const time = date.toLocaleTimeString();
        const month = this.getMonthName(date.getMonth())
        const day = date.getDate();
        let suffix = 'th'
        if (day === 1 || day === 21 || day === 31) {
            suffix = 'st'
        } else if (day === 2 || day === 22) {
            suffix = 'nd'
        } else if (day === 3 || day === 23) {
            suffix = 'rd'
        
        }

        return (
            <div>
                <div>{month} {day}{suffix}, {time}</div>
                <button onClick={this.resetClick}>⏰</button>
            </div>
        )
    }
}

// export the component
export default Timestamp