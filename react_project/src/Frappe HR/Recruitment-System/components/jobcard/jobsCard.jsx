import { Link } from "react-router-dom";
import style from "./jobsCards.module.css";

const JobCard = ({ job }) => {

  return (

    <Link
      to={`/career/${job.id}`}
      className={style["job-link"]}
    >

      <div className={style["job-card"]}>

        <div className={style["top"]}>

          <div>

            <h2>{job.title}</h2>

            <p>

              <strong>Frappe HR</strong>

            </p>

          </div>

          <span className={style["badge"]}>

            {job.status}

          </span>

        </div>

        <p>⚙ {job.department}</p>

        <p>{job.description}</p>

        <p>💰 {job.salary_range}</p>

      </div>

    </Link>

  );

};

export default JobCard;