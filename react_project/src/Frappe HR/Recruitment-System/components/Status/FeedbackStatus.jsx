import "./FeedbackStatus.css";

function FeedbackStatus({ result }) {

    return (

        <span className={`feedback-status ${result}`}>

            {result}

        </span>

    );

}

export default FeedbackStatus;