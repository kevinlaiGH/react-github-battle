import React, { Component } from "react";

// Function that returns another component

export default function withHover(Component, propName = "hovering") {
  return class WithHover extends Component {
    constructor(props) {
      super(props);

      this.state = {
        hovering: false
      };

      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
    }
    mouseOver() {
      this.setState({
        hovering: true
      });
    }
    mouseOut() {
      this.setState({
        hovering: false
      });
    }
    render() {
      const props = {
        [propName]: this.state.hovering,
        ...props
      };
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };
}
