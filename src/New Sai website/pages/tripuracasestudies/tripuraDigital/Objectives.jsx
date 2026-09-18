import React from "react";
import "./Objectives.css";
import { FaCheck } from "react-icons/fa";

function Objectives() {
  const leftObjectives = [
    "Modernize power distribution with advanced metering, billing, analytics, and asset management.",
    "Improve efficiency, data accuracy, and reduce energy losses.",
    "Enable real-time data for precise billing and transparent customer communication.",
    "Analyze consumption patterns for better energy management.",
  ];

  const rightObjectives = [
    "Simplify payments for customer convenience.",
    "Streamline disconnection, reconnection, and metering services.",
    "Ensure accurate energy accounting and transparency.",
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

export default Objectives;