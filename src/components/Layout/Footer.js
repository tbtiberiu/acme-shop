import React from "react";

import "./Footer.scss";

import Logo from "../Logo/Logo";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <Logo />
          <SocialLinks />
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} - A C M E</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
