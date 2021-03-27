import React, { Component } from 'react'

export class WindowMainScreen extends Component {
    render() {
        return (
            <div className="bg-white w-full flex-grow z-20">
                <iframe src="./about.html" frameBorder="0" title="temp" className="h-full w-full"></iframe>
            </div>
        )
    }
}

export default WindowMainScreen
