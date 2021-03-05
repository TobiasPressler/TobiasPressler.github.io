import React, { Component } from "react";
import Typewriter from 'typewriter-effect';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FirstPage extends Component {
  render() {
    return <div className="text-white text-center">
      <h1 className="text-5xl">I'm Tobias Pressler</h1>
      <div className="text-xl">
        <Typewriter
          options={{
            strings: ['Full Stack Developer', 'Flutter App Developer', 'NodeJS Developer'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="text-5xl"><a className="cursor-pointer" onClick={x => this.props.fullPage.current.scrollToSlide(1)}><FontAwesomeIcon icon={faAngleDown} /></a></div>
    </div>;
  }
}

export default FirstPage;
