import React from "react";
import "./Objectives.css";
import { FaCheck } from "react-icons/fa";

function Result() {
  const leftObjectives = [
    "Secure meter reading capture and upload via mobile apps and CMRI machines.",
    "Simplified management of connections, billing, and service updates with microservices.",
    "Automated payment tracking and billing verification using scheduled cron jobs.",
    "Fast issue resolution via an advanced ticket management system.",
  ];

  const rightObjectives = [
    "Scalable Azure cloud storage for efficient data retrieval and reporting.",
    "Integrated Inventory Management for seamless task and service execution.",
    "Real-time tracking of meter readings and service activities.",
    "Comprehensive dashboards for billing, service, and operational insights.",
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

export default Result;