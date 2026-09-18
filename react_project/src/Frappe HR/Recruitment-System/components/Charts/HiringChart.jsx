import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer

} from "recharts";

import "./HiringChart.css";

function HiringChart({ data }) {

    return (

        <div className="chart-box">

            <h3>Monthly Hiring</h3>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line

                        type="monotone"

                        dataKey="hired"

                        stroke="#2563eb"

                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default HiringChart;