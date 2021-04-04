import React, { Component } from 'react'
import RegisterApp from '../base/register_app';
import BackgroundImage from '../util components/background-image'
import SideBar from './side_bar';
import apps from '../../apps.config';
import Window from '../base/window';

export class Desktop extends Component {
    constructor() {
        super();
        this.state = {
            cursorWait: false,
            focused_windows: {},
            closed_windows: {}
        }
    }

    componentDidMount() {
        // set window properties for all apps
        let focused_windows = {}, closed_windows = {};
        apps.forEach((app) => {
            focused_windows = {
                ...focused_windows,
                [app.id]: false,
            };
            closed_windows = {
                ...closed_windows,
                [app.id]: true,
            };
        });
        this.setState({
            focused_windows: focused_windows,
            closed_windows: closed_windows,
        });
    }

    renderDesktopApps = () => {
        if (Object.keys(this.state.closed_windows).length === 0) return;
        let appsJsx = [];
        let extra = 40, padd = 3;
        apps.forEach((app, index) => {
            appsJsx.push(
                <RegisterApp key={index} name={app.title} id={app.id} icon={app.icon} position={{ top: extra + 80 * index + padd, right: 4 }} disabled={false} openApp={this.openApp} closeApp={this.closeApp} focus={this.focus} focused_windows={this.state.focused_windows} closed_windows={this.state.closed_windows} />
            );
            extra += padd;
        });
        return appsJsx;
    }

    renderWindows = () => {
        let windowsJsx = [];
        apps.forEach((app, index) => {
            if (app.disabled === false && this.state.closed_windows[app.id] === false) {
                windowsJsx.push(
                    <Window key={index} title={app.title} id={app.id} closed={this.closeApp} focus={this.focus} isFocused={this.state.focused_windows[app.id]} />
                )
            }
        });
        return windowsJsx;
    }

    openApp = (objId) => {
        let closed_windows = this.state.closed_windows;
        this.setState({ cursorWait: true });
        setTimeout(() => {
            closed_windows[objId] = false;
            this.setState({ closed_windows, cursorWait: false }, this.focus(objId));
        }, Math.random() * 1000);
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
            <div className={(this.state.cursorWait ? " cursor-wait " : " cursor-default ") + " h-full w-full flex flex-col flex-wrap items-end pt-8 bg-transparent relative overflow-hidden overscroll-none window-parent"}>

                {/* Window Area */}
                <div className="absolute h-full w-full bg-transparent">
                    {this.renderWindows()}
                </div>

                {/* Background Image */}
                <BackgroundImage img={this.props.bg_img_path} />

                {/* Ubuntu Side Menu Bar */}
                <SideBar apps={apps} closed_windows={this.state.closed_windows} focused_windows={this.state.focused_windows} openAppByAppId={this.openApp} />

                {/* Desktop Apps */}
                {this.renderDesktopApps()}

            </div>
        )
    }
}

export default Desktop
