import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./RecruitmentChart.css";

function RecruitmentChart() {
  const data = [
    {
      month: "Jan",
      Applicants: 25,
      Interviews: 15,
      Hired: 6,
    },
    {
      month: "Feb",
      Applicants: 40,
      Interviews: 22,
      Hired: 10,
    },
    {
      month: "Mar",
      Applicants: 35,
      Interviews: 18,
      Hired: 8,
    },
    {
      month: "Apr",
      Applicants: 55,
      Interviews: 30,
      Hired: 14,
    },
    {
      month: "May",
      Applicants: 48,
      Interviews: 28,
      Hired: 12,
    },
    {
      month: "Jun",
      Applicants: 65,
      Interviews: 38,
      Hired: 18,
    },
  ];

  return (
    <div className="recruitment-chart">

      <h2>Recruitment Analytics</h2>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey="Applicants" fill="#3b82f6" />

          <Bar dataKey="Interviews" fill="#10b981" />

          <Bar dataKey="Hired" fill="#f59e0b" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RecruitmentChart;