import React, { Component } from 'react'

export class StatusCard extends Component {

    render() {
        return (
            <div className={"absolute bg-ub-cool-grey rounded-md py-4 top-9 right-3 border-gray-800 status-card" + (this.props.visible ? " visible animateShow" : " invisible")}> {/* Status Card */}
                <div className="absolute w-0 h-0 -top-1 right-6 top-arrow-up"></div>
                <div className="w-64 flex content-center justify-center hover:bg-ub-warm-grey bg-opacity-50">a</div>
                <div className="w-64 flex content-center justify-center hover:bg-ub-warm-grey bg-opacity-50">a</div>
                <div className="w-64 flex content-center justify-center">
                    <div className="w-2/4 border-black border-opacity-60 border-b my-2 border-solid"></div>
                </div>
                <div className="w-64 flex content-center justify-center hover:bg-ub-warm-grey bg-opacity-50">a</div>
                <div className="w-64 flex content-center justify-center hover:bg-ub-warm-grey bg-opacity-50">a</div>
                <div className="w-64 flex content-center justify-center hover:bg-ub-warm-grey bg-opacity-50">a</div>
                <div className="w-64 flex content-center justify-center">
                    <div className="w-2/4 border-black border-opacity-60 border-b my-2 border-solid"></div>
                </div>
                <div className="w-64 flex content-center justify-center hover:bg-ub-warm-grey bg-opacity-50">a</div>
                <div className="w-64 flex content-center justify-center hover:bg-ub-warm-grey bg-opacity-50">a</div>
                <div className="w-64 flex content-center justify-center hover:bg-ub-warm-grey bg-opacity-50">a</div>
            </div>
        )
    }
}

export default StatusCard
