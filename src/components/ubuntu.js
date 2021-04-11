import React, { Component } from "react";
import Desktop from "./screen/desktop";
import LockScreen from "./screen/lock_screen";
import Navbar from "./screen/navbar";

export default class Ubuntu extends Component {
  constructor() {
    super();
    this.state = {
      screen_locked: false,
      bg_image_path: "./images/wallpapers/wall-2.png",
      close_all_windows: false,
    }
  }

  componentDidMount() {
    this.getLocalData();
  }

  getLocalData = () => {
    // Get Previously selected Background Image
    let bg_image_path = localStorage.getItem("bg-image");
    if (bg_image_path !== null && bg_image_path !== undefined) {
      this.setState({ bg_image_path });
    }

    // Get previous screen state
    let screen_locked = localStorage.getItem("screen-locked");
    if (screen_locked !== null && screen_locked !== undefined) {
      this.setState({ screen_locked: (screen_locked === "true" ? true : false) });
    }
  }

  lockScreen = () => {
    this.setState({ close_all_windows: true });
    setTimeout(() => {
      this.setState({ screen_locked: true });
    }, 400);
    localStorage.setItem("screen-locked", true);
  }

  unLockScreen = () => {
    this.setState({ close_all_windows: false });
    setTimeout(() => {
      this.setState({ screen_locked: false });
    }, 400);
    localStorage.setItem("screen-locked", false);
  }

  changeBackgroundImage = (img_path) => {
    this.setState({ bg_image_path: img_path });
    localStorage.setItem("bg-image", img_path);
  }

  render() {
    return (
      <div className="w-screen h-screen overflow-hidden">
        {
          (this.state.screen_locked
            ? <LockScreen bgImgPath={this.state.bg_image_path} unLockScreen={this.unLockScreen} />
            :
            <>
              <Navbar lockScreen={this.lockScreen} />
              <Desktop bg_image_path={this.state.bg_image_path} changeBackgroundImage={this.changeBackgroundImage} closeAllApps={this.state.close_all_windows} />
            </>
          )
        }
      </div>
    );
  }
}
