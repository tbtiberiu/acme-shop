import React from "react";
import { Link } from "react-router-dom";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Serving you since 1989.</h1>
          <p className="hero-text">
            Acme Outdoors is an outdoor and adventure shop located in the
            Boathouse District in Oklahoma City.
          </p>
          <Link to="/shop">
            <button className="hero-button" type="button">
              Shop Merch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
