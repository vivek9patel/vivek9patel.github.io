import React, { Component } from 'react'
import Clock from '../util components/clock';
import $ from "jquery";
import Status from '../util components/status';
import StatusCard from '../util components/status_card';

export default class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            status_card_focused: false,
            calendar_card_focused: false,
            activity_card_focused: false,
            prev_component: null,
        }
    }

    hide_all_cards = (e) => {
        let curr_component = e.target;
        if ($(curr_component).hasClass("main-navbar-vp")) {
            this.setState({ status_card_focused: false, calendar_card_focused: false, activity_card_focused: false });
        }
    }

    display_btm_bar = (e) => {
        let curr_component = e.target;
        if ($(curr_component).parent().parent().parent().hasClass("navbar-box") && $(curr_component).hasClass("status-symbol")) curr_component = $(e.target).parent().parent().parent().get();
        if (!$(curr_component).hasClass("navbar-box")) return;

        if (this.state.prev_component !== null) {
            if (curr_component === this.state.prev_component || curr_component[0] === this.state.prev_component[0] || curr_component === this.state.prev_component[0] || curr_component[0] === this.state.prev_component) {
                if ($(curr_component).attr("data-nav-comp") === "clock") {
                    this.setState({ prev_component: curr_component, status_card_focused: false, calendar_card_focused: !this.state.calendar_card_focused, activity_card_focused: false });
                }
                else if ($(curr_component).attr("data-nav-comp") === "status") {
                    this.setState({ prev_component: curr_component, status_card_focused: !this.state.status_card_focused, calendar_card_focused: false, activity_card_focused: false });
                }
                else if ($(curr_component).attr("data-nav-comp") === "activities") {
                    this.setState({ prev_component: curr_component, status_card_focused: false, calendar_card_focused: false, activity_card_focused: !this.state.activity_card_focused });
                }
                return;
            }
        }

        if ($(curr_component).attr("data-nav-comp") === "clock") {
            this.setState({ prev_component: curr_component, status_card_focused: false, calendar_card_focused: true, activity_card_focused: false });
        }
        else if ($(curr_component).attr("data-nav-comp") === "status") {
            this.setState({ prev_component: curr_component, status_card_focused: true, calendar_card_focused: false, activity_card_focused: false });
        }
        else if ($(curr_component).attr("data-nav-comp") === "activities") {
            this.setState({ prev_component: curr_component, status_card_focused: false, calendar_card_focused: false, activity_card_focused: true });
        }
    }

    render() {
        return (
            <div onClick={this.hide_all_cards} className="main-navbar-vp absolute top-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-grey text-ubt-grey text-sm select-none z-50">
                <div className={"pl-3 pr-3 transition duration-100 ease-in-out navbar-box" + (this.state.activity_card_focused ? " navbar-box-active" : "")} data-nav-comp="activities" onClick={this.display_btm_bar}>
                    Activities
                </div>
                <div className={"pl-2 pr-2 transition duration-100 ease-in-out navbar-box" + (this.state.calendar_card_focused ? " navbar-box-active" : "")} data-nav-comp="clock" onClick={this.display_btm_bar}>
                    <Clock />
                </div>
                <div className={"relative pr-3 pl-3 transition duration-100 ease-in-out navbar-box status-bar-icons" + (this.state.status_card_focused ? " navbar-box-active" : "")} data-nav-comp="status" onClick={this.display_btm_bar}>
                    <Status />
                    <StatusCard visible={this.state.status_card_focused} />
                </div>
            </div>
        )
    }
}
