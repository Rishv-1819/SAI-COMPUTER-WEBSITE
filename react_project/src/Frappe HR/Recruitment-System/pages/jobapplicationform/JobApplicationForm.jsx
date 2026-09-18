import { useState } from "react";
import { applyJob } from "../../apis/applicationApi.js";
import "./JobApplicationForm.css";

function JobApplication() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    position: "",
    status: "",
  });

  const [resume, setResume] = useState(null);

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("country", form.country);
    data.append("position", form.position);
    data.append("status", form.status);

    if (resume) {
      data.append("resume", resume);
    }

    try {

      const res = await applyJob(data);

      setSuccess(res.data.message);

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
        country: "",
        position: "",
        status: "",
      });

      setResume(null);

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Something went wrong!"
      );

    }

  };

  return (

    <div className="job-container">

      <div className="form-box">

        <h2>Job Application Form</h2>

        {success &&

          <div className="success-msg">

            {success}

          </div>

        }

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
            />

          </div>

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />

          </div>

          <div className="form-group">

            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Phone"
              required
            />

          </div>

          <div className="form-group">

            <label>Country</label>

            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              required
            >

              <option value="">Select Country</option>

              <option>India</option>

              <option>USA</option>

              <option>Canada</option>

            </select>

          </div>

          <div className="form-group">

            <label>Position</label>

            <select
              name="position"
              value={form.position}
              onChange={handleChange}
              required
            >

              <option value="">Select Position</option>

              <option>Software Developer</option>

              <option>React Developer</option>

              <option>UI Designer</option>

            </select>

          </div>

          <div className="form-group">

            <label>Employment Status</label>

            <div className="radio-group">

              <label>

                <input
                  type="radio"
                  name="status"
                  value="Employed"
                  checked={form.status === "Employed"}
                  onChange={handleChange}
                />

                Employed

              </label>

              <label>

                <input
                  type="radio"
                  name="status"
                  value="Student"
                  checked={form.status === "Student"}
                  onChange={handleChange}
                />

                Student

              </label>

            </div>

          </div>

          <div className="form-group">

            <label>Upload Resume</label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />

          </div>

          <button
            className="submit-btn"
            type="submit"
          >

            Apply Now

          </button>

        </form>

      </div>

    </div>

  );

}

export default JobApplication;