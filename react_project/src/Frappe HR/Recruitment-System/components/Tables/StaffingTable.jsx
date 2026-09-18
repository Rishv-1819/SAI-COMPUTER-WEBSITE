import "./Table.css";

function StaffingTable({

    data,

    onEdit,

    onDelete

}) {

    return (

        <table className="hr-table">

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Role</th>

                    <th>Department</th>

                    <th>Vacancies</th>

                    <th>Headcount</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    data.map(item => (

                        <tr key={item.id}>

                            <td>{item.id}</td>

                            <td>{item.role_name}</td>

                            <td>{item.department}</td>

                            <td>{item.vacancies}</td>

                            <td>{item.current_headcount}</td>

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

export default StaffingTable;