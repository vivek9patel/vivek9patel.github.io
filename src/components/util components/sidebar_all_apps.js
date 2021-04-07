import React, { Component } from 'react'

export class AllApps extends Component {
    constructor() {
        super();
        this.state = {
            showTitle: false,
        }
    }
    render() {
        return (
            <div
                className="absolute bottom-0 w-10 h-10 rounded m-1 hover:bg-white hover:bg-opacity-10 flex items-center justify-center"
                onMouseEnter={() => {
                    this.setState({ showTitle: true });
                }}
                onMouseLeave={() => {
                    this.setState({ showTitle: false });
                }}
            >
                <img className="w-7" src="./themes/Yaru/system/view-app-grid-symbolic.svg" alt="Ubuntu view app" />
                <div
                    className={
                        (this.state.showTitle ? " visible " : " invisible ") +
                        " w-max py-0.5 px-1.5 absolute top-1 left-full ml-3 m-1 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md"
                    }
                >
                    Show Applications
                </div>
            </div>
        )
    }
}

export default AllApps
