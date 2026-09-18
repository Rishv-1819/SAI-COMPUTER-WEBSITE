import React from "react";
import "../../tripuracasestudies/tripuraDigital/Objectives.css";
import { FaCheck } from "react-icons/fa";

function UppclResult() {
  const leftObjectives = [
    "Successful transfer and storage of meter data via BCS and SMRITI software, ensuring data integrity.",
    "Generation of comprehensive reports on load surveys, tamper analysis, consumption history, and violations.",
    "Identification and flagging of consumers for further investigation.",
    "Real-time tracking of MRI, billing, and meter exceptions with live status updates.",
  ];

  const rightObjectives = [
    "Delivery of data and reports in both hard and soft copy formats.",
    "Automated flagging of potential energy theft and tracking of meter anomalies.",
    "Continuous monitoring of energy flow patterns for early detection of inefficiencies.",
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

export default UppclResult;