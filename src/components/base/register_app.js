import React, { Component } from 'react'
import UbuntuApp from '../base/ubuntu_app';

export class RegisterApp extends Component {
    render() {
        return (
            <UbuntuApp name={this.props.name} id={this.props.id} icon={this.props.icon} position={this.props.position} openApp={this.props.openApp} />
        )
    }
}

export default RegisterApp
