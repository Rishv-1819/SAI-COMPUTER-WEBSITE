import React from "react";
import "../../tripuracasestudies/tripuraDigital/Objectives.css";
import { FaCheck } from "react-icons/fa";

function PdclResult() {
  const leftObjectives = [
    "AT&C Loss Reduction: SCL reduced AT&C losses from a staggering 87.89% to just 16.93% by FY 2023-24, demonstrating operational excellence.",
    "Extended Power Supply Hours: The average daily power supply improved from 18 hours to 23 hours, ensuring reliable electricity access for rural consumers.",
    "Rapid Restoration Times: Outage restoration times were reduced from an average of 6 hours to just 55 minutes, significantly enhancing service responsiveness.",
  ];

  const rightObjectives = [
    "Revenue Growth: SCL delivered a 4x increase in revenue for MePDCL over five years, strengthening the financial health of the distribution system.",
    "Massive Consumer Base Expansion: The consumer base grew by an impressive 264%, extending electricity access to previously underserved rural areas.",
  ];

  return (
    <section className="objectives-section">
      <div className="objectives-container">

        <h2 className="objectives-title">THE RESULTS:</h2>

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

export default PdclResult;