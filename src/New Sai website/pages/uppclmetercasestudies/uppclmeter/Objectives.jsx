import React from "react";
import "../../tripuracasestudies/tripuraDigital/Objectives.css";
import { FaCheck } from "react-icons/fa";

function UppclObjectives() {
  const leftObjectives = [
    "MRI Analysis Tool for real-time meter data analysist.",
    "Automate energy theft detection, billing, and loss tracking.",
  ];

  const rightObjectives = [
    "Generate reports on energy loss, tamper cases, and theft-prone areas.",
    "Automate energy theft detection, billing, and loss tracking.",
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

export default UppclObjectives;