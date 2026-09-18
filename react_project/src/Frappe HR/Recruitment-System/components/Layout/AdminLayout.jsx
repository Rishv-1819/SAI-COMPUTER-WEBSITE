import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import "./AdminLayout.css";
import Header from "./Header";

function AdminLayout({ children }) {

  return (

    <div className="admin-layout">

      <Sidebar />

      <div className="admin-main">

        <Topbar />

        <Header />

        <main className="content">

          {children}

        </main>

        <div className="admin-content">

          {children}

        </div>

      </div>

    </div>

  );

}

export default AdminLayout;