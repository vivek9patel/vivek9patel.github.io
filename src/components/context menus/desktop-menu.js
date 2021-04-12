import React from 'react'

function DesktopMenu(props) {

    let devider = () => {
        return (
            <div className="flex justify-center w-full">
                <div className=" border-t border-gray-900 py-1 w-2/5"></div>
            </div>
        );
    }

    let openTerminal = () => {
        props.openApp("terminal");
    }

    let openSettings = () => {
        props.openApp("settings");
    }

    return (
        <div id="desktop-menu" className={(props.active ? " block " : " hidden ") + " w-52 context-menu-bg border text-left font-light border-gray-900 rounded text-white py-4 absolute z-50 text-sm"}>
            <div onClick={props.addNewFolder} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">New Folder</span>
            </div>
            {devider()}
            <div className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400">
                <span className="ml-5">Paste</span>
            </div>
            {devider()}
            <div className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400">
                <span className="ml-5">Show Desktop in Files</span>
            </div>
            <div onClick={openTerminal} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">Open in Terminal</span>
            </div>
            {devider()}
            <div onClick={openSettings} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">Change Background...</span>
            </div>
            {devider()}
            <div className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400">
                <span className="ml-5">Display Settings</span>
            </div>
            <div onClick={openSettings} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">Settings</span>
            </div>
        </div>
    )
}

export default DesktopMenu
