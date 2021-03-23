import React, { Component } from 'react'
import BackgroundImage from '../util components/background-image'

export class Desktop extends Component {
    render() {
        return (
            <div className="h-full w-full pt-6 bg-transparent">
                <BackgroundImage img={this.props.bg_img_path} />
            </div>
        )
    }
}

export default Desktop
