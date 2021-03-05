import React, { Component } from "react";
import NET from 'vanta/dist/vanta.net.min.js'

class Background extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      //minHeight: 200.00,
      // minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x33a7c0,
      backgroundColor: 0x221b1b,
      points: 14.00,
      maxDistance: 24.00,
      spacing: 18.00
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef} className="h-screen flex">
      <div className="m-auto">
        {this.props.children}
      </div>
    </div>
  }
}

export default Background;
