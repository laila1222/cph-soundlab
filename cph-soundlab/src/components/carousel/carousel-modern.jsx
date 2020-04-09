import React, { Component } from "react";
import Coverflow from "react-coverflow";
// Import images
import Record1 from "../../images/records/c6y-vw.jpg";
import "./_carousel.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  foo = () => {
    console.log("clicked");
  };

  render() {
    return (
      //   (
      <Coverflow
        width="960"
        height="500"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={true}
        clickable={true}
        active={0}
      >
        <div
          onClick={() => this.foo()}
          onKeyDown={() => this.foo()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={Record1}
            alt="title or description"
            style={{
              display: "block",
              width: "100%",
            }}
          />
        </div>
        <img
          src={Record1}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src={Record1}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
      </Coverflow>

      //   document.querySelector(".content")
    );
  }
}

export default Carousel;
