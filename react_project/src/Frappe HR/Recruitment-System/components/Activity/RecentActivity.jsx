import "./RecentActivity.css";

function RecentActivity() {

    const activities = [

        {
            text: "New Applicant Applied",
            time: "2 Minutes Ago"
        },

        {
            text: "Interview Scheduled",
            time: "10 Minutes Ago"
        },

        {
            text: "Offer Sent",
            time: "30 Minutes Ago"
        },

        {
            text: "Candidate Hired",
            time: "1 Hour Ago"
        }

    ];

    return (

        <div className="recent-activity">

            <h3>Recent Activities</h3>

            {

                activities.map((item, index) => (

                    <div
                        key={index}
                        className="activity-item"
                    >

                        <span className="activity-text">

                            {item.text}

                        </span>

                        <span className="activity-time">

                            {item.time}

                        </span>

                    </div>

                ))

            }

        </div>

    );

}

export default RecentActivity;