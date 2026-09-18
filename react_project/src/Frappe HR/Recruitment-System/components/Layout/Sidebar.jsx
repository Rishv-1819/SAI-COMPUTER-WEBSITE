import { Link } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {

    return (


        <div className="sidebar">

            <h2>Frappe HR</h2>

            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
                <Link to="/hr/requisitions">Requisitions</Link>
            </li>

            <li>
                 <Link to="/hr/staffing">Staffing</Link>
            </li>

            <li>
                <Link to="/hr/jobs">Job Openings</Link>
            </li>

            <li>
                <Link to="/hr/applicants">Applicants</Link>
            </li>

            <li>
                <Link to="/hr/interviews">Interviews</Link>

            </li>

            <li>
                <Link to="/hr/feedback">Feedback</Link>
            </li>

            <li>
                <Link to="/hr/offers">Offers</Link>
            </li>

            <li>
                <Link to="/hr/notifications">Notifications</Link>
            </li>

            <li>
                <Link to="/hr/profile">Profile</Link>
            </li>

            <li>
                <Link to="/hr/settings">Settings</Link>
            </li>
           

        </div>

    )

}

export default Sidebar;