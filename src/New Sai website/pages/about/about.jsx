import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";
import aboutImg from "../../../assets/newsaiwebsiteimage/Founder_Sh. Hemanet kumar Ji.jpg";

function About() {
  return (
    <section className={style["about-section"]}>
      <div className={style["about-container"]}>

        {/* Left Side Image */}
        <div className={style["img"]}>
          <img src={aboutImg} alt="About Us" />
        </div>

        {/* Right Side Content */}
        <div className={style["about-content"]}>

          <h2>ABOUT US</h2>
          <div className={style["underline"]}></div>

          <p>
            Late Shri Hemant Kumar - Founder and First Chairman: 
            Late Shri Hemant Kumar Ji, a freedom fighter and visionary leader, 
            founded FISME and IIA, advocated for MSME policies, and contributed 
            to SIDBI's establishment, MODVAT, and the 1998 MSME Act. His efforts 
            significantly fostered industrial growth and strengthened India's MSME 
            ecosystem
          </p>

          {/* Leadership Heading */}
          <h3>Leadership</h3>

          <p>
            <strong>Mr. Girish Kumar</strong><br/>
             Chairman and Managing Directo
          </p>
          <p> 
            <strong>Mr. Ayush Kumar</strong><br/>
            Chief Executive Officer of Sai Computers Limited (SCL)
          </p>


          {/* Read More Hyperlink */}
          <Link to="/learndata" className={style["read-more-btn"]}>
            Read More →
          </Link>

        </div>
      </div>
    </section>
  );
}

export default About;