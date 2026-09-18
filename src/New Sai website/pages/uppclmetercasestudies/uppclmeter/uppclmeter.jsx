import React from "react";
import styles from "../../tripuracasestudies/tripuraDigital/tripuraDigital.module.css";
import villageVideo from "../../../../assets/newsaiwebsiteimage/electric-meter-on-pole-in-a-village-scene-subtle-l.mp4"

const UppclMeter = () => {
  return (
    <section className={styles["overviewSection"]}>
      <div className={styles["container"]}>

        {/* Left Content */}
        <div className={styles["content"]}>
          <h1 className={styles["title"]}>
            UPPCL Meter Data  <br />
            Analytics <br />
          </h1>

          <h2 className={styles["heading"]}>Overview</h2>

          <p className={styles["description"]}>
            UPPCL Meter Data Analytics Tool for PVVNL, a web-based platform with 
            role-based access, enables meter data analysis, including energy, load 
            profile, and tamper data. Users can filter reports on energy loss, visualize 
            consumption patterns, and detect inefficiencies. The tool flags potential 
            energy theft, serializes meter data into timelines, and presents it in 
            graphical and tabular formats. It also provides consumer energy history 
            and identifies theft cases effectively.
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

export default UppclMeter;