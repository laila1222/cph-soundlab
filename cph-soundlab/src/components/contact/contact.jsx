import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./_contact.scss";

function Contact() {
  return (
    <section className="section-contact contact" id="contact">
      <div className="contact__content u-center-middle">
        <h2 className="secondary-headline u-margin-bottom-medium" data-aos="fade-up">Contact</h2>
        <p className="contact__paragraph" data-aos="fade-up">
          Feel free to reach out to us with any questions. We are very friendly
          and always open for discussing new projects & interesting ideas.
        </p>
        <p className="contact__paragraph" data-aos="fade-up">
          <span className="contact__link"><a href="mailto:hello@cphsoundlab.com">hello@cphsoundlab.com</a></span>
          <span className="contact__link"><a href="tel:+46738487652">+46 7384 87652</a></span>
       
        </p>
        
      </div>
    </section>
  );
}

export default Contact;
