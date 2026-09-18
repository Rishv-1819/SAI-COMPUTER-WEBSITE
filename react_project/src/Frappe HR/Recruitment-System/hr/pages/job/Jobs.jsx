import jobs from "../../../components/jobcard/jobs.js";

function Jobs() {

    return (

        <div className="page">

            <h2>Job Openings</h2>

            {jobs.map((job) => (

                <div
                    key={job.id}
                    style={{
                        border: "1px solid #ddd",
                        padding: "15px",
                        marginBottom: "15px",
                        borderRadius: "8px"
                    }}
                >

                    <h3>{job.title}</h3>

                    <p><b>Company:</b> {job.company}</p>

                    <p><b>Type:</b> {job.type}</p>

                    <p><b>Location:</b> {job.location}</p>

                    <p><b>Department:</b> {job.department}</p>

                    <p><b>Salary:</b> {job.salary || "Not Disclosed"}</p>

                    <p><b>Applications:</b> {job.applications}</p>

                    <p><b>Posted:</b> {job.posted}</p>

                    <p><b>Closing Date:</b> {job.closing}</p>

                </div>

            ))}

        </div>

    );

}

export default Jobs;