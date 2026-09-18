import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "/src/assets/newsaiwebsiteimage/network_3d_effect.gif";
import img2 from "/src/assets/newsaiwebsiteimage/desk_3d_zoom_tilt.gif";
import img3 from "/src/assets/newsaiwebsiteimage/animated_imagemoment.gif";
import img4 from "/src/assets/newsaiwebsiteimage/animated_movement.gif";

import "./Herosection.css";

const HeroSection = () => {
  const slides = [
    {
      image: img1,
      title: "Distribution Utility Meet DUM 2024",
      subtitle: "8th Annual Conference of Power Distribution Utilities",
    },
    {
      image: img2,
      title: "Energy Leadership Summit",
      subtitle: "Driving Innovation in Utility Management",
    },
    {
      image: img3,
      title: "Technology Expo 2024",
      subtitle: "Future Ready Digital Solutions",
    },
    {
      image:img4,
      title: "Smart Grid Conference",
      subtitle: "Powering Tomorrow Together",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />

          <div className="overlay"></div>

          <div className="content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>

          </div>
        </div>
      ))}

      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>

      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;