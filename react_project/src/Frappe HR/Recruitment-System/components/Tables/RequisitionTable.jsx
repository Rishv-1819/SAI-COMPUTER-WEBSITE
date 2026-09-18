import "./Table.css";

function RequisitionTable({

    data,

    onEdit,

    onDelete

}) {

    return (

        <table className="hr-table">

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Title</th>

                    <th>Department</th>

                    <th>Vacancies</th>

                    <th>Status</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    data.map(item => (

                        <tr key={item.id}>

                            <td>{item.id}</td>

                            <td>{item.title}</td>

                            <td>{item.department}</td>

                            <td>{item.vacancies}</td>

                            <td>{item.status}</td>

                            <td>

                                <button

                                    className="action-btn edit-btn"

                                    onClick={() => onEdit(item)}

                                >

                                    Edit

                                </button>

                                <button

                                    className="action-btn delete-btn"

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

export default RequisitionTable;