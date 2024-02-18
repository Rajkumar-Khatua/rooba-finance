import React from "react";
import "./Discover_Section.css";

import { useState } from "react";
import "./Discover_Section.css";
import { CiGrid42 } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { GiElectric } from "react-icons/gi";

const Discover_Section = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Tab 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam iste voluptatum laudantium provident perferendis qui voluptas incidunt similique vel labore facilis ab harum optio vero, nemo iusto ipsa pariatur.",
    },
    {
      title: "Tab 2",
      description:
        "XLorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam iste voluptatum laudantium provident perferendis qui voluptas incidunt similique vel labore facilis ab harum optio vero, nemo iusto ipsa pariatur.",
    },
    {
      title: "Tab 3",
      description:
        "Horem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam iste voluptatum laudantium provident perferendis qui voluptas incidunt similique vel labore facilis ab harum optio vero, nemo iusto ipsa pariatur.",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="dis-container">
      <div className="dis_left">
        <h2 className="dis-title">
          Discover <br />{" "}
          <span className="dis-sub-heading"> Prime Opportunities</span>
        </h2>

        <div className="disTab-section">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`dis-tab-title ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <p className="dis-desc">{tabs[activeTab].description}</p>
        <button className="learnMore">
          Learn More
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
      <div className="dis_right">
        <div className="dis_card">
          <div className="dis-img">
            <img src="/discover.png" alt="discover" className="dis-card-img" />
          </div>
          <div className="dis-card-information">
            <div className="dis-tag-container">
              <p className="dis-tag-title">Tags</p>
              <div className="dis-tags">
                <div className="dis-tag">
                  <CiGrid42 /> Regular plot
                </div>
                <div className="dis-tag">
                  <MdOutlineZoomOutMap /> 2,970 Sq ft*
                </div>
                <div className="dis-tag last-tag">Fractional Ownership</div>
              </div>
            </div>
            <div className="dis-card-another-tags">
              <p className="dis-tag-other-title">Other Tags</p>
              <div className="dis-other-tags">
                <div className="dis-other-tag">
                  <GiElectric />
                  Electricity
                </div>
                <div className="dis-other-tag">Agricultural Land</div>
                <div className="dis-other-tag">Maintenance Inclusive </div>
                <div className="dis-other-tag">Fence </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover_Section;
