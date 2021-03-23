import React, { Component } from 'react'

export default class Status extends Component {
    render() {
        return (
            <div>
                <span className="mx-2"><img src="./images/icons/status/network-wireless-signal-good-symbolic.svg" alt="ubuntu wifi" className="inline"/></span>
                <span className="mx-2"><img src="./images/icons/status/audio-volume-medium-symbolic.svg" alt="ubuntu sound" className="inline"/></span>
                <span className="mx-2"><img src="./images/icons/status/battery-good-symbolic.svg" alt="ubuntu battry" className="inline"/></span>
            </div>
        )
    }
}
