import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";

import Img1 from "../../../assets/newsaiwebsiteimage/Transformer Manufacturing.jpg";
import Img2 from "../../../assets/newsaiwebsiteimage/Distribution-franchise.jpg";
import Img3 from "../../../assets/newsaiwebsiteimage/Blog-Banner-Digital-Product-Development.jpg";
import Img4 from "../../../assets/newsaiwebsiteimage/what-is-a-utility-operating-system.jpg";

const Features = () => {
  const features = [
    {
      image: Img1,
      title: "Transformer Manufacturing",
      Link: "https://saielectricals.com/index.html",
      desc: "SCL is an industry-leading manufacturer and exporter of Transformers and Servo Voltage Stabilizers, with a strong reputation for quality and innovation.",
      external:true,
    },
    {
      image: Img2,
      title: "Distribution Franchise",
      Link: "/read",
      desc: "SCL's distribution franchisee services are designed to ensure seamless power distribution, consumer satisfaction, and operational efficiency.",
      external:false,
    },
    {
      image: Img3,
      title: "Digital Products",
      Link: "/team",
      desc: "The SCL In-house Digital Products team is dedicated to delivering customized software solutions that cater to the unique needs of power utilities, helping them overcome their most pressing operational challenges.",
      external:false,
    },
    {
      image: Img4,
      title: "Utility Operations",
      Link: "/readmore",
      desc: "SCL's utility operations ensure efficiency and consumer convenience through smart metering for accurate energy tracking.",
      external:false,
    },
  ];

  return (
    <section className="features">
      <h2>FEATURES</h2>
      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            {item.external ? (
              <a href={item.Link}
              target="_blank"
              rel="noopener noreferrer"
              >
                 <img src={item.image} alt={item.title} />
                  </a>
            ) : (
              <Link to={item.Link}>
                <img src={item.image} alt={item.title} />
              </Link>
            )}
            <h3>{item.external ? (
              <a href={item.Link}
              target="_blank"
              rel="noopener noreferrer">
                {item.title}
              </a>
            ) : (
              <Link
              to={item.Link}>{item.title}
              </Link>
            )}
            </h3>
            <p>{item.desc}</p>
           
          </div>
        ))}
      </div>
    </section>
  );S
};
export default Features;