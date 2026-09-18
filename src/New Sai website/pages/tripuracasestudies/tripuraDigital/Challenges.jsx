import React from "react";
import "./Challenges.css";
import meterImage from "../../../../assets/newsaiwebsiteimage/Tripura-meter.jpg";

function Challenges() {
  return (
    <section className="challenges">
      <div className="left-content">
        <h1>The Challenges</h1>

        <p>
          ➤ <strong>Data Accuracy & Integration:</strong> Ensuring seamless,
          accurate real-time data integration from various meters.
        </p>

        <p>
          ➤ <strong>Consumer Adoption:</strong> Building trust and promoting
          new billing and payment systems.
        </p>

        <p>
          ➤ <strong>Infrastructure & Connectivity:</strong> Overcoming network
          limitations in remote areas for real-time data and GPS tracking.
        </p>

        <p>
          ➤ <strong>Operational Efficiency:</strong> Managing large-scale
          workforce for billing, meter installation, and maintenance.
        </p>

        <p>
          ➤ <strong>Energy Loss Monitoring:</strong> Identifying and reducing
          technical and non-technical energy losses.
        </p>


        <h1>solutions</h1>


        <p>
          ➤ Efficient Collection and Management of Meter Energy Data in Large-Scale Operations..
        </p>

        <p>
          ➤ Mobile App & API Integration for Billing and Payment.
        </p>

        <p>
          ➤ Scalable Microservices for Efficient Data Handling.
        </p>

        <p>
          ➤ Traffic Distribution with Load Balancer.
        </p>

        <p>
          ➤ Large Scale Data Processing & Transformation.
        </p>

        <p>
          ➤ Enhanced Database Performance through Optimization.
        </p>

        <p>
          ➤ Streamlined Operational Services for Efficient Management.
        </p>

        <p>
          ➤ Dashboard & Reporting for Operational Activities.
        </p>

       <p>
          ➤ Web Portal & APIs for Reporting.
       </p>

        <p>
          ➤ Real-Time Alerts and Updates through Notification System.
        </p>

        <p>
          ➤ Automated Task Scheduling with Cron Jobs.
        </p>

        <p>
          ➤ Predictive Analytics with AI/ML.
        </p>

        <p>
          ➤ User-Centered Approach.
        </p>

      </div>

      <div className="right-image">
        <img src={meterImage} alt="Meter" />
      </div>
    </section>
  );
}

export default Challenges;