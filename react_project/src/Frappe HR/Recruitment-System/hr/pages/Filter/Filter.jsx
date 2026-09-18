import "./Filter.css";

function Filter({ value, onChange }) {

    return (

        <select
            className="filter"
            value={value}
            onChange={onChange}
        >

            <option value="">All</option>

            <option value="applied">Applied</option>

            <option value="screening">Screening</option>

            <option value="interview">Interview</option>

            <option value="offer">Offer</option>

            <option value="hired">Hired</option>

            <option value="rejected">Rejected</option>

        </select>

    );

}

export default Filter;