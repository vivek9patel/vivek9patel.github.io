import React, { Component } from 'react'

export class WindowMainScreen extends Component {
    render() {
        return (
            <div className="bg-white w-full flex-grow z-20">
                <iframe src={this.props.screen} frameBorder="0" title={this.props.title} className="h-full w-full"></iframe>
            </div>
        )
    }
}

export default WindowMainScreen
