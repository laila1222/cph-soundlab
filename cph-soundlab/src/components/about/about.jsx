import React from "react";
import TwoMen from "../../images/two-men.jpg";
import "./_about.scss";

function About() {
  return (
    <section className="section-about about">
      <div className="about__content">
        <div className="about__content__main-container u-margin-bottom-medium">
          <h1 className="primary-headline">
            Copenhagen Sound Lab is a music and sound design studio run by Edvin
            Wikner and Anders Dahl.
          </h1>
          <h2 className="primary-headline">
            We specialize in mucis recording, composition, sound design, podcast
            production, pos production, foley effects and mixing.
          </h2>
        </div>

        <div className="about__content__sub-container  u-flex">
          <div className="about__content__paragraphs-container u-w-60">
            <p className="paragraph about__paragraph u-margin-bottom-small">
              Ranging broad yet going deep into the exploration of frequencies,
              our approach is both scientific and experimental. We are not
              defined by the norm of traditional audio recording and processing,
              but go above and beyond in our search for the key to elevate every
              single project.
            </p>

            <p className="paragraph about__paragraph">
              We are curious, exploratory and visionary benders of harmonic
              curves.
            </p>
          </div>

          <div className="about__content__image-container u-w-40">
            <img src={TwoMen} alt="Anders and Edvin" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
