import React from "react";

import "./Card.scss";

const Card = ({ info: { image, title, price, onSale, oldPrice } }) => {
  return (
    <div className="card">
      <div className="card-image">
        {onSale ? <div className="card-image-sale">SALE</div> : null}
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>
          $ {price.toFixed(2)} USD{" "}
          {onSale ? (
            <span className="card-info-sale">$ {oldPrice.toFixed(2)} USD</span>
          ) : null}
        </p>
        <button className="card-button" type="button">
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
