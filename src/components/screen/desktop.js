import React, { Component } from 'react'
import Window from '../base/window'
import BackgroundImage from '../util components/background-image'

export class Desktop extends Component {
    constructor() {
        super();
        this.state = {
        }
    }


    focus = (objId) => {

    }

    render() {
        return (
            <div className="h-full w-full pt-6 bg-transparent overflow-hidden overscroll-none window-parent">
                <BackgroundImage img={this.props.bg_img_path} />

                {/* All Apps */}
                <Window title="Google Chrome" id="chrome_0" focus={this.focus} isFocused={true} />
                <Window title="Google Chrome1" id="chrome_1" focus={this.focus} isFocused={false} />

            </div>
        )
    }
}

export default Desktop
