import React from "react";
import "./Blogs.css";

import img1 from "/src/assets/Tripura-Case-Study.webp";
import img2 from "/src/assets/uppcl-meter.webp";
import img3 from "/src/assets/banner3.jpg";

const caseStudies = [
  {
    image: img1,
    link: "/Case1",
    title: "Distribution Franchisee Tripura Digital Solutions",
    description:
      "Modernizes power distribution through advanced technologies like AMI and automated billing, improving efficiency, accuracy, and service delivery while empowering utilities for a reliable, cost-effective network and enhanced customer satisfaction.",
    points: [
      "Analyze consumption patterns to optimize energy management.",
      "Simplify payments for customer convenience.",
    ],
  },
  {
    image: img2,
    link: "/Case2",
    title: "UPPCL Meter Data Analytics",
    description:
      "UPPCL Meter Data Analytics Tool offers meter data analysis (energy, load, tamper) via a web platform. It visualizes consumption, flags theft, and provides user-based reports for better energy management, accuracy, and theft reduction.",
    points: [
      "Delivery of data and reports in both hard and soft copy formats.",
      "Continuous monitoring of energy flow patterns.",
    ],
  },
  {
    image: img3,
    link: "/Case3",
    title: "Distribution Franchisee MePDCL Digital Solutions",
    description:
      "Modernizes power distribution franchisee through advanced metering, billing, data analytics, and GIS-based asset management. It enhances operational efficiency, improves data accuracy, reduces energy losses, and streamlines service operations.",
    points: [
      "Mobile apps/CMRI enable efficient meter reading uploads.",
      "Integrated payments (UPI, QR, cash, card, apps).",
    ],
  },
];

function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="container">
        <h1 className="section-heading">Case Studies</h1>

        <div className="case-grid">
          {caseStudies.map((item, index) => (
            <div className="case-card" key={index}>
              <a href={item.link}>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="case-image"
                />
              </div>  
              </a>

              <div className="case-content">
                <h2>{item.title}</h2>
              
                <p>{item.description}</p>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>✓ {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;