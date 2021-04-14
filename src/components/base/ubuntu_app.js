import React, { Component } from 'react'

export class UbuntuApp extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            icon: "",
        }
    }

    componentDidMount() {
        this.setState({ id: this.props.id, name: this.props.name, icon: this.props.icon })
    }


    openApp = () => {
        this.props.openApp(this.props.id);
    }

    render() {
        return (
            <div
                className="p-1 m-px z-10 bg-white bg-opacity-0 hover:bg-opacity-20 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white"
                id={"app-" + this.state.id}
                onDoubleClick={this.openApp}
                tabIndex={0}
            >
                <img className="mb-1 w-10" src={this.state.icon} alt={"Ubuntu " + this.state.name} />
                {this.state.name}
            </div>
        )
    }
}

export default UbuntuApp
