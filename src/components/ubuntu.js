import React, { Component } from "react";
import Desktop from "./screen/desktop";
import Navbar from "./screen/navbar";

export default class Ubuntu extends Component {
  constructor() {
    super();
    this.state = {
      bg_image_path: "./images/wallpapers/wall-1.jpg",
    }
  }
  render() {
    return (
      <div className="w-screen h-screen overflow-hidden">
        <Navbar />
        <Desktop bg_img_path={this.state.bg_image_path} />
      </div>
    );
  }
}
