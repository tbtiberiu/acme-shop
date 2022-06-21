import React from "react";

import "./ShopLocal.scss";

const ShopLocal = () => {
  return (
    <div className="shop-local">
      <div className="container">
        <div className="shop-local-content">
          <div className="shop-local-left"></div>
          <div className="shop-local-right">
            <div className="shop-local-content-wrapper">
              <h1>Shop Local.</h1>
              <p>
                We know that during COVID-19, a lot of folks around the city and
                state are feeling uneasy about the future - we're not sure what
                the future holds either.
              </p>
              <p>
                That said: we know that we love making sure you have the gear
                you need for your adventures, and we're going to keep doing that
                - with our team - until the city tells us we can't.
              </p>
              <p>
                But as long as folks like yourself support small businesses
                around the city, then we'll be here — every day, making sure
                your orders arrive on time.
              </p>
              <p>-------</p>
              <p>
                Jane & John Doe
                <br /> <strong>Acme Outdoors</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLocal;
