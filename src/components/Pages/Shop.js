import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../app/productsSlice";
import { Route, Routes } from "react-router-dom";

import CategoryButton from "../CategoryButton/CategoryButton";
import Card from "../Card/Card";

import "./Shop.scss";

const Shop = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    document.title = "Shop";
  }, []);

  const getAll = () => {
    let all = [];

    all.push(getCards());
    all.push(getTents());
    all.push(getAccessories());
    all.push(getPacks());

    return all;
  };

  const getCards = () => {
    return data.cards.map((card, index) => <Card key={index} info={card} />);
  };

  const getTents = () => {
    return data.tents.map((tent, index) => <Card key={index} info={tent} />);
  };

  const getAccessories = () => {
    return data.accessories.map((accessory, index) => (
      <Card key={index} info={accessory} />
    ));
  };

  const getPacks = () => {
    return data.packs.map((pack, index) => <Card key={index} info={pack} />);
  };

  return (
    <>
      <div className="shop">
        <div className="shop-title">
          <div className="container">
            <h1>Shop Our Products</h1>
          </div>
        </div>

        <div className="shop-content">
          <div className="container">
            <div className="shop-content-wrapper">
              <div className="shop-aside">
                <div className="shop-aside-title">
                  <h2>Shop by Category</h2>
                </div>
                <CategoryButton destination="/shop/cards">
                  Gift Cards
                </CategoryButton>
                <CategoryButton destination="/shop/tents">Tents</CategoryButton>
                <CategoryButton destination="/shop/accessories">
                  Accessories
                </CategoryButton>
                <CategoryButton destination="/shop/packs">Packs</CategoryButton>
              </div>
              <div className="shop-main">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    <Routes>
                      <Route path="" element={getAll()} />
                      <Route path="cards" element={getCards()} />
                      <Route path="tents" element={getTents()} />
                      <Route path="accessories" element={getAccessories()} />
                      <Route path="packs" element={getPacks()} />
                    </Routes>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
