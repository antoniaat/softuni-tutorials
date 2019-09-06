import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const faFacebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
  const faTwitterIcon = <FontAwesomeIcon icon={faTwitter} />;
  const faInstagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  const faYoutubeIcon = <FontAwesomeIcon icon={faYoutube} />;

  return (
    <div className="Footer">
      <div>
        <section>
          <div className="footer-section-header">
            <span>About us</span>
          </div>
          <p>
            SoftUni gives profession and job to thousands of young people by
            modern practical education for software engineers and digital
            skills. SoftUni promotes the “learn by doing” approach for
            developing practical skills through its interactive learning
            platform.
          </p>
        </section>
        <section>
          <div className="footer-section-header">
            <span>SoftUni</span>
          </div>
          <ul>
            <li>
              <Link to="https://softuni.org/">
                SoftUni Interactive Learning
              </Link>
            </li>
            <li>
              <Link to="https://judge.softuni.bg/">SoftUni Judge</Link>
            </li>
            <li>
              <Link to="http://softuni.foundation/">SoftUni Foundation</Link>
            </li>
          </ul>
        </section>
        <section>
          <div className="footer-section-header">
            <span>Free Books</span>
          </div>
          <ul>
            <li>
              <Link to="https://csharp-book.softuni.org/">
                “Programming Basics with C#” Free Video Book
              </Link>
            </li>
            <li>
              <Link to="https://introprogramming.info/english-intro-csharp-book/">
                “Fundamentals of Computer Programming with C#” Free Book
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <div className="footer-section-header">
            <span>Partners</span>
          </div>
          <ul>
            <li>
              <Link to="https://softuni.bg">SoftUni</Link>
            </li>
          </ul>
        </section>
      </div>

      <div>
        <section>
          Copyright © 2019 SoftUni Tutorials: Learn Programming. All rights
          reserved.
        </section>

        <section className="social-icons">
          <Link to="https://www.facebook.com/softuni.org">
            {faFacebookIcon}
          </Link>
          <Link to="https://twitter.com/SoftUni1">{faTwitterIcon}</Link>
          <Link to="https://www.instagram.com/softuni_org/">
            {faInstagramIcon}
          </Link>
          <Link to="https://www.youtube.com/channel/UCqvOk8tYzfRS-eDy4vs3UyA">
            {faYoutubeIcon}
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Footer;
