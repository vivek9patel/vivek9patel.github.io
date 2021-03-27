import React, { Component } from 'react'
import Window from '../base/window'
import BackgroundImage from '../util components/background-image'

export class Desktop extends Component {
    constructor() {
        super();
        this.state = {
            focused_windows: {
                "chrome_0": true,
                "chrome_1": false,
            }
        }
    }


    focus = (objId) => {
        var focused_windows = this.state.focused_windows;
        focused_windows[objId] = true;
        for (let key in focused_windows) {
            if (focused_windows.hasOwnProperty(key)) {
                if (key !== objId) {
                    focused_windows[key] = false;
                }
            }
        }
        this.setState({ focused_windows });
    }

    render() {
        return (
            <div className="h-full w-full pt-6 bg-transparent overflow-hidden overscroll-none window-parent">
                <BackgroundImage img={this.props.bg_img_path} />

                {/* All Apps */}
                <Window title="Google Chrome" id="chrome_0" focus={this.focus} isFocused={this.state.focused_windows["chrome_0"]} />
                <Window title="Hmmm...." id="chrome_1" focus={this.focus} isFocused={this.state.focused_windows["chrome_1"]} />

            </div>
        )
    }
}

export default Desktop
