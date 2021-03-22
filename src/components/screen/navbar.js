import React, { Component } from 'react'
import Clock from '../util components/clock';
import $ from "jquery";

export default class Navbar extends Component {

    constructor(){
        super();
        this.state = {
            component_focused: false,
            prev_component: null,
        }
    }

    display_btm_bar = (e) => {
        if(!$(e.target).is("div")) return;
        if(this.state.prev_component !== null){
            this.state.prev_component.target.classList.remove("navbar-box-active");
        }

        e.target.classList.add("navbar-box-active");
        this.setState({component_focused: true, prev_component: e});
    }

    render() {
        return (
            <div className="w-screen flex flex-nowrap justify-between items-center bg-ub-grey text-ubt-grey text-sm select-none	cursor-default">
                <div className="pl-3 pr-3 navbar-box" onClick={this.display_btm_bar}>Activities</div>
                <div className="pl-2 pr-2 navbar-box" onClick={this.display_btm_bar}><Clock/></div>
                <div className="pr-3 pl-3 navbar-box" onClick={this.display_btm_bar}>
                    <span className="mx-2"><img src="./images/icons/status/network-wireless-signal-good-symbolic.svg" alt="ubuntu wifi" className="inline"/></span>
                    <span className="mx-2"><img src="./images/icons/status/audio-volume-medium-symbolic.svg" alt="ubuntu sound" className="inline"/></span>
                    <span className="mx-2"><img src="./images/icons/status/battery-good-symbolic.svg" alt="ubuntu battry" className="inline"/></span>
                </div>
            </div>
        )
    }
}
