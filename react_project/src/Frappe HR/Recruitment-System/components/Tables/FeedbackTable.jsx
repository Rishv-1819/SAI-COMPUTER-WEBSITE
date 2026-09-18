import "./FeedbackTable.css";
import FeedbackStatus from "../Status/FeedbackStatus.jsx";

function FeedbackTable({ data, onEdit, onDelete }) {
  return (
    <table className="feedback-table">

      <thead>
        <tr>
          <th>Candidate</th>
          <th>Interviewer</th>
          <th>Rating</th>
          <th>Result</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {data.map((item) => (

          <tr key={item.id}>

            <td>{item.full_name}</td>

            <td>{item.interviewer_name}</td>

            <td>{item.rating}/10</td>

            <td>
              <FeedbackStatus status={item.result} />
            </td>

            <td>

              <button
                className="edit-btn"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => onDelete(item.id)}
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

export default FeedbackTable;