import React, { Component } from 'react'

export class UbuntuApp extends Component {

    openApp = () => {
        if (this.props.isExternalApp && this.props.url) {
            window.open(this.props.url, "_blank");
        } else {
            this.props.openApp(this.props.id);
        }
    }

    render() {
        return (
            <div
                className="p-1 m-px z-10 bg-white bg-opacity-0 hover:bg-opacity-20 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white relative"
                id={"app-" + this.props.id}
                onDoubleClick={this.openApp}
                tabIndex={0}
            >
                <div className="relative">
                    <img width="40px" height="40px" className="mb-1 w-10" src={this.props.icon} alt={"Ubuntu " + this.props.name} />
                    {this.props.isExternalApp && (
                        <img 
                            src="./themes/Yaru/status/arrow-up-right.svg" 
                            alt="External Link" 
                            className="w-2.5 h-2.5 absolute -bottom-0.5 -right-0.5"
                        />
                    )}
                </div>
                {this.props.name}
            </div>
        )
    }
}

export default UbuntuApp
