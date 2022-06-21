import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../app/productsSlice";

import Card from "../Card/Card";

import "./Products.scss";

const Products = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="products-section">
        <div className="products-section-title">
          <h2>Shop Products</h2>
          <p>Open 24/7/365.</p>
        </div>
        <div className="products-section-content">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <Card info={data.tents[0]} />
              <Card info={data.accessories[0]} />
              <Card info={data.packs[0]} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
