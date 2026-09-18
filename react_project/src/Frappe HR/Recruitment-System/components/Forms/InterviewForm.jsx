import { useState } from "react";
import "./InterviewForm.css";

function InterviewForm({ onSubmit }) {

    const [form, setForm] = useState({
        applicant_id: "",
        interviewer_name: "",
        interview_date: "",
        mode: "online",
        remarks: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);

        setForm({
            applicant_id: "",
            interviewer_name: "",
            interview_date: "",
            mode: "online",
            remarks: ""
        });
    };

    return (
        <form className="interview-form" onSubmit={handleSubmit}>

            <input
                type="number"
                name="applicant_id"
                placeholder="Applicant ID"
                value={form.applicant_id}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="interviewer_name"
                placeholder="Interviewer Name"
                value={form.interviewer_name}
                onChange={handleChange}
                required
            />

            <input
                type="datetime-local"
                name="interview_date"
                value={form.interview_date}
                onChange={handleChange}
                required
            />

            <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
            >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
            </select>

            <textarea
                name="remarks"
                placeholder="Remarks"
                value={form.remarks}
                onChange={handleChange}
            />

            <button type="submit">

                Schedule Interview

            </button>

        </form>
    );
}

export default InterviewForm;