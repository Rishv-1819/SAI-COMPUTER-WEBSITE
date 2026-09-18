import "./InterviewStatus.css";

function InterviewStatus({

    status

}) {

    return (

        <span className={`interview-status ${status}`}>

            {status}

        </span>

    )

}

export default InterviewStatus;