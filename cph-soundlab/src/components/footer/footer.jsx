import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./_footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer__container u-flex u-center-middle">
        <div className="footer__sm-container">
          <a href="#" className="footer__link">
            <FontAwesomeIcon icon={faFacebook} className="footer__font" />
          </a>
          <a href="#" className="footer__link">
            <FontAwesomeIcon icon={faInstagram} className="footer__font" />
          </a>
          <a href="#" className="footer__link">
            <FontAwesomeIcon icon={faEnvelope} className="footer__font" />
          </a>
        </div>
        <p className="footer__text">
          Copenhagen Sound Lab 2020. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
