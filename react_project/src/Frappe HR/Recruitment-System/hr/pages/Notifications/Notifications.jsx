import NotificationCard from "../../../components/Cards/NotificationCard.jsx";

import "./Notifications.css";

function Notifications() {

    return (

        <div>

            <h2>

                Notifications

            </h2>

            <NotificationCard

                title="Interview"

                message="Interview Scheduled Successfully"

            />

            <NotificationCard

                title="Offer"

                message="Offer Letter Sent"

            />

        </div>

    )

}

export default Notifications;