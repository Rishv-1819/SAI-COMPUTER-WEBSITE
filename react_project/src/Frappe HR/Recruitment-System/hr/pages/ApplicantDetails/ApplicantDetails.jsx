import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getApplicantById } from "../../../apis/applicantDetailsApi.js";
import { updateStage } from "../../../apis/applicantApi.js";
import { scheduleInterview } from "../../../apis/interviewApi.js";

import StatusBadge from "../StatusBadge/StatusBadge.jsx";
import ResumeViewer from "../ResumeViewer/ResumeViewer.jsx";

import "./ApplicantDetails.css";

function ApplicantDetails() {

    const { id } = useParams();

    const [applicant, setApplicant] = useState({});

    useEffect(() => {
        loadApplicant();
    }, [id]);

    const loadApplicant = async () => {

        try {

            const res = await getApplicantById(id);

            setApplicant(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    // ===========================
    // Schedule Interview
    // ===========================

    const interviewApplicant = async () => {

        try {

            // Applicant stage update
            await updateStage(id, "Interview");

            // Interview table me insert
            await scheduleInterview({

                applicant_id: applicant.id,

                interviewer_name: "HR Manager",

                interview_date: new Date().toISOString().slice(0, 16),

                mode: "Online",

                remarks: "Interview Scheduled"

            });

            loadApplicant();

            alert("Interview Scheduled Successfully");

        } catch (err) {

            console.log(err);

        }

    };

    // ===========================
    // Hire
    // ===========================

    const hireApplicant = async () => {

        try {

            await updateStage(id, "Hired");

            loadApplicant();

            alert("Applicant Hired");

        } catch (err) {

            console.log(err);

        }

    };

    // ===========================
    // Reject
    // ===========================

    const rejectApplicant = async () => {

        try {

            await updateStage(id, "Rejected");

            loadApplicant();

            alert("Applicant Rejected");

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="applicant-details">

            <h2>Applicant Details</h2>

            <div className="details-card">

                <p><strong>Name :</strong> {applicant.name}</p>

                <p><strong>Email :</strong> {applicant.email}</p>

                <p><strong>Phone :</strong> {applicant.phone}</p>

                <p><strong>Country :</strong> {applicant.country}</p>

                <p><strong>Position :</strong> {applicant.position}</p>

                <p>
                    <strong>Status :</strong>{" "}
                    <StatusBadge stage={applicant.stage} />
                </p>

                <p>
                    <strong>Resume :</strong>
                </p>

                <ResumeViewer resume={applicant.resume} />

            </div>

            <div className="action-buttons">

                <button onClick={interviewApplicant}>
                    Schedule Interview
                </button>

                <button onClick={rejectApplicant}>
                    Reject
                </button>

                <button onClick={hireApplicant}>
                    Hire
                </button>

            </div>

        </div>

    );
}

export default ApplicantDetails;