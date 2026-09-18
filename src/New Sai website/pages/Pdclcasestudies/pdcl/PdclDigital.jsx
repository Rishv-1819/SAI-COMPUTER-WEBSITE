import React from "react";
import styles from "../../tripuracasestudies/tripuraDigital/tripuraDigital.module.css";
import villageVideo from "../../../../assets/newsaiwebsiteimage/birds-flying-around-and-past-the-electric-pole-and.mp4";

const PdclDigital = () => {
  return (
    <section className={styles["overviewSection"]}>
      <div className={styles["container"]}>

        {/* Left Content */}
        <div className={styles["content"]}>
          <h1 className={styles["title"]}>
            Distribution Franchisee <br />
            MePDCL Digital <br />
            Solutions<br/>
          </h1>

          <h2 className={styles["heading"]}>Overview</h2>

          <p className={styles["description"]}>
            This project modernize power distribution franchisee through advanced metering, 
            billing, data analytics, and GIS-based asset management. It enhances operational 
            efficiency, improves data accuracy, reduces energy losses, and streamlines 
            service operations for utility providers.
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

export default PdclDigital;