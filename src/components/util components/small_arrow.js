import React, { Component } from 'react'

export class SmallArrow extends Component {
    render() {
        let angle = this.props.angle ? this.props.angle : "up"; // default value is up
        return (
            <div className={" arrow-custom-" + angle}></div>
        )
    }
}

export default SmallArrow
