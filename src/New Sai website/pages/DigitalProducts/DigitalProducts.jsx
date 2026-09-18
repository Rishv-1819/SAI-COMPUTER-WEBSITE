import React from "react";
import "../DistributionFranchisee/DistributionFranchisee.css";
import Img from "../../../assets/pexels-christina-morillo-1181244.webp";

const DigitalProducts = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="df-hero">
        <div className="df-container">

          <span className="df-badge">VERTICAL</span>

          <h1>Digital Products</h1>

          <p>

             The SCL In-house Digital Products team is dedicated 
             to delivering customized software solutions.

          </p>

        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">

          <div className="overview-content">
            <h2>Overview</h2>

            <p>
              The SCL In-house Digital Products team is dedicated to delivering customized
               software solutions that cater to the unique needs of power utilities, 
               helping them overcome their most pressing operational challenges. With a 
               strong focus on innovation and efficiency, the team offers a range of digital 
               solutions designed to enhance revenue management, resource optimization, 
               and overall service reliability.
               
               Their Integrated Revenue Management System streamlines billing and payment 
               processes, ensuring accurate revenue collection and reducing losses. 
               The Smart Metering System enables real-time monitoring of energy consumption, 
               promoting transparency and efficiency in electricity usage.

               To improve customer engagement and service delivery, the team provides a 
               Consumer Application that allows users to track their energy consumption, 
               make payments, and access important updates seamlessly.

               The Workforce Management solution optimizes field operations by enabling 
               efficient scheduling, tracking, and deployment of personnel, while the Asset 
               Management system ensures the proper maintenance and lifecycle management of 
               critical infrastructure.

               Additionally, the team specializes in GIS Applications, which provide advanced
                spatial analysis for better decision-making and infrastructure planning. 
                Their expertise also extends to Energy Accounting and Audit solutions, 
                helping utilities monitor and analyze energy distribution, detect anomalies, 
                and ensure compliance with regulatory standards.

                By integrating these advanced digital solutions, the SCL In-house Digital 
                Products team empowers power utilities to enhance operational efficiency, 
                reduce losses, and improve overall service reliability in an increasingly 
                digital landscape.
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

export default DigitalProducts;