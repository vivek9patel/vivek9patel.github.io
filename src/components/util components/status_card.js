import React, { Component } from 'react'
import SmallArrow from './small_arrow'

export class StatusCard extends Component {
    constructor() {
        super();
        this.state = {
            sound_level: 75,
            brightness_level: 10,
        }
    }

    componentDidMount() {
        let sound_level = localStorage.getItem("sound-level");
        if (sound_level !== null && sound_level !== undefined) {
            this.setState({ sound_level });
        }

        let brightness_level = localStorage.getItem("brightness-level");
        if (brightness_level !== null && brightness_level !== undefined) {
            this.setState({ brightness_level });
        }
    }

    handleBrightness = (e) => {
        this.setState({ brightness_level: e.target.value });
        localStorage.setItem("brightness-level", e.target.value);
    }

    handleSound = (e) => {
        this.setState({ sound_level: e.target.value });
        localStorage.setItem("sound-level", e.target.value);
    }

    render() {
        return (
            <div className={"absolute bg-ub-cool-grey rounded-md py-4 top-9 right-3 shadow border-black border border-opacity-20 status-card" + (this.props.visible ? " visible animateShow" : " invisible")}> {/* Status Card */}
                <div className="absolute w-0 h-0 -top-1 right-6 top-arrow-up"></div>
                <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
                    <div className="w-8">
                        <img src="./themes/Yaru/status/audio-headphones-symbolic.svg" alt="ubuntu headphone" />
                    </div>
                    <input type="range" onChange={this.handleSound} className="ubuntu-slider w-2/3" name="headphone_range" min="0" max="100" value={this.state.sound_level} step="1" />
                </div>
                <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
                    <div className="w-8">
                        <img src="./themes/Yaru/status/display-brightness-symbolic.svg" alt="ubuntu brightness" />
                    </div>
                    <input type="range" onChange={this.handleBrightness} className="ubuntu-slider w-2/3" name="brightness_range" min="0" max="100" value={this.state.brightness_level} step="1" />
                </div>
                <div className="w-64 flex content-center justify-center">
                    <div className="w-2/4 border-black border-opacity-50 border-b my-2 border-solid"></div>
                </div>
                <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
                    <div className="w-8">
                        <img src="./themes/Yaru/status/network-wireless-signal-good-symbolic.svg" alt="ubuntu wifi" />
                    </div>
                    <div className="w-2/3 flex items-center justify-between text-gray-400">
                        <span>OnePlus 8 Pro</span>
                        <SmallArrow angle="right" />
                    </div>
                </div>
                <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
                    <div className="w-8">
                        <img src="./themes/Yaru/status/bluetooth-symbolic.svg" alt="ubuntu bluetooth" />
                    </div>
                    <div className="w-2/3 flex items-center justify-between text-gray-400">
                        <span>Off</span>
                        <SmallArrow angle="right" />
                    </div>
                </div>
                <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
                    <div className="w-8">
                        <img src="./themes/Yaru/status/battery-good-symbolic.svg" alt="ubuntu battery" />
                    </div>
                    <div className="w-2/3 flex items-center justify-between text-gray-400">
                        <span>2:40 Remaining (75%)</span>
                        <SmallArrow angle="right" />
                    </div>
                </div>
                <div className="w-64 flex content-center justify-center">
                    <div className="w-2/4 border-black border-opacity-50 border-b my-2 border-solid"></div>
                </div>
                <div id="open-settings" className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
                    <div className="w-8">
                        <img src="./themes/Yaru/status/emblem-system-symbolic.svg" alt="ubuntu settings" />
                    </div>
                    <div className="w-2/3 flex items-center justify-between">
                        <span>Settings</span>
                    </div>
                </div>
                <div onClick={this.props.lockScreen} className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
                    <div className="w-8">
                        <img src="./themes/Yaru/status/changes-prevent-symbolic.svg" alt="ubuntu lock" />
                    </div>
                    <div className="w-2/3 flex items-center justify-between">
                        <span>Lock</span>
                    </div>
                </div>
                <div onClick={this.props.shutDown} className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
                    <div className="w-8">
                        <img src="./themes/Yaru/status/system-shutdown-symbolic.svg" alt="ubuntu power" />
                    </div>
                    <div className="w-2/3 flex items-center justify-between">
                        <span>Power Off / Log Out</span>
                        <SmallArrow angle="right" />
                    </div>
                </div>
            </div>
        )
    }
}

export default StatusCard
