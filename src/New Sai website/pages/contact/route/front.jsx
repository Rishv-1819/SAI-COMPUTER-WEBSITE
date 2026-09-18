import React from "react";
import style from "../contact.module.css";

const ContactFront = () => {
  return (
    <section className={style["contact-section"]}>
      <div className={style["contact-tag"]}>CONTACT</div>

      <h1 className={style["contact-title"]}>We're here to help</h1>

      <div className={style["contact-info"]}>
        <div className={style["info-box"]}>
          <h3>Call us at:</h3>
          <p>+91-9359611016</p>
        </div>

        <div className={style["divider"]}></div>

        <div className={style["info-box"]}>
          <h3>Email us:</h3>
          <p>saicomp@thesaicomputers.com</p>
        </div>
      </div>

      <button className={style["contact-btn"]}>
        Schedule consultation
      </button>

      <div className={style["pattern"]}>
        {[...Array(25)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </section>
  );
};

export default ContactFront;