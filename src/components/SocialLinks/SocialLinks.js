import React from "react";

import "./SocialLinks.scss";

import twitterImg from "../../images/TwitterIcon.svg";
import facebookImg from "../../images/FacebookIcon.svg";
import instagramImg from "../../images/InstagramIcon.svg";

const SocialLinks = () => {
  return (
    <div className="socials">
      <a
        className="social-link"
        href="https://twitter.com/webflow"
        target="_blank"
        rel="noopener noreferrer"
        alt="Twitter"
      >
        <img src={twitterImg} height={30} width={30} alt="Twitter Logo" />
      </a>
      <a
        className="social-link"
        href="https://www.facebook.com/webflow"
        target="_blank"
        rel="noopener noreferrer"
        alt="Facebook"
      >
        <img src={facebookImg} height={30} width={30} alt="Facebook Logo" />
      </a>
      <a
        className="social-link"
        href="https://www.instagram.com/accounts/login/?next=/webflow/"
        target="_blank"
        rel="noopener noreferrer"
        alt="Instagram"
      >
        <img src={instagramImg} height={30} width={30} alt="Instagram Logo" />
      </a>
    </div>
  );
};

export default SocialLinks;
