import React from "react";
import "./AccessAlternativeInvestments.css";
import AnimateLineChart from "../GraphSection/LineChart";

const AccessAlternativeInvestments = () => {
  return (
    <div className="AAI-main-container">
      <div className="AAI-container">
        <div className="AAI-left">
          <span className="AAI-title">
            Private Equity Index vs S&P 500 Index -- Historical Performance
          </span>
          <AnimateLineChart />
        </div>
        <div className="AAI-right">
          <div className="aii-title-right">
            <span className="Aii-right-title-1">Access</span>
            <span className="Aii-right-title-2">Alternative</span>
            <span className="Aii-right-title-3">Investments</span>
          </div>
          <div className="aii-paragraph-section">
            <p className="aii-para">
              Unleashing the untapped potential of the alternative markets
              through Rooba.Finance - Your gateway to superior returns and
              exclusive opportunities
            </p>
            <p className="aii-para">
              Discover the advantages of alternative market investments, unlock
              new horizons, and embark on a journey towards financial prosperity
              with our platform as your trusted partner.
            </p>
          </div>
          <div className="aii-cts-action-btns">
            <button className="aii-cta-btn">Private Equity</button>
            <button className="aii-cta-btn">Private Debt </button>
            <button className="aii-cta-btn">Investment Management Firms</button>
          </div>
          <div className="aii-main-cta-button">
            <button className="aii-cta-btn-4">
              Learn more
              <svg
                width="36"
                height="6"
                viewBox="0 0 36 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.0639 3.07227L30.0639 0.185514V5.95902L35.0639 3.07227ZM0.547852 3.57227H30.5639V2.57227H0.547852V3.57227Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessAlternativeInvestments;
