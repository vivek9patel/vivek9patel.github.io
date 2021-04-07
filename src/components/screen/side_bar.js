import React from 'react'
import SideBarApp from '../base/side_bar_app';
import AllApps from '../util components/sidebar_all_apps';

let renderApps = (props) => {
    let sideBarAppsJsx = [];
    props.apps.forEach((app, index) => {
        if (props.favourite_apps[app.id] === false) return;
        sideBarAppsJsx.push(
            <SideBarApp key={index} id={app.id} title={app.title} icon={app.icon} isClose={props.closed_windows} isFocus={props.focused_windows} openApp={props.openAppByAppId} isMinimized={props.isMinimized} openFromMinimised={props.openFromMinimised} />
        );
    });
    return sideBarAppsJsx;
}

export default function SideBar(props) {

    return (
        <div className={(props.hide ? " -translate-x-full " : "") + " absolute transform duration-300 select-none z-40 left-0 top-0 h-full pt-7 w-auto flex flex-col justify-start items-center border-black border-opacity-60 bg-black bg-opacity-50"}>
            {
                (
                    Object.keys(props.closed_windows).length !== 0
                        ? renderApps(props)
                        : null
                )
            }
            <AllApps />
        </div>
    )
}