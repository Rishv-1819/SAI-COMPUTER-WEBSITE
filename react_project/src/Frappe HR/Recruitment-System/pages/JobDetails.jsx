import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getJobById } from "../apis/jobApi.js";

import style from "./JobDetails.module.css";

function JobDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [job, setJob] = useState({});

  useEffect(() => {
    loadJob();
  }, [id]);

  const loadJob = async () => {

    try {

      const res = await getJobById(id);

      setJob(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className={style["job-details-page"]}>

      <div className={style["job-details-card"]}>

        <div className={style["job-top"]}>

          <div>

            <h1>{job.title}</h1>

            <p className={style["company-name"]}>
              SAI Technologies Pvt. Ltd.
            </p>

          </div>

          <div className={style["top-right"]}>

            <span className={style["job-status"]}>
              {job.status}
            </span>

            <button
              className={style["apply-btn"]}
              onClick={() =>
                navigate(`/JobApplicationForm/${job.id}`)
              }
            >
              Apply Job
            </button>

          </div>

        </div>

        <div className={style["job-info"]}>

          <div className={style["info-box"]}>

            <h3>Department</h3>

            <p>{job.department}</p>

          </div>

          <div className={style["info-box"]}>

            <h3>Salary</h3>

            <p>{job.salary_range}</p>

          </div>

          <div className={style["info-box"]}>

            <h3>Job ID</h3>

            <p>{job.id}</p>

          </div>

          <div className={style["info-box"]}>

            <h3>Status</h3>

            <p>{job.status}</p>

          </div>

        </div>

        <div className={style["description-card"]}>

          <h2>Job Description</h2>

          <p>{job.description}</p>

        </div>

      </div>

    </div>

  );

}

export default JobDetails;