import React from "react";
import "./Exposure.css";

const cards = [
  {
    title: "Emerging market exposure",
    text: "Gain access to a wider range of investment opportunities by diversifying your portfolio into emerging markets.",
  },
  {
    title: "Access to innovation",
    text: "Invest in cutting-edge companies and technologies that are not yet available on public markets.",
  },
  {
    title: "Customization",
    text: "Tailor your investments to your specific needs and goals with innovative investment structures and strategies.",
  },
  {
    title: "Diversification",
    text: "Mitigate risk by spreading your investments across different asset classes and geographies.",
  },
  {
    title: "Strategic influence",
    text: "Gain greater control and influence over the companies you invest in through private market participation.",
  },
  {
    title: "Untapped potential",
    text: "Unlock the high growth potential of promising young companies in emerging markets.",
  },
];

const Exposure = () => {
  return (
    <div className="Ex-mainContainer">
      <div className="container">
        <div className="Ex-title-Container">
          <span className="EX-Title">Why you need exposure </span>
          <span className="Ex-ExtraTxt">to private markets</span>
        </div>
        <div className="Ex-cards-container">
          <div className="Ex-cards">
            {cards.map((card, index) => (
              <div key={index} className="Ex-card">
                <h2 className="Ex-card-title">{card.title}</h2>
                <span className="Ex-card-text">{card.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exposure;
