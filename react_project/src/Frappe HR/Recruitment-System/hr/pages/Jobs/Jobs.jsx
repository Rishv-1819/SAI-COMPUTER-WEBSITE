import { useEffect, useState } from "react";

import JobForm from "../../../components/Forms/JobForm.jsx";

import JobTable from "../../../components/Tables/JobTable.jsx";

import {

    getJobs,
    createJob,
    deleteJob

}

    from "../../../apis/jobApi.js";

import "./Jobs.css";

function Jobs() {

    const [data, setData] = useState([]);

    useEffect(() => {

        load();

    }, []);

    const load = async () => {

        const res = await getJobs();

        setData(res.data);

    }

    const add = async (form) => {

        await createJob(form);

        load();

    }

    const remove = async (id) => {

        await deleteJob(id);

        load();

    }

    return (

        <div className="page">

            <h2>

                Job Openings

            </h2>

            <JobForm

                onSubmit={add}

            />

            <JobTable

                data={data}

                onDelete={remove}

                onEdit={() => { }}

            />

        </div>

    )

}

export default Jobs;