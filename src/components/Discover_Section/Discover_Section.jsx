import React from "react";
import "./Discover_Section.css";

import { useState } from "react";
import "./Discover_Section.css";
import { CiGrid42 } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { PiPlantThin } from "react-icons/pi";
import { GrVmMaintenance } from "react-icons/gr";
import { GiWoodenFence } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Discover_Section = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Greensteps  I",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam iste voluptatum laudantium provident perferendis qui voluptas incidunt similique vel labore facilis ab harum optio vero, nemo iusto ipsa pariatur.",
    },
    {
      title: "Greensteps  II",
      description:
        "XLorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam iste voluptatum laudantium provident perferendis qui voluptas incidunt similique vel labore facilis ab harum optio vero, nemo iusto ipsa pariatur.",
    },
    {
      title: "Greensteps  III",
      description:
        "Horem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam iste voluptatum laudantium provident perferendis qui voluptas incidunt similique vel labore facilis ab harum optio vero, nemo iusto ipsa pariatur.",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="discover-container">
      <div className="dis-container">
        <div className="dis_left">
          <div className="dist-left-container">
            <span className="dis-title">
              Discover <br />
              <span className="dis-sub-heading"> Prime Opportunities</span>
            </span>

            <div className="disTab-section">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`dis-tab-title ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </div>
              ))}
            </div>
            <p className="dis-desc">{tabs[activeTab].description}</p>
            <br />
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
        </div>
        <div className="dis_right">
          <div className="dis_card">
            <div className="dis-img-container">
              <img
                src="/discover.png"
                alt="discover"
                className="dis-card-img"
              />
              <div class="image-text-top-left">
                <span className="image-text">Greensteps I</span>
                <span className="image-text2">
                  <IoLocationOutline />
                  Alwar, Rajasthan
                </span>
              </div>
            </div>
            <div className="dis-card-information">
              <div className="tags-container">
                <div className="dis-tag-container">
                  <span className="dis-tag-title">Tags</span>
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
                  <span className="dis-tag-other-title">Other Tags</span>
                  <div className="dis-other-tags">
                    <div className="dis-other-tag">
                      <GiElectric size={20} />
                      Electricity
                    </div>
                    <div className="dis-other-tag">
                      <PiPlantThin size={20} />
                      Agricultural Land
                    </div>
                    <div className="dis-other-tag">
                      <GrVmMaintenance size={20} />
                      Maintenance Inclusive
                    </div>
                    <div className="dis-other-tag">
                      <GiWoodenFence size={20} />
                      Fence
                    </div>
                  </div>
                </div>

                <div className="dis-price-container">
                  <span className="dis-price-title">Price</span>
                  <div className="price-box-container">
                    <div className="price-box">
                      <span className="price">INR</span>
                      <span className="price-per-sqft">1.75 Cr</span>
                    </div>
                    <div className="price-box">
                      <span className="price-per-sqft">2900/ Sq yd</span>
                    </div>
                    <div className="price-box last-price-box">
                      <span className="price">INR</span>
                      <span className="price-per-sqft">5,00,000</span>
                    </div>
                  </div>
                </div>
                <div className="dis-cta">
                  <button className="dis-cta-btn1">
                    <AiOutlinePlus color="white" />
                    Invest Now
                  </button>
                  <button className="dis-cta-btn2">
                    <MdCall />
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover_Section;
