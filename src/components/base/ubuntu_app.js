import React, { Component } from 'react'

export class UbuntuApp extends Component {
    constructor() {
        super();
        this.id = "";
        this.name = "";
        this.icon = "";
        this.state = {
            desktop_shortcut: true,
            favourite: true,
        }
    }

    componentDidMount() {
        this.id = this.props.id;
        this.name = this.props.name;
    }


    openApp = () => {
        this.props.openApp(this.id);
    }

    render() {
        return (

            <div
                style={{ width: `${this.state.width}%`, height: `${this.state.height}%` }}
                className="ubuntu-app bg-white absolute right-2 top-12 select-none w-14 h-14"
                id={"app-" + this.id}
                onDoubleClick={this.openApp}
            >
                lol
            </div>
        )
    }
}

export default UbuntuApp
