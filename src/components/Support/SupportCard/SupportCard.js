import React from "react";

import "./SupportCard.scss";

const SupportCard = ({ index, title, text }) => {
  return (
    <div className="support-card">
      <div className="support-card-item">
        <div className="support-index">0{index}</div>
        <div>
          <p>{title}</p>
        </div>
      </div>
      <div className="support-card-desc">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SupportCard;
