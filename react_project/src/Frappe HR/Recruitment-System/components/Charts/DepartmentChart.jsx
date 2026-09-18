import "./DepartmentChart.css";
import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer

} from "recharts";

function DepartmentChart({ data }) {

    return (

        <div className="chart-box">
            <div className="department-chart">
                <h3>

                    Department Hiring

                </h3>

                <ResponsiveContainer

                    width="100%"

                    height={300}

                >

                    <BarChart data={data}>

                        <XAxis dataKey="department" />

                        <YAxis />

                        <Tooltip />

                        <Bar

                            dataKey="count"

                            fill="#10b981"

                        />

                    </BarChart>

                </ResponsiveContainer>
            </div>
        </div>

    )

}

export default DepartmentChart;