import React from "react";
import { Link } from "react-router-dom";

import "./SafeSection.scss";

function SafeSection() {
  return (
    <div className="safe-section">
      <div className="container">
        <div className="safe-section-content">
          <h1>How we're keeping you safe during COVID-19</h1>
          <p>
            As an outdoor shop, we've taken precautionary measures to ensure the
            safety of all our customers and team members.
          </p>
          <Link to="/">
            <button className="safe-section-button" type="button">
              Read Our Statement
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SafeSection;
