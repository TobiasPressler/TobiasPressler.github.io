import React, { Component } from "react";
import { FullPage, Slide } from 'react-full-page';
import Background from "../Background/Background";
import Typewriter from 'typewriter-effect';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Portfolio extends Component {
  constructor() {
    super()
    this.fullpage;
  }

  render() {
    return <FullPage ref={x => this.fullpage = x}>
      <Slide>
        <Background>
          <div className="text-white text-center">
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
            <div className="text-5xl"><a onClick={x => this.fullpage.scrollToSlide(1)}><FontAwesomeIcon icon={faAngleDown} /></a></div>
          </div>
        </Background>
      </Slide>
      <Slide>
        Test2
      </Slide>
    </FullPage>;
  }
}

export default Portfolio;
