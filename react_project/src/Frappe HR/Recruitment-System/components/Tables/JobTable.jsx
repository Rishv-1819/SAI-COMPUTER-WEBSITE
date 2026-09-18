import "./Table.css";

function JobTable({

  data,

  onEdit,

  onDelete,

  onPublish,

  onClose,

}) {

  return (

    <table className="hr-table">

      <thead>

        <tr>

          <th>ID</th>

          <th>Title</th>

          <th>Department</th>

          <th>Salary</th>

          <th>Status</th>

          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        {data.map((job) => (

          <tr key={job.id}>

            <td>{job.id}</td>

            <td>{job.title}</td>

            <td>{job.department}</td>

            <td>{job.salary_range}</td>

            <td>{job.status}</td>

            <td>

              <button
                className="action-btn edit-btn"
                onClick={() => onEdit(job)}
              >
                Edit
              </button>

              <button
                className="action-btn delete-btn"
                onClick={() => onDelete(job.id)}
              >
                Delete
              </button>

              {job.status !== "published" ? (

                <button
                  className="action-btn"
                  onClick={() => onPublish(job.id)}
                >
                  Publish
                </button>

              ) : (

                <button
                  className="action-btn"
                  onClick={() => onClose(job.id)}
                >
                  Close
                </button>

              )}

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default JobTable;