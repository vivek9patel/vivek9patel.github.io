import React, { Component } from "react";

export class SideBarApp extends Component {
    constructor() {
        super();
        this.id = null;
        this.state = {
            showTitle: false,
        };
    }

    componentDidMount() {
        this.id = this.props.id;
    }

    openApp = () => {
        this.props.openApp(this.id);
        this.setState({ showTitle: false });
    };

    render() {
        return (
            <div
                tabIndex="1"
                onClick={this.openApp}
                onMouseEnter={() => {
                    this.setState({ showTitle: true });
                }}
                onMouseLeave={() => {
                    this.setState({ showTitle: false });
                }}
                className={(this.props.isClose[this.id] === false && this.props.isFocus[this.id] ? "bg-white bg-opacity-10 " : null) + " w-auto p-2 outline-none relative transition hover:bg-white hover:bg-opacity-10 rounded m-1"}
            >
                <img className="w-7" src={this.props.icon} alt="Ubuntu App Icon" />
                {
                    (
                        this.props.isClose[this.id] === false
                            ? <div className=" w-1 h-1 absolute left-0 top-1/2 bg-ub-orange rounded-sm"></div>
                            : null
                    )
                }
                <div
                    className={
                        (this.state.showTitle ? " visible " : " invisible ") +
                        " w-max py-0.5 px-1.5 absolute top-1.5 left-full ml-3 m-1 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md"
                    }
                >
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default SideBarApp;
