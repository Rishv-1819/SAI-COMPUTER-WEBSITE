import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboardData } from "../../../apis/dashboardApi.js";
import { getAnalytics } from "../../../apis/analyticsApi";
import DashboardCard from "../../../components/Cards/DashboardCard.jsx";
import HiringChart from "../../../components/Charts/HiringChart.jsx";
import DepartmentChart from "../../../components/Charts/DepartmentChart.jsx";
import FunnelChart from "../../../components/Charts/FunnelChart.jsx";
import RecruitmentChart from "../../../components/Charts/RecruitmentChart.jsx";

import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("isLoggedIn");

    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("hrUser");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("hrUser"));

  const [data, setData] = useState({});
  const [analytics, setAnalytics] = useState({
    hiring: [],
    departments: [],
    funnel: [],
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const res = await getDashboardData();
    setData(res.data);

    const chart = await getAnalytics();
    setAnalytics(chart.data);
  };

  return (
    <>
      <div style={{ padding: "30px" }}>
        <h2>HR Dashboard</h2>

        <h3>Welcome {user?.name}</h3>

        <p>Email : {user?.email}</p>

        <p>Role : {user?.role}</p>

        <button onClick={logout}>Logout</button>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <button onClick={() => navigate("/hr/requisitions")}>
          Requisitions
        </button>

        <button onClick={() => navigate("/hr/jobs")}>
          Jobs
        </button>

        <button onClick={() => navigate("/hr/applicants")}>
          Applicants
        </button>

        <button onClick={() => navigate("/hr/interviews")}>
          Interviews
        </button>

        <button onClick={() => navigate("/hr/offers")}>
          Offers
        </button>
      </div>

      <div className="dashboard">
        <h2>Recruitment Dashboard</h2>

        <div className="dashboard-grid">
          <DashboardCard
            title="Job Openings"
            value={data.jobOpenings || 0}
          />

          <DashboardCard
            title="Applicants"
            value={data.applicants || 0}
          />

          <DashboardCard
            title="Interviews"
            value={data.interviews || 0}
          />

          <DashboardCard
            title="Offers"
            value={data.offers || 0}
          />

          <DashboardCard
            title="Hired"
            value={data.hired || 0}
          />
        </div>

        <HiringChart data={analytics.hiring} />

        <DepartmentChart data={analytics.departments} />

        <FunnelChart data={analytics.funnel} />

        <RecruitmentChart />
      </div>
    </>
  );
}

export default Dashboard;