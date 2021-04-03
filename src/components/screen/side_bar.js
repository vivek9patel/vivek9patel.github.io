import React, { Component } from 'react'
import SideBarApp from '../base/side_bar_app';

export class SideBar extends Component {
    render() {
        return (
            <div className="absolute select-none z-40 left-0 top-0 h-full pt-10 w-auto flex flex-col justify-start items-center border-black border-opacity-60 bg-black bg-opacity-50">
                <SideBarApp id="chrome" title="chrome" isClose={this.props.closed_windows} isFocus={this.props.focused_windows} icon={this.props.icons.chrome} openApp={this.props.openAppByAppId} />
            </div>
        )
    }
}

export default SideBar
