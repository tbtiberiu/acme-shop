import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "./app/productsSlice";

import "./App.scss";

import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import NotFound from "./components/Pages/NotFound";
import Layout from "./components/Layout/Layout";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="shop/*"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
