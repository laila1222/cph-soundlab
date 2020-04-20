import React, { Component } from "react";
import SimpleCarousel from "../carousel/carousel-slick";
import CoolCarousel from "../carousel/cool-carousel";

import "./_work.scss";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="section-work" id="work">
        <div className="work u-center-middle">
          <h2
            className="secondary-headline u-margin-bottom-medium"
            data-aos="fade-up"
          >
            Work
          </h2>

          <SimpleCarousel />
          {/* <CoolCarousel /> */}
        </div>
        
      </section>
    );
  }
}

export default Work;
