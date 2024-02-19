import React from "react";
import { useState } from "react";
import "./HowToInvest.css";

const steps = [
  {
    title: "Create Account",
    content: "Open an account in minutes and start investing right away.",
    buttonLabel: "Get Started",
    images: ["/Invest1.png", "/invest1child.png"],
  },
  {
    title: "Discover Opportunities",
    content: "Explore a wide range of investment options to suit your needs.",
    buttonLabel: "Explore",
    images: ["/invest2.png"],
  },
  {
    title: "Invest with Flexibility",
    content:
      "Customize your investment strategy and manage your portfolio easily.",
    buttonLabel: "Invest Now",
    images: ["/invest3.png", "/invest3child2.png", "/invest3child1.png"],
  },
];

const HowToInvest = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };

  return (
    <>
      <div className="HTV-container">
        <div className="left-pane">
          <div className="HTV-title">
            How to
            <br />
            Invest
          </div>
          {steps.map((step, index) => (
            <div
              className={`step ${selectedStep === index ? "active" : ""}`}
              key={index}
              onClick={() => handleStepClick(index)}
            >
              <div
                className={`step-title ${
                  selectedStep === index ? "active" : ""
                }`}
              >
                {step.title}
              </div>
              <>
                {selectedStep === index && (
                  <div className="step-description">
                    <h2>{step.title}</h2>
                    <p>{step.content}</p>
                    <button>
                      {step.buttonLabel}
                      <svg
                        className="arrow"
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
                )}
              </>
            </div>
          ))}
        </div>
        <div className="right-pane">
          {selectedStep !== null && (
            <>
              <div className="step-images">
                {steps[selectedStep].images.map((image, index) => (
                  <img
                    className={index === 0 ? "main-image" : "child-image"}
                    src={image}
                    alt={`Step ${selectedStep + 1} ${index + 1}`}
                    key={index}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default HowToInvest;
