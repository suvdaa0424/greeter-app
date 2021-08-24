import React from 'react';
class TimestampClock extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            paused: false
        }
    }
    getMonthName(dayOfMonth) {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            "June",
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        return months[dayOfMonth]
    }
    updateTime = () => {
        if (this.state.paused === false)
        this.setState({
            date: new Date()
        })   
    }
    componentDidMount() {
        setInterval(this.updateTime, 1000)
    }
    toggleClock = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    getSuffix(day) {
        let suffix = 'th';
        if (day === 1 || day === 21 || day === 31) {
            suffix = 'st'
        } else if (day === 2 || day === 22 || day === 32){
            suffix = 'nd'
        }else if (day === 3 || day === 23 || day === 33) {
            suffix = 'rd'
        }
        return suffix
    }
    render() {
        const date = this.state.date;
        const time = date.toLocaleTimeString()
        const month = this.getMonthName(date.getMonth())
        const day = date.getDate()
        const suffix = this.getSuffix(day)
        return (
            <div>
            <div>{month} {day}{suffix},{time} </div>
            <button type="click" onClick={this.toggleClock} >🕰</button>
            </div>
        )
    }
}
export default TimestampClock