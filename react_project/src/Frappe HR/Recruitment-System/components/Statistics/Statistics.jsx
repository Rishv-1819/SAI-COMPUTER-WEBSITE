import "./Statistics.css";

function Statistics({ data }) {

    return (

        <div className="statistics">

            <h3>Recruitment Statistics</h3>

            <div className="statistics-item">
                <span className="statistics-title">Job Openings</span>
                <span className="statistics-value">{data.jobOpenings || 0}</span>
            </div>

            <div className="statistics-item">
                <span className="statistics-title">Applicants</span>
                <span className="statistics-value">{data.applicants || 0}</span>
            </div>

            <div className="statistics-item">
                <span className="statistics-title">Interviews</span>
                <span className="statistics-value">{data.interviews || 0}</span>
            </div>

            <div className="statistics-item">
                <span className="statistics-title">Offers</span>
                <span className="statistics-value">{data.offers || 0}</span>
            </div>

            <div className="statistics-item">
                <span className="statistics-title">Hired</span>
                <span className="statistics-value">{data.hired || 0}</span>
            </div>

        </div>

    );

}

export default Statistics;