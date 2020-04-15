import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./_contact.scss";

function Contact() {
  return (
    <section className="section-contact contact">
      <div className="contact__content u-center-middle">
        <h2 className="secondary-headline u-margin-bottom-medium">Contact</h2>
        <p className="paragraph contact__paragraph">
          Feel free to reach out to us with any questions. We are very friendly
          and always open for discussing new projects & interesting ideas.
        </p>
        <div className="contact__links-container u-flex">
          <div className="contact__links ">
            <a
              href="mailto:hello@cphsoundlab.com"
              className="contact__icon"
            >
              <FontAwesomeIcon icon={faEnvelope} className="u-margin-bottom-smallest" />
            </a>
            <a href="mailto:hello@cphsoundlab.com" className="contact__link">
             <span className="contact__link--text u-margin-bottom-smallest">Write to us</span> 
             <span className="contact__link--to">hello@cphsoundlab.com</span> 
            </a>

        
           
          </div>
          <div className="contact__links">
            <a
              href="tel:+46738487652"
              className="contact__icon"
            >
              <FontAwesomeIcon icon={faPhone}  className="u-margin-bottom-smallest"/>
            </a>
            <a href="tel:+46738487652" className="contact__link">
            <span className="contact__link--text u-margin-bottom-smallest">Write to us</span> 
             <span className="contact__link--to">hello@cphsoundlab.com</span> 
            </a>

        

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
