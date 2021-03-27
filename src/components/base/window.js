import React, { Component } from 'react'
import Draggable from 'react-draggable'
import WindowTopBar from '../util components/window-top-bar'
import { WindowYBorder, WindowXBorder } from '../util components/window_border';
import WindowMainScreen from '../util components/window_main_screen';
import WindowEditButtons from '../util components/window_edit_buttons';

export class Window extends Component {
    constructor() {
        super();
        this.id = null;
        this.state = {
            cursorType: "cursor-default",
            width: 60,
            height: 85,
            closed: false,
            isFocused: true,
            parentSize: {
                height: 100,
                width: 100
            }
        }
    }

    componentDidMount() {
        this.id = this.props.id;
        this.setState({ isFocused: this.props.isFocused });
        this.resizeBoundries();
    }

    resizeBoundries = () => {
        this.setState({
            parentSize: {
                height: window.innerHeight //parent height
                    - (window.innerHeight * (this.state.height / 100.0))  // this window's height
                    - 28 // some padding
                ,
                width: window.innerWidth // parent width
                    - (window.innerWidth * (this.state.width / 100.0)) //this window's width
                    - 4 // some padding,
            }
        });
    }

    changeCursorToMove = () => {
        this.setState({ cursorType: "cursor-move" })
    }

    changeCursorToDefault = () => {
        this.setState({ cursorType: "cursor-default" })
    }

    handleVerticleResize = () => {
        this.setState({ height: this.state.height + 0.1 }, this.resizeBoundries);
    }

    handleHorizontalResize = () => {
        this.setState({ width: this.state.width + 0.1 }, this.resizeBoundries);
    }

    setWinowsPosition = () => {
        var r = document.querySelector("#" + this.id);
        var rect = r.getBoundingClientRect();
        r.style.setProperty('--window-transform-x', rect.x.toFixed(1).toString() + "px");
        r.style.setProperty('--window-transform-y', (rect.y.toFixed(1) - 24).toString() + "px");
    }

    closeWindow = () => {
        this.setWinowsPosition();
        this.setState({ closed: true });
    }

    render() {
        console.log(this.state.isFocused);
        return (
            <Draggable
                axis="both"
                handle=".bg-ub-window-title"
                grid={[1, 1]}
                scale={1}
                onStart={this.changeCursorToMove}
                onStop={this.changeCursorToDefault}
                allowAnyClick={false}
                defaultPosition={{ x: 100, y: 10 }}
                bounds={{ left: 0, top: 5, right: this.state.parentSize.width, bottom: this.state.parentSize.height }}
            >
                <div style={{ width: `${this.state.width}%`, height: `${this.state.height}%` }}
                    className={this.state.cursorType + " " + (this.state.closed ? "closed-window " : "") + " min-w-1/4 min-h-1/4 main-window absolute rounded-lg rounded-b-sm window-shadow border-black border border-opacity-40 flex flex-col z-10"}
                    onClick={this.props.focus(this.id)}
                    id={this.id}
                >
                    <WindowYBorder resize={this.handleHorizontalResize} />
                    <WindowXBorder resize={this.handleVerticleResize} />
                    <WindowTopBar title={this.props.title} />
                    <WindowEditButtons close={this.closeWindow} />
                    <WindowMainScreen />
                </div>
            </Draggable >
        )
    }
}

export default Window
