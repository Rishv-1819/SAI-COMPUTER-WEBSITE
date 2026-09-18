import "./StatusBadge.css";

function StatusBadge({ stage }) {

    return (

        <span className={`badge ${stage}`}>

            {stage}

        </span>

    );

}

export default StatusBadge;