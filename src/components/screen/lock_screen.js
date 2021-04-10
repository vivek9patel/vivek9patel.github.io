import React, { useEffect } from 'react'
import Clock from '../util components/clock'

export default function LockScreen(props) {

    useEffect(() => {
        window.addEventListener('click', unLockScreen);
        window.addEventListener('keypress', unLockScreen);
        return () => {
            window.removeEventListener('click', unLockScreen);
            window.removeEventListener('keypress', unLockScreen);
        }
    });

    let unLockScreen = () => {
        props.unLockScreen();
    }

    return (
        <div style={{ backgroundImage: `url(${props.bgImgPath})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className=" absolute top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-opacity-50">
            <div className="lock-screen flex flex-col justify-center items-center text-white">
                <div className=" text-7xl">
                    <Clock onlyTime={true} />
                </div>
                <div className="mt-4 text-xl font-medium">
                    <Clock onlyDay={true} />
                </div>
                <div className=" mt-16 text-base">
                    Click or Press a key to unlock
                </div>
            </div>
        </div>
    )
}
