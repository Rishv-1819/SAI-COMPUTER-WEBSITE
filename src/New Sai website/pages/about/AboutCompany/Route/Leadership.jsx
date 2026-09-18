import React from "react";
import "./Leadership.css";

import founder from "../../../../../assets/newsaiwebsiteimage/Founder_Sh. Hemanet kumar Ji.jpg";
import chairman from "../../../../../assets/newsaiwebsiteimage/Founder_Sh. Girish Kumar -1.jpg";
import ceo from "../../../../../assets/newsaiwebsiteimage/CEO_Ayush_Sir.png";

const Leadership = () => {
  return (
    <section className="leadership">

      <div className="leadership-container">

        {/* Left Side */}

        <div className="leadership-content">

          <h1>Leadership</h1>

          <div className="leader-block">
            <p>
              <strong>Late Shri Hemant Kumar - Founder and First Chairman:</strong>
              {" "}
              Late Shri Hemant Kumar Ji, a freedom fighter and visionary
              leader, founded FISME and IIA, advocated for MSME policies,
              and contributed to SIDBI's establishment, MODVAT, and the
              1998 MSME Act. His efforts significantly fostered industrial
              growth and strengthened India's MSME ecosystem.
            </p>
          </div>

          <div className="leader-block">
            <p>
              <strong>Mr. Girish Kumar - Chairman & Managing Director:</strong>
              {" "}
              Mr. Girish Kumar, Managing Director of Sai Computers Limited (SCL) 
              and an IIT Kanpur alumnus with 35+ years of experience, has driven 
              transformative advancements in power distribution and transformers. 
              Under his leadership, SCL expanded Distribution Franchisee operations 
              in Northeast India, improving efficiency and customer satisfaction. 
              A pioneer in AI-driven solutions, he leverages data analytics and machine 
              learning to optimize distribution, enhance asset management, and reduce AT&C 
              losses. He holds a patent for a voltage stabilizer and presented India's 
              first CAD of Transformers paper at a national seminar. Recognized with the 
              National Award for Excellence in Entrepreneurship (2007), he serves as Senior 
              Vice President of ITMA and actively contributes to industry forums, setting 
              benchmarks in performance and reliability.
            </p>
          </div>

          <div className="leader-block">
            <p>
              <strong>Mr. Ayush Kumar - Chief Executive Officer:</strong>
              {" "}
              Mr. Ayush Kumar, the Chief Executive Officer of Sai Computers Limited 
              (SCL), is a visionary leader in power distribution. He has driven SCL’s 
              expansion in Northeast India, enhancing efficiency, customer satisfaction,
               and service delivery. By leveraging AI, data analytics, and machine 
               learning, he optimizes asset management and reduces AT&C losses, 
               positioning SCL as a trusted partner. Committed to innovation, Mr. Kumar 
               fosters adaptability and sets new benchmarks in the power sector and beyond, 
               paving the way for a smarter, more efficient future.
            </p>
          </div>

        </div>

        {/* Right Side */}

        <div className="leadership-images">

          <div className="image-card">
            <img src={founder} alt="Founder" />
          </div>

          <div className="image-card">
            <img src={chairman} alt="Chairman" />
          </div>

          <div className="image-card">
            <img src={ceo} alt="CEO" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Leadership;