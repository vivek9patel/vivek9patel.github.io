import React from 'react'

export default function BackgroundImage(props) {
    return (
        <div style={{ backgroundImage: `url(${props.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
        </div>
    )
}
