import React, { Component } from "react";
import BootingScreen from "./screen/booting_screen";
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
      booting_screen: true,
      shutDownScreen: false,
    }
  }

  componentDidMount() {
    this.getLocalData();
  }

  setTimeOutBootScreen = () => {
    setTimeout(() => {
      this.setState({ booting_screen: false });
    }, 2000);
  }

  getLocalData = () => {
    // Get Previously selected Background Image
    let bg_image_path = localStorage.getItem("bg-image");
    if (bg_image_path !== null && bg_image_path !== undefined) {
      this.setState({ bg_image_path });
    }

    let booting_screen = localStorage.getItem("booting_screen");
    if (booting_screen !== null && booting_screen !== undefined) {
      // user has visited site before
      this.setState({ booting_screen: false });
    }
    else {
      // user is visiting site for the first time
      localStorage.setItem("booting_screen", false);
      this.setTimeOutBootScreen();
    }

    // get shutdown state
    let shut_down = localStorage.getItem("shut-down");
    if (shut_down !== null && shut_down !== undefined && shut_down === "true") this.shutDown();
    else {
      // Get previous lock screen state
      let screen_locked = localStorage.getItem("screen-locked");
      if (screen_locked !== null && screen_locked !== undefined) {
        this.setState({ screen_locked: (screen_locked === "true" ? true : false) });
      }
    }
  }

  lockScreen = () => {
    this.setState({ close_all_windows: true });
    setTimeout(() => {
      this.setState({ screen_locked: true });
    }, 400); // waiting for all windows to close (transition-duration)
    localStorage.setItem("screen-locked", true);
  }

  unLockScreen = () => {
    this.setState({ screen_locked: false });
    localStorage.setItem("screen-locked", false);
  }

  changeBackgroundImage = (img_path) => {
    this.setState({ bg_image_path: img_path });
    localStorage.setItem("bg-image", img_path);
  }

  shutDown = () => {
    this.setState({ shutDownScreen: true });
    localStorage.setItem("shut-down", true);
  }

  turnOn = () => {
    this.setState({ shutDownScreen: false, booting_screen: true });
    this.setTimeOutBootScreen();
    localStorage.setItem("shut-down", false);
  }

  render() {
    return (
      <div className="w-screen h-screen overflow-hidden">
        {
          (this.state.screen_locked
            ? <LockScreen bgImgPath={this.state.bg_image_path} unLockScreen={this.unLockScreen} />
            :
            <>
              <BootingScreen visible={this.state.booting_screen} isShutDown={this.state.shutDownScreen} turnOn={this.turnOn} />
              <Navbar lockScreen={this.lockScreen} shutDown={this.shutDown} />
              <Desktop bg_image_path={this.state.bg_image_path} changeBackgroundImage={this.changeBackgroundImage} closeAllApps={this.state.close_all_windows} />
            </>
          )
        }
      </div>
    );
  }
}
