import React, { useState, useEffect } from 'react'

function DesktopMenu(props) {

    const [isFullScreen, setIsFullScreen] = useState(false)

    useEffect(() => {
        document.addEventListener('fullscreenchange', checkFullScreen);
        return () => {
            document.removeEventListener('fullscreenchange', checkFullScreen);
        };
    }, [])


    const openTerminal = () => {
        props.openApp("terminal");
    }

    const openSettings = () => {
        props.openApp("settings");
    }

    const checkFullScreen = () => {
        if (document.fullscreenElement) {
            setIsFullScreen(true)
        } else {
            setIsFullScreen(false)
        }
    }

    const goFullScreen = () => {
        // make website full screen
        try {
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                document.documentElement.requestFullscreen()
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div id="desktop-menu" className={(props.active ? " block " : " hidden ") + " cursor-default w-52 context-menu-bg border text-left font-light border-gray-900 rounded text-white py-4 absolute z-50 text-sm"}>
            <div onClick={props.addNewFolder} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">New Folder</span>
            </div>
            <Devider />
            <div className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400">
                <span className="ml-5">Paste</span>
            </div>
            <Devider />
            <div className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400">
                <span className="ml-5">Show Desktop in Files</span>
            </div>
            <div onClick={openTerminal} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">Open in Terminal</span>
            </div>
            <Devider />
            <div onClick={openSettings} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">Change Background...</span>
            </div>
            <Devider />
            <div className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-gray-400">
                <span className="ml-5">Display Settings</span>
            </div>
            <div onClick={openSettings} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">Settings</span>
            </div>
            <Devider />
            <div onClick={goFullScreen} className="w-full py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">{isFullScreen ? "Exit" : "Enter"} Full Screen</span>
            </div>
        </div>
    )
}

function Devider() {
    return (
        <div className="flex justify-center w-full">
            <div className=" border-t border-gray-900 py-1 w-2/5"></div>
        </div>
    );
}


export default DesktopMenu
