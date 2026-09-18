import OfferStatus from "../Status/OfferStatus.jsx";
import "./OfferTable.css";

function OfferTable({
  data,
  onEdit,
  onDelete,
  onPrint,
  onDownload,
}) {
  return (
    <table className="offer-table">

      <thead>
        <tr>
          <th>Candidate</th>
          <th>Offer Date</th>
          <th>Package</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {data.map((item) => (

          <tr key={item.id}>

            <td>{item.name}</td>

            <td>{item.offer_date}</td>

            <td>₹ {item.package_amount}</td>

            <td>
              <OfferStatus status={item.status} />
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

              <button
                className="print-btn"
                onClick={() => onPrint(item.id)}
              >
                Print
              </button>

              <button
                className="pdf-btn"
                onClick={() => onDownload(item.id)}
              >
                PDF
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default OfferTable;