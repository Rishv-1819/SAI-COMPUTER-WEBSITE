import { Link } from "react-router-dom";
import "./Table.css";
import StatusBadge from "../../hr/pages/StatusBadge/StatusBadge.jsx";

function ApplicantTable({
    data,
    onEdit,
    onDelete,
}) {
    return (
        <table className="hr-table">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Stage</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>

                {data.map((applicant) => (

                    <tr key={applicant.id}>

                        <td>

                            <Link to={`/hr/applicants/${applicant.id}`}>
                                {applicant.name}
                            </Link>

                        </td>

                        <td>{applicant.email}</td>

                        <td>{applicant.phone}</td>

                        <td>
                            <StatusBadge stage={applicant.stage || applicant.status} />
                        </td>

                        <td>

                            <button
                                className="action-btn edit-btn"
                                onClick={() => onEdit(applicant)}
                            >
                                Edit
                            </button>

                            <button
                                className="action-btn delete-btn"
                                onClick={() => onDelete(applicant.id)}
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}

export default ApplicantTable;