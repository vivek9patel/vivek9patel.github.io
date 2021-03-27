import React, { Component } from 'react'

export class BackgroundImage extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${this.props.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
            </div>
        )
    }
}

export default BackgroundImage
