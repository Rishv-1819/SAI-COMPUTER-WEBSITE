import { useEffect, useState } from "react";

import JobForm from "../Forms/JobForm.jsx";
import JobTable from "../Tables/JobTable.jsx";

import {
  getJobs,
  createJob,
  deleteJob,
  updateJob,
  publishJob,
  closeJob,
} from "../../apis/jobApi.js";

import "./Jobs.css";

function Jobs() {

  const [data, setData] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {

    try {

      const res = await getJobs();

      setData(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const addJob = async (form) => {

    try {

      await createJob(form);

      loadJobs();

    } catch (err) {

      console.log(err);

    }

  };

  const removeJob = async (id) => {

    try {

      await deleteJob(id);

      loadJobs();

    } catch (err) {

      console.log(err);

    }

  };

  const editJob = async (job) => {

    try {

      await updateJob(job.id, job);

      loadJobs();

    } catch (err) {

      console.log(err);

    }

  };

  const publish = async (id) => {

    try {

      await publishJob(id);

      loadJobs();

    } catch (err) {

      console.log(err);

    }

  };

  const close = async (id) => {

    try {

      await closeJob(id);

      loadJobs();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="page">

      <h2>Job Openings</h2>

      <JobForm onSubmit={addJob} />

      <JobTable
        data={data}
        onEdit={editJob}
        onDelete={removeJob}
        onPublish={publish}
        onClose={close}
      />

    </div>

  );

}

export default Jobs;