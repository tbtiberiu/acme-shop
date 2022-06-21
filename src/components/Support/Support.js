import React from "react";

import SupportCard from "./SupportCard/SupportCard";

import "./Support.scss";

const Support = () => {
  const cards = [
    {
      title: "Shop Products",
      text: "Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!",
    },
    {
      title: "Donate",
      text: "Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.",
    },
    {
      title: "Buy Gift Cards",
      text: "Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.",
    },
  ];

  return (
    <div className="support">
      <div className="container">
        <div className="support-details">
          <div className="support-title">
            <p>Ways to support</p>
            <h1>Support Acme Outdoors.</h1>
          </div>
          <div className="support-text">
            <p>
              COVID-19 has forced us to close our retail space, but we need
              support from patrons like yourself now more than ever. Below,
              we've listed the best ways to help us through this season.
            </p>
          </div>
        </div>
        <div className="support-cards">
          {cards.map(({ title, text }, index) => (
            <SupportCard
              key={index}
              index={index + 1}
              title={title}
              text={text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
