import React from 'react'

function BootingScreen(props) {

    return (
        <div style={(props.visible || props.isShutDown ? { zIndex: "100" } : { zIndex: "-20" })} className={(props.visible || props.isShutDown ? " visible opacity-100" : " invisible opacity-0 ") + " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"}>
            <img width="400px" height="400px" className="md:w-1/4 w-1/2" src="./themes/Yaru/status/cof_orange_hex.svg" alt="Ubuntu Logo" />
            <div className="w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer" onClick={props.turnOn} >
                {(props.isShutDown
                    ? <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300"><img width="32px" height="32px" className="w-8" src="./themes/Yaru/status/power-button.svg" alt="Power Button" /></div>
                    : <img width="40px" height="40px" className={" w-10 " + (props.visible ? " animate-spin " : "")} src="./themes/Yaru/status/process-working-symbolic.svg" alt="Ubuntu Process Symbol" />)}
            </div>
            <img width="200px" height="100px" className="md:w-1/5 w-1/2" src="./themes/Yaru/status/ubuntu_white_hex.svg" alt="Ubuntu Name" />
            <div className="text-white mb-4">
                <a className="underline" href="https://www.linkedin.com/in/vivek9patel/" rel="noreferrer noopener" target="_blank">linkedin</a>
                <span className="font-bold mx-1">|</span>
                <a href="https://github.com/vivek9patel/vivek9patel.github.io" rel="noreferrer noopener" target="_blank" className="underline">github</a>
            </div>
        </div>
    )
}

export default BootingScreen
