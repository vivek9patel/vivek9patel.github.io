import React, { Component } from 'react';
export class WindowMainScreen extends Component {
    render() {
        return (
            <div className="bg-white w-full flex-grow z-20">
                {this.props.screen()}
            </div>
        )
    }
}

export default WindowMainScreen
