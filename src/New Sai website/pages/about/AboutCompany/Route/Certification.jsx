import React from "react";
import "./Certification.css";

import iso27001 from "../../../../../assets/newsaiwebsiteimage/image11.png";
import itma2023 from "../../../../../assets/newsaiwebsiteimage/image12.png";
import iso9001 from "../../../../../assets/newsaiwebsiteimage/image13.jpg";
import iso45001 from "../../../../../assets/newsaiwebsiteimage/image14.jpg";
import cmmi from "../../../../../assets/newsaiwebsiteimage/image10.jpg";

const Certification = () => {
  return (
    <section className="certification">

      {/* Top Banner */}

      <div className="certification-banner">

        <div className="banner-left">
          <h1>
            Most successful running
            <br />
            Distribution Franchisee in Rural
            <br />
            Area.
          </h1>
        </div>

        <div className="banner-right">
          <div className="diamond-grid">
            {Array.from({ length: 91 }).map((_, index) => (
              <span key={index}></span>
            ))}
          </div>
        </div>

      </div>

      {/* Logos */}

      <div className="certificate-logos">

        <div className="logo-item">
          <img src={iso27001} alt="ISO 27001" />
        </div>

        <div className="logo-item">
          <img src={itma2023} alt="ITMA" />
        </div>

        <div className="logo-item">
          <img src={iso9001} alt="ISO 9001" />
        </div>

        <div className="logo-item">
          <img src={iso45001} alt="ISO 45001" />
        </div>

        <div className="logo-item">
          <img src={cmmi} alt="CMMI" />
        </div>

      </div>

    </section>
  );
};

export default Certification;