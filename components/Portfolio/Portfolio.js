import React, { Component } from "react";
import { FullPage, Slide } from 'react-full-page';
import Background from "../Background/Background";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";

class Portfolio extends Component {
  constructor() {
    super()
    this.fullPage = React.createRef();
  }

  render() {
    return <FullPage ref={this.fullPage}>
      <Slide>
        <Background>
          <FirstPage fullPage={this.fullPage} />
        </Background>
      </Slide>
      <Slide>
        <SecondPage />
      </Slide>
    </FullPage>;
  }
}

export default Portfolio;
