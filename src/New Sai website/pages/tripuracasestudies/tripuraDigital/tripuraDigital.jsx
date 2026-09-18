import React from "react";
import styles from "./tripuraDigital.module.css";
import villageVideo from "../../../../assets/newsaiwebsiteimage/four-boys-walking-away-down-a-village-road-at-gold.mp4"

const TripuraDigital = () => {
  return (
    <section className={styles["overviewSection"]}>
      <div className={styles["container"]}>

        {/* Left Content */}
        <div className={styles["content"]}>
          <h1 className={styles["title"]}>
            Distribution Franchisee <br />
            Tripura Digital <br />
            Solutions
          </h1>

          <h2 className={styles["heading"]}>Overview</h2>

          <p className={styles["description"]}>
            This project modernizes power distribution by integrating advanced metering
             infrastructure (AMI), automated billing, and data analytics. These innovations
              enhance operational efficiency, improve data accuracy, reduce energy losses, 
              and optimize service delivery. The result is a more reliable, cost-effective 
              power network that empowers utility providers, enhances customer satisfaction, 
              and supports sustainable energy practices.
          </p>
        </div>

        {/* Right Video */}
        <div className={styles["videoContainer"]}>
          <video
            className={styles["video"]}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={villageVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
};

export default TripuraDigital;