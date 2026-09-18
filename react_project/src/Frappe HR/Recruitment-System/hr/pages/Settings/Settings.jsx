import "./Settings.css";

function Settings() {

    return (

        <div className="settings">

            <h2>

                System Settings

            </h2>

            <label>

                <input type="checkbox" />

                Email Notifications

            </label>

            <br /><br />

            <label>

                <input type="checkbox" />

                SMS Notifications

            </label>

        </div>

    )

}

export default Settings;