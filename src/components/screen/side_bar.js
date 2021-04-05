import React, { Component } from 'react'
import SideBarApp from '../base/side_bar_app';
import AllApps from '../util components/sidebar_all_apps';

export class SideBar extends Component {

    renderApps = () => {
        let sideBarAppsJsx = [];
        this.props.apps.forEach((app, index) => {
            if (this.props.favourite_apps[app.id] === false) return;
            sideBarAppsJsx.push(
                <SideBarApp key={index} id={app.id} title={app.title} icon={app.icon} isClose={this.props.closed_windows} isFocus={this.props.focused_windows} openApp={this.props.openAppByAppId} />
            );
        });
        return sideBarAppsJsx;
    }

    render() {
        return (
            <div className="absolute select-none z-40 left-0 top-0 h-full pt-7 w-auto flex flex-col justify-start items-center border-black border-opacity-60 bg-black bg-opacity-50">
                {
                    (
                        Object.keys(this.props.closed_windows).length !== 0
                            ? this.renderApps()
                            : null
                    )
                }
                <AllApps />
            </div>
        )
    }
}

export default SideBar
