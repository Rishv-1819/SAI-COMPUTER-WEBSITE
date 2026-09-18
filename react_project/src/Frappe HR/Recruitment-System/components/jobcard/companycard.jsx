import { useEffect, useState } from "react";
import JobCard from "./jobsCard.jsx";
import { getJobs } from "../../apis/jobApi.js";
import "./Companycard.css";
import { Link } from "react-router-dom";

const Careers = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="career-page">

      <aside className="sidebar">
        {/* Sidebar same rahegi */}
      </aside>

      <section className="jobs">

        <h4>Showing {jobs.length} results</h4>

        <div className="grid">

          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}

        </div>

      </section>

    </div>
  );
};

export default Careers;