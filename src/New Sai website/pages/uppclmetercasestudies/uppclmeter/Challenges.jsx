import React from "react";
import "../../tripuracasestudies/tripuraDigital/Challenges.css";
import meterImage from "../../../../assets/newsaiwebsiteimage/Uppcl-Case-Study.webp";

function UppclChallenges() {
  return (
    <section className="challenges">
      <div className="left-content">
        <h1>The Challenges</h1>

        <p>
          ➤ <strong>⮞ Data Processing:</strong> Converting raw meter data into a structured format 
          requires significant resources and time, especially with large datasets.
        </p>

        <p>
          ➤ <strong>Scalability & Performance:</strong> Ensuring the system scales efficiently 
          to handle increasing data volumes while maintaining fast performance.
        </p>

        <p>
          ➤ <strong>Data Integrity & Accuracy:</strong> Maintaining accurate readings and 
          detecting discrepancies, especially with tampering, requires robust 
          validation methods.
        </p>

        <p>
          ➤ <strong>Complex Reporting & Real-Time Processing:</strong> Generating detailed 
          reports in real-time under heavy load conditions requires reliable infrastructure.
        </p>


        <h1>solutions</h1>


        <p>
          ➤  Continuous Meter Data Collection and Seamless Upload.
        </p>

        <p>
          ➤ Secure Bulk Data Storage and Seamless Cloud Integration.
        </p>

        <p>
          ➤ Scalable Microservices Architecture for Enhanced Data Management.
        </p>

        <p>
          ➤ Dedicated Microservices for Optimized Use Case Management.
        </p>

        <p>
          ➤ Handling Large Data Processing and Transformation.
        </p>

        <p>
          ➤  Optimized Traffic Distribution with Azure Load Balancer.
        </p>

        <p>
          ➤ Optimizing Big Databases for Scalable Performance.
        </p>

        <p>
          ➤ Access Control System for Secure Operations.
        </p>

       <p>
          ➤  Consumer Segmentation & AI/ML Techniques.
       </p>


      </div>

      <div className="right-image">
        <img src={meterImage} alt="Meter" />
      </div>
    </section>
  );
}

export default UppclChallenges;