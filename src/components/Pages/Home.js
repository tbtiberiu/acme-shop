import React, { useEffect } from "react";

import Hero from "../Hero/Hero";
import SafeSection from "../SafeSection/SafeSection";
import ShopLocal from "../ShopLocal/ShopLocal";
import Support from "../Support/Support";
import Products from "../Products/Products";

const Home = () => {
  useEffect(() => {
    document.title = "ACME";
  }, []);

  return (
    <>
      <Hero />
      <Support />
      <SafeSection />
      <Products />
      <ShopLocal />
    </>
  );
};

export default Home;
