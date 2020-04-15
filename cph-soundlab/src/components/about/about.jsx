import React from "react";
import AndersImage from "../../images/man1.jpg";
import EdvinImage from "../../images/man2.jpg";
import "./_about.scss";

function About() {
  return (
    <section className="section-about about">
      <div className="about-container">
        <div className="about__intro">
          <h1 className="primary-headline u-center-middle">
            We specialise in music recording, composition, sound design, podcast
            production, post production, foley effects and mixing.
          </h1>
        </div>
        <div className="about__content">
          <p className="paragraph about__paragraph u-margin-bottom-small">
            Copenhagen Sound Lab is a music and sound design studio run by Edvin
            Wikner and Anders Dahl.
          </p>
          <p className="paragraph about__paragraph u-margin-bottom-medium">
            Ranging broad yet going deep into the exploration of frequencies,
            our approach is both scientific and experimental. We are not defined
            by the norm of traditional audio recording and processing, but go
            above and beyond in our search for the key to elevate every single
            project.
          </p>

          <p className="paragraph about__paragraph u-margin-bottom-medium">
            We are curious, exploratory and visionary benders of harmonic
            curves.
          </p>

          <div className="about__images-container">
            <img src={AndersImage} alt="Anders" className="about__image" />
            <img src={EdvinImage} alt="Edvin" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
