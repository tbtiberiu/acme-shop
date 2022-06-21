import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import danger from "../../images/danger.svg";

import "./NotFound.scss";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div className="not-found">
      <div className="not-found-content">
        <img src={danger} height={350} width={350} alt="404 Not Found" />
        <h1>So sorry! We can't find that page</h1>
        <div className="not-found-desc">
          The page you are looking for doesn't exist or has been moved. You can
          go back to the <Link to="/">home page</Link>.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
