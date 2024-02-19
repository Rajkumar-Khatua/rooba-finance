import React, { useEffect, useState } from "react";
import "./OurPartners.css";

const partners = [
  {
    id: 1,
    name: "Panag & Babu",
    src: "https://s3-alpha-sig.figma.com/img/7a88/f998/8bbc64d217ffe0e55c5a54adfc65c39c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qY74GZqKvw5NfVWFnptUAG74PLQO0j8QrgCJvf7f-4TvErLlKSvKcJASV-34qVRqZtMflvPslptdO7l6UMpp-eSpa9cGbE8Nbi1ii1OBKlgiGeo76TP-7MIl2xveFisM1zQxh-F502n133qE1OZR9ofAV3MjVIJ0TeLeMJiLkM67X-pG1GIO71wm24mRJGRj1nJsb6dmHn3t5jIRYeCScR1n~AEJZtYiK7WRH4r02hZ4UQNS9sM9fqVrXh9oT0qcA8tyVtbpwY8it~x7uZtkezbscxfANbL4C-bPZnsBGGrbODU6aTCofxCKhn0Y8WZHBLtkTPvUdsmo4E7wnjtYUQ__",
  },
  {
    id: 2,
    name: "Leegality",
    src: "https://s3-alpha-sig.figma.com/img/16da/2e48/0ea8c8da070f3f3a97f4c2d97643fa83?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6yYGTVRak2v7pOZokbdQazcmFovgAPQu0WPcSjmx-1hKFT00A007sWQ8IbCAhlMrIRxAfLIfOtoy96bkfegirtoiFdIOwraLohnMuuj1n0coBWkVnxw9re8JCrsXuMjzk8Nvw0cT9XTAocP56CR6hrcOBwofaf9m8StfiHr3VkSHT27I7Z-~4ieOEz1fGwqyWIEf~VO9JbqlCpdh4A-k5ha2guD91Q9i2ItCdp5qz9Df4DsvoW1T92HUGZ1LBXmGFwz2npeofI7s7r8sxlSM9e-pFChtzEkKdfh~Zjn41060SdHDlCxfvuAndpBG96xWE0-OdkFNsW6LpogFiobiw__",
  },
];

const OurPartners = () => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const numVisibleSlides = windowWidth > 768 ? 2 : 1; // Show 2 images for larger screens, 1 for smaller

  const nextSlides = () => {
    setCurrent(
      (prevCurrent) => (prevCurrent + numVisibleSlides) % partners.length
    );
  };

  const prevSlides = () => {
    setCurrent(
      (prevCurrent) =>
        (prevCurrent - numVisibleSlides + partners.length) % partners.length
    );
  };

  return (
    <section className="carousel-container">
      <div className="carousel-title">Our Partners</div>
      
      <div className="carousel">
        <div className="carousel-inner">
          {partners.map((partner, index) => {
            const isActive =
              index === current ||
              (index === (current + 1) % partners.length &&
                numVisibleSlides === 2);
            return (
              <div
                key={partner.id}
                className={isActive ? "slide active" : "slide"}
              >
                {isActive && (
                  <img src={partner.src} alt={partner.name} className="image" />
                )}
              </div>
            );
          })}
        </div>
        <button className="left-arrow" onClick={prevSlides}>
          <svg
            width="15"
            height="7"
            viewBox="0 0 15 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.102026 3.50733L5.10203 6.39408L5.10203 0.620574L0.102026 3.50733ZM14.0928 3.00732L4.60203 3.00733L4.60203 4.00733L14.0928 4.00732L14.0928 3.00732Z"
              fill="black"
              fill-opacity="0.15"
            />
          </svg>
        </button>
        <button className="right-arrow" onClick={nextSlides}>
          <svg
            width="15"
            height="7"
            viewBox="0 0 15 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7827 3.48291L9.78274 0.596158L9.78274 6.36966L14.7827 3.48291ZM0.791992 3.98291L10.2827 3.98291L10.2827 2.98291L0.791992 2.98291L0.791992 3.98291Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default OurPartners;
