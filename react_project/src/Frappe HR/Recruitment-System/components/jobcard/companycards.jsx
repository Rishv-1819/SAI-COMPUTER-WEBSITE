import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import JobCard from "./jobsCard.jsx";
import { getJobs } from "../../apis/jobApi.js";

import "./companycard.css";

const Careers = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {

      const res = await getJobs();

      // Sirf Published jobs dikhana
      const publishedJobs = res.data.filter(
        (job) => job.status === "published"
      );

      setJobs(publishedJobs);

    } catch (err) {

      console.log(err);

    }
  };

  return (

    <div className="career-page">

      <aside className="sidebar">

        <h3>Company</h3>

        <label>
          <Link to="/Frappe" className="sidebar-link">
            Frappe
          </Link>
        </label>

        <h3>Department</h3>

        <label>
          <Link to="/Accounts" className="sidebar-link">
            Accounts
          </Link>
        </label>

        <label>
          <Link to="/Marketing" className="sidebar-link">
            Marketing
          </Link>
        </label>

        <label>
          <Link
            to="/Research & Development"
            className="sidebar-link"
          >
            Research & Development
          </Link>
        </label>

        <h3>Employment Type</h3>

        <label>
          <Link to="/Full-time" className="sidebar-link">
            Full-time
          </Link>
        </label>

        <label>
          <Link to="/Intern" className="sidebar-link">
            Intern
          </Link>
        </label>

        <label>
          <Link to="/Part-time" className="sidebar-link">
            Part-time
          </Link>
        </label>

        <h3>Location</h3>

        <label>
          <Link to="/Bangalore" className="sidebar-link">
            Bangalore
          </Link>
        </label>

        <label>
          <Link to="/Mumbai" className="sidebar-link">
            Mumbai
          </Link>
        </label>

        <label>
          <Link to="/NewYork" className="sidebar-link">
            New York
          </Link>
        </label>

        <h3>HR Department</h3>

        <label>
          <Link to="/hr/login" className="sidebar-link">
            HR Manager
          </Link>
        </label>

      </aside>

      <section className="jobs">

        <h4>Showing {jobs.length} Results</h4>

        <div className="grid">

          {jobs.map((job) => (

            <JobCard
              key={job.id}
              job={job}
            />

          ))}

        </div>

      </section>

    </div>

  );

};

export default Careers;