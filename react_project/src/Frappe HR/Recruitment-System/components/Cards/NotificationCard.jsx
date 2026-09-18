import "./NotificationCard.css";

function NotificationCard({

    title,

    message

}) {

    return (

        <div className="notification-card">

            <h4>

                {title}

            </h4>

            <p>

                {message}

            </p>

        </div>

    )

}

export default NotificationCard;