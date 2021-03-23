import React, { Component } from "react";
import SmallArrow from "./small_arrow";

export default class Status extends Component {
  render() {
    return (
      <div className="flex justify-center items-center">
        <span className="mx-1.5">
          <img
            src="./themes/Yaru/status/network-wireless-signal-good-symbolic.svg"
            alt="ubuntu wifi"
            className="inline status-symbol"
          />
        </span>
        <span className="mx-1.5">
          <img
            src="./themes/Yaru/status/audio-volume-medium-symbolic.svg"
            alt="ubuntu sound"
            className="inline status-symbol"
          />
        </span>
        <span className="mx-1.5">
          <img
            src="./themes/Yaru/status/battery-good-symbolic.svg"
            alt="ubuntu battry"
            className="inline status-symbol"
          />
        </span>
        <span className="mx-1">
          <SmallArrow angle="down" className=" status-symbol" />
        </span>
      </div>
    );
  }
}
