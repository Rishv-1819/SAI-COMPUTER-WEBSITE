import React from "react";
import "../../tripuracasestudies/tripuraDigital/Objectives.css";
import { FaCheck } from "react-icons/fa";

function PdclObjectives() {
  const leftObjectives = [
    "Reduce AT&C Losses: To minimize aggregate technical and commercias losses, improving the efficiency of power distribution and revenue collection..",
    "Increase Revenue for MePDCL: To enhance the financial performance of the Meghalaya Power Distribution Corporation Limited (MePDCL) by increasing revenue generation..",
    "Improve Power Supply Duration: To extend the availability of electricity to rural consumers by increasing the average daily power supply hours.",
  ];

  const rightObjectives = [
    "Reduce Power Restoration Time: To minimize the duration of power outages by improving the responsiveness and efficiency of restoration efforts.",
    "Expand Consumer Base: To increase the number of electricity consumers in rural areas, extending access to power and contributing to broader development.",
    "Energize Consumers and Transform Rural Bharat: To empower rural communities by providing reliable electricity and fostering overall socio-economic development.",
  ];

  return (
    <section className="objectives-section">
      <div className="objectives-container">

        <h2 className="objectives-title">Objectives:</h2>

        <div className="objectives-content">

          {/* Left Side */}
          <div className="objectives-column">
            {leftObjectives.map((item, index) => (
              <div className="objective-item" key={index}>
                <FaCheck className="check-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Center Divider */}
          <div className="divider"></div>

          {/* Right Side */}
          <div className="objectives-column">
            {rightObjectives.map((item, index) => (
              <div className="objective-item" key={index}>
                <FaCheck className="check-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default PdclObjectives;