import React from "react";
// Importing images
import StudioImage1 from '../../images/studio.JPG';

import './_studio.scss';

function Studio() {
  return (
    <section className="section-studio">
      <div className="studio__content u-center-middle">
        <h2 className="secondary-headline u-margin-bottom-medium">Studio</h2>
        <div className="studio__images-container">
            <img src={StudioImage1} alt="studio" className="studio__image studio__image--1"/>
            <img src={StudioImage1} alt="studio" className="studio__image studio__image--2"/>
            <img src={StudioImage1} alt="studio" className="studio__image studio__image--3"/>

        </div>
      </div>
    </section>
  );
}

export default Studio;
