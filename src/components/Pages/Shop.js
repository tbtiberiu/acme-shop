import React, { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    document.title = "Shop";
  }, []);

  return <div>Shop</div>;
};

export default Shop;
