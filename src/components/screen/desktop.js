import React, { Component } from 'react'
import RegisterApp from '../base/register_app';
import BackgroundImage from '../util components/background-image'

export class Desktop extends Component {
    constructor() {
        super();
        this.state = {
            focused_windows: {
                "chrome_0": false,
                "chrome_1": false,
            },
            closed_windows: {
                "chrome_0": true,
                "chrome_1": true,
            }
        }
    }

    openApp = (objId) => {
        let closed_windows = this.state.closed_windows;
        closed_windows[objId] = false;
        this.setState({ closed_windows }, this.focus(objId));
    }

    closeApp = (objId) => {
        let closed_windows = this.state.closed_windows;
        closed_windows[objId] = true;
        this.setState({ closed_windows });
    }

    focus = (objId) => {
        // removes focus from all window and 
        // gives focus to window with 'id = objId'
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

                <RegisterApp name="Google Chrome" id="chrome_0" openApp={this.openApp} closeApp={this.closeApp} focus={this.focus} focused_windows={this.state.focused_windows} closed_windows={this.state.closed_windows} />
                <RegisterApp name="Google Chrome 2" id="chrome_1" openApp={this.openApp} closeApp={this.closeApp} focus={this.focus} focused_windows={this.state.focused_windows} closed_windows={this.state.closed_windows} />

            </div>
        )
    }
}

export default Desktop
