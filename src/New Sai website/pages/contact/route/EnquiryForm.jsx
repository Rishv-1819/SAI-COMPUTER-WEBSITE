import React, { useState } from "react";
import style from "../contact.module.css";
const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    vertical: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <section className={style["enquiry-section"]}>
      <div className={style["enquiry-container"]}>

        {/* Left Content */}
        <div className={style["enquiry-left"]}>

          <div className={style["heading-box"]}>
            <h1>
              In-depth client discussions
              <br />
              to understand their
              <br />
              challenges
            </h1>
          </div>

          <div className={style["content-box"]}>
            <p>
              We're happy to answer any questions you may have and
              help you determine which of our services best fit your
              needs.
            </p>

            <h3>Call us at: +91-9359611016</h3>

            <h2>
              Highly skilled team for handholding support &
              implementation.
            </h2>
          </div>

        </div>

        {/* Right Form */}
        <div className={style["enquiry-right"]}>

          <div className={style["form-header"]}>
            <h2>Enquiry form</h2>
          </div>

          <form onSubmit={handleSubmit}>

            <div className={style["row"]}>
              <div className={style["form-group"]}>
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className={style["form-group"]}>
                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={style["form-group"]}>
              <label>Company / Organization</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className={style["form-group"]}>
              <label>Company email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={style["form-group"]}>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={style["form-group"]}>
              <label>Our Verticals</label>
              <select
                name="vertical"
                value={formData.vertical}
                onChange={handleChange}
              >
                <option value="">Select Option</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Digital Marketing</option>
                <option>Cloud Solutions</option>
                <option>Cyber Security</option>
              </select>
            </div>

            <div className={style["form-group"]}>
              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="To better assist you, please describe how we can help..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className={style["submit-btn"]}>
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default EnquiryForm;