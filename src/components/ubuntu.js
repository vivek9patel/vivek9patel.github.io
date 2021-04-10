import React, { Component } from "react";
import Desktop from "./screen/desktop";
import Navbar from "./screen/navbar";

export default class Ubuntu extends Component {
  render() {
    return (
      <div className="w-screen h-screen overflow-hidden">
        <Navbar />
        <Desktop />
      </div>
    );
  }
}
