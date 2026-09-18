import React from "react";
import style from "../contact.module.css";
import BuildingImg from "../../../../assets/Building.jpg"; // Add your image here

const Location = () => {
  return (
    <section className={style["location-section"]}>
      {/* Decorative Pattern */}
      <div className={style["location-pattern"]}>
        {[...Array(36)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className={style["container"]}>
        <h1 className={style["location-title"]}>Our Location</h1>

        <div className={style["location-content"]}>
          {/* Left Content */}
          <div className={style["location-info"]}>
            <h2>Sai Computers Limited</h2>

            <h3>Meerut</h3>

            <p>
              Sai Dhaam, Victoria Park
              <br />
              Meerut - 250001 Uttar
              <br />
              Pradesh, India
            </p>

            <p className={style["phone"]}>+91-9359611016</p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={style["direction-btn"]}
            >
              Get direction
            </a>
          </div>

          {/* Right Image */}
          <div className={style["location-image"]}>
            <img src={BuildingImg} alt="Sai Computers Office" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;