import React, { useEffect } from "react";

import Hero from "../Hero/Hero";

const Home = () => {
  useEffect(() => {
    document.title = "ACME";
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
