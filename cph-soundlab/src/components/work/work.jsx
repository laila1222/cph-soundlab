import React from "react";
import Carousel from "../carousel/carousel";
import "./_work.scss";

function Work() {
  return (
      <section className="section-work">
        <div className="u-center-middle " >
          <h2 className="secondary-headline" data-aos='fade-up'>Work</h2>
          <Carousel />
        </div>
      </section>
  );
}

export default Work;
