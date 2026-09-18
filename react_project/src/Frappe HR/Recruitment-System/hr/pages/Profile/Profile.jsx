import { useEffect, useState } from "react";

import { getProfile } from "../../../apis/profileApi.js";

import "./Profile.css";

function Profile() {

    const [profile, setProfile] = useState({});

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        const res = await getProfile();

        setProfile(res.data);

    };

    return (

        <div className="profile">

            <h2>HR Profile</h2>

            <p><b>Name :</b> {profile.name}</p>

            <p><b>Email :</b> {profile.email}</p>

            <p><b>Designation :</b> {profile.designation}</p>

            <p><b>Department :</b> {profile.department}</p>

        </div>

    );

}

export default Profile;