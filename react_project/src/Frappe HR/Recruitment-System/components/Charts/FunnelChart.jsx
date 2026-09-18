import "./FunnelChart.css";

function FunnelChart({ data }) {

    return (

        <div className="chart-box">

            <h3>

                Recruitment Funnel

            </h3>

            {

                data.map((item, index) => (

                    <div

                        key={index}

                        className="funnel-item"

                    >

                        <div>

                            {item.stage}

                        </div>

                        <div>

                            {item.value}

                        </div>

                    </div>

                ))

            }

        </div>

    )

}

export default FunnelChart;