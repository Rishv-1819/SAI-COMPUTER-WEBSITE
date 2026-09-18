import React from "react";
import "../../tripuracasestudies/tripuraDigital/Challenges.css";
import meterImage from "../../../../assets/newsaiwebsiteimage/inside-meghalaya.jpg";

function PdclChallenges() {
  return (
    <section className="challenges">
      <div className="left-content">
        <h1>The Challenges</h1>

        <p>
          ➤ <strong>⮞Sky-High AT&C Losses:</strong>  AT&C losses stood at an overwhelming 87.89% in
           the base year, reflecting inefficiencies in revenue collection and technical operations.
        </p>

        <p>
          ➤ <strong>Inadequate Power Supply:</strong>  Rural consumers had access to only 18 hours 
          of electricity per day, limiting productivity and consumer satisfaction.
        </p>

        <p>
          ➤ <strong>Slow Power Restoration Times:</strong>  Outage restoration times averaged 6 hours, 
          causing delays and frustration among consumers.
        </p>

        <p>
          ➤ <strong>Limited Consumer Reach and Revenue Deficit:</strong>  A small consumer base and low revenue 
          generation posed significant financial challenges for MePDCL.
        </p>

        <p>
          ➤ <strong>Geographical Challenges in Remote Rural Areas:</strong>   Operating in rural 
          regions meant dealing with inadequate infrastructure, poor connectivity, and limited 
          access to resources, making service delivery more difficult.
        </p>

        <p>
          ➤ <strong>Extreme Weather Conditions (Lightning Hotspot):</strong> Meghalaya is one of 
          the most lightning-prone regions globally, leading to frequent disruptions in power
           infrastructure and increased maintenance demands.
        </p>


        <h1>solutions</h1>


        <p>
          ➤  Efficient Collection and Management of Meter Energy Data in Large-Scale Operations.
        </p>

        <p>
          ➤ Mobile App & API Integration for Billing and Payment.
        </p>

        <p>
          ➤ Scalable Micro Services for Efficient Data Handling.
        </p>

        <p>
          ➤ Traffic Distribution with Load Balancer.
        </p>

        <p>
          ➤ Large Scale Data Processing & Transformation .
        </p>

        <p>
          ➤  Big Data Storage & Cloud Integration.
        </p>

        <p>
          ➤ Enhanced Database Performance through Optimization.
        </p>

        <p>
          ➤ GIS-Based Network and Service Management.
        </p>

       <p>
          ➤ Dashboard & Reporting for Operational Activities.
       </p>

       <p>
          ➤ Web Portal & APIs for Reporting.
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

export default PdclChallenges;