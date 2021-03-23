import React, { Component } from 'react'

export class BackgroundImage extends Component {
    render() {
        return (
            <div>
                <div className="bg-ubuntu-img h-full w-full">
                    <img src={this.props.img} alt="" className="w-full" />
                </div>
            </div>
        )
    }
}

export default BackgroundImage
