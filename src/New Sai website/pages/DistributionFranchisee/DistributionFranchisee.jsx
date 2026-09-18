import React from "react";
import "./DistributionFranchisee.css";
import Img from "../../../assets/Df-Tower.jpg";

const DistributionFranchisee = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="df-hero">
        <div className="df-container">

          <span className="df-badge">VERTICAL</span>

          <h1>Distribution Franchisee</h1>

          <p>
            The Distribution Franchisee (DF) model is a strategic approach
            that allows state-owned electricity distribution companies
            (discoms) to outsource specific operational functions to private
            entities while retaining ownership of the assets.
          </p>

        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">

          <div className="overview-content">
            <h2>Overview</h2>

            <p>
              Our distribution franchisee services are designed to ensure seamless power
             distribution, consumer satisfaction, and operational efficiency. We offer end-to-end
            solutions, starting with the installation of specified metering systems to enable 
            accurate monitoring and energy measurement. To enhance consumer 
            engagement and operational transparency, we establish a comprehensive 
            consumer billing system integrated with an advanced analytics system for efficient 
            data management and insights. Additionally, we set up Consumer Care Facilities 
            (CCF) to provide dedicated support and quick redressal of consumer concerns.
        
            A key aspect of our service portfolio is accurate meter reading, conducted at 
            network nodes, distribution transformers (DTs), and consumer premises, ensuring 
            precise energy accounting. Based on these readings, we handle bill generation 
            and distribution, followed by revenue collection, ensuring smooth financial 
            operations. Our team also manages disconnection and reconnection processes, 
            adhering to regulatory guidelines and consumer needs. We facilitate the addition 
            of new consumers and modifications to connection conditions for existing 
            consumers, ensuring scalability and flexibility in service delivery.

            To maintain reliability and efficiency, we provide meter data analysis to assess
             power consumption patterns and identify discrepancies. Our team ensures the
              continuous maintenance and updating of the consumer database, which 
              plays a crucial role in consumer indexing and record-keeping. We also conduct node-wise 
              monthly energy accounting, enabling better load management and efficiency tracking.

             In addition to these core services, we actively engage in vigilance activities 
             to prevent unauthorized consumption, power theft, and technical losses. 
             Our network maintenance activities ensure the infrastructure remains in optimal 
             condition, minimizing downtime and service disruptions. We are also committed to 
             resolving no-current complaints swiftly to maintain consumer satisfaction. 
             To ensure transparency, accountability, and strategic decision-making, we generate 
             monthly MIS reports that provide a detailed overview of system performance, 
             energy consumption, revenue trends, and operational insights. Through these 
             initiatives, we aim to enhance power distribution efficiency, strengthen consumer 
             trust, and contribute to a more sustainable and reliable electricity network.
            </p>

            <button className="overview-btn">
              Learn More
            </button>
          </div>

          <div className="overview-image">
            <img src={Img} alt="Distribution Franchisee" />
          </div>

        </div>
      </section>
    </>
  );
};

export default DistributionFranchisee;