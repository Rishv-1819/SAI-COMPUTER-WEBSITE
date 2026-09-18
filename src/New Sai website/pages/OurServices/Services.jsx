import React from "react";
import style from "./Services.module.css";

import service1 from "../../../assets/newsaiwebsiteimage/Meter Icon.png";
import service2 from "../../../assets/newsaiwebsiteimage/Smart-meter-analytics-thumbnail.webp";
import service3 from "../../../assets/newsaiwebsiteimage/Revenue Management Icon.png";
import service4 from "../../../assets/newsaiwebsiteimage/predictive-maintenance-keepler.webp";
import service5 from "../../../assets/newsaiwebsiteimage/Outage Icon.png";
import service6 from "../../../assets/newsaiwebsiteimage/utp-4.webp";

function Services() {
  const services = [
    {
      image: service1,
      title: "AMISP",
      link: "/read",
      desc: "SCL provides end-to-end AMI solutions, transforming utilities with smart metering, "
    },
    {
      image: service2,
      title: "Smart meter analytics",
      link: "/ReadMore",
      desc: "MRI & Data Analytics identifies energy loss from faults, thefts, and errors.",
    },
    {
      image: service3,
      title: "Total Revenue Management",
      link: "/readdata",
      desc: "Comprehensive System Integration and Loophole Identification across Meter Mapping.",
    },
    {
      image: service4,
      title: "Predictive maintenance",
      link: "/readmoredata",
      desc: "Leveraging drones to monitor hard-to-access infrastructure components.",
    },
    {
      image: service5,
      title: "Outage management System",
      link: "/readmore data",
      desc: "Centralized Complaint Logging, AI-Powered Outage Prediction, Maintenance.",
    },
    {
      image: service6,
      title: "Meter verification/OCR",
      link: "/readabout",
      desc: "Automated Detection and Validation of Meter Readings to Identify Discrepancies or Tampering, with System-Generated Alerts for anomalies.",
    },
  ];

  return (
    <section className={style["services-section"]}>
       <h2 className={style["section-title"]}>OUR SERVICES</h2>
      <div className={style["container"]}>
        <div className={style["services-grid"]}>
          {services.map((service, index) => (
            <div className={style["service-card"]} key={index}>
              <a href={service.link}>
                <div className={style["service-icon"]}>
                  <img src={service.image} alt={service.title} />
                </div>
              </a>
              <h3>
                <a href={service.link}>{service.title}</a>
              </h3>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;