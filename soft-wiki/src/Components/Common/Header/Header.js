import React from "react";
import "./Header.scss";
import logo from "../../../assets/logo-with-text.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const arrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft} />;
  const faFacebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
  const faTwitterIcon = <FontAwesomeIcon icon={faTwitter} />;
  const faInstagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  const faYoutubeIcon = <FontAwesomeIcon icon={faYoutube} />;

  return (
    <div className="Header">
      <section>
        <button>
          <Link to="https://www.softuni.bg">
            <span>{arrowLeftIcon}</span>Back to SoftUni
          </Link>
        </button>

        <section className="social-icons">
        <Link to="https://www.facebook.com/softuni.org">{faFacebookIcon}</Link>
        <Link to="https://twitter.com/SoftUni1">{faTwitterIcon}</Link>
        <Link to="https://www.instagram.com/softuni_org/">
          {faInstagramIcon}
        </Link>
        <Link to="https://www.youtube.com/channel/UCqvOk8tYzfRS-eDy4vs3UyA">
          {faYoutubeIcon}
        </Link>
      </section>

      </section>
      <section>
        <img src={logo}></img>
      </section>
    </div>
  );
}

export default Header;
