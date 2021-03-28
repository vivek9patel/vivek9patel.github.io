import React, { Component } from 'react'
import UbuntuApp from '../base/ubuntu_app';
import Window from '../base/window';

export class RegisterApp extends Component {
    render() {
        return (
            <>
                <UbuntuApp name={this.props.name} id={this.props.id} openApp={this.props.openApp} />
                {
                    this.props.closed_windows[this.props.id] ? null : <Window title={this.props.name} id={this.props.id} closed={this.props.closeApp} focus={this.props.focus} isFocused={this.props.focused_windows[this.props.id]} />
                }
            </>
        )
    }
}

export default RegisterApp
