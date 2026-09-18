import React from "react";
import "../DistributionFranchisee/DistributionFranchisee.css";
import Img from "../../../assets/newsaiwebsiteimage/giphy.gif";

const UtilityOperations = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="df-hero">
        <div className="df-container">

          <span className="df-badge">VERTICAL</span>

          <h1>Utility Operations</h1>

          <p>

             SCL's utility operations are meticulously designed to ensure
              maximum efficiency and seamless consumer convenience by 
              integrating advanced technologies and proactive service strategies.

          </p>

        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">

          <div className="overview-content">
            <h2>Overview</h2>

            <p>
              Through smart metering, we enable accurate energy tracking, eliminating 
              discrepancies, enhancing transparency, and empowering consumers with real-time 
              insights into their energy consumption. Our spot billing & payment system is 
              tailored for hassle-free transactions, allowing consumers to conveniently manage 
              their payments, reducing delays, and improving overall user experience.

              We place a strong emphasis on network maintenance to ensure uninterrupted 
              service, proactively identifying and addressing potential disruptions to 
              maintain a steady and reliable power supply. Our commitment to service 
              excellence extends to workforce management, where we leverage innovative 
              strategies to optimize resource allocation, ensuring swift issue resolution 
              and minimizing response times for consumer concerns.

              Furthermore, our commitment to customer satisfaction is reinforced by our 
              Consumer Care Facility (CCF), a dedicated hub for comprehensive customer 
              support, where trained professionals handle inquiries, troubleshoot issues, 
              and provide prompt resolutions to enhance overall consumer experience.

              By continuously refining these core operations, SCL remains steadfast in 
              delivering efficiency, reliability, and convenience to all its consumers.
            </p>

            <button className="overview-btn">
              Learn More
            </button>
          </div>

          <div className="overview-image">
            <img src={Img} alt="Digital Products" />
          </div>

        </div>
      </section>
    </>
  );
};

export default UtilityOperations;