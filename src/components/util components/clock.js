import { Component } from 'react'

export default class Clock extends Component {
    constructor() {
        super();
        this.month_list = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        this.day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.state = { 
            hour_12: true,
            current_time: new Date() 
        };
    }

    componentDidMount() {
        this.update_time = setInterval(() => {
            this.setState({ current_time: new Date() });
        }, 1 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.update_time);
    }

    render() {
        const { current_time } = this.state;

        let day = this.day_list[current_time.getDay()];
        let hour = current_time.getHours();
        let minute = current_time.getMinutes();
        let month = this.month_list[current_time.getMonth()];
        let date = current_time.getDate().toLocaleString();
        let meridiem = (hour < 12 ? "AM" : "PM");

        if(this.state.hour_12 && hour > 12) hour -= 12;

        let display_time = day + " " + month + " " + date + " " + hour + ":" + minute + " " + meridiem;

        return display_time;
    }
}
