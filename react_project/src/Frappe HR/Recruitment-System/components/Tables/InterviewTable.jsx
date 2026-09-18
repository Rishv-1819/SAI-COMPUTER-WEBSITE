import "./InterviewTable.css";
import InterviewStatus from "../Status/InterviewStatus.jsx";

function InterviewTable({

    data,

    onEdit,

    onDelete

}) {

    return (

        <table className="interview-table">

            <thead>

                <tr>
                    <th>Interviewer id</th>

                    <th>Applicant ID</th>

                    <th>Candidate</th>

                    <th>Interviewer</th>

                    <th>Date</th>

                    <th>Mode</th>

                    <th>Status</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    data.map(item => (

                        <tr key={item.id}>

                            <td>{item.id}</td>

                            <td>{item.applicant_id}</td>

                            <td>{item.name}</td>

                            <td>{item.interviewer_name}</td>

                            <td>{item.interview_date}</td>

                            <td>{item.mode}</td>

                            <td>

                                <InterviewStatus

                                    status={item.status}

                                />

                            </td>

                            <td>

                                <button
                                    onClick={() => onEdit(item)}
                                >

                                    Edit

                                </button>

                                <button
                                    onClick={() => onDelete(item.id)}
                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    )

}

export default InterviewTable;