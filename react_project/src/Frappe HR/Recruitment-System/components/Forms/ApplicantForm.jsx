import { useState } from "react";
import "./ApplicantForm.css";

function ApplicantForm({ onSubmit }) {

    const [form, setForm] = useState({

        job_opening_id: "",

        full_name: "",

        email: "",

        phone: "",

        resume_url: "",

        source: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const submit = (e) => {

        e.preventDefault();

        onSubmit(form);

    };

    return (

        <form className="hr-form" onSubmit={submit}>

            <input
                name="job_opening_id"
                placeholder="Job Opening ID"
                value={form.job_opening_id}
                onChange={handleChange}
            />

            <input
                name="full_name"
                placeholder="Full Name"
                value={form.full_name}
                onChange={handleChange}
            />

            <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />

            <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
            />

            <input
                name="resume_url"
                placeholder="Resume URL"
                value={form.resume_url}
                onChange={handleChange}
            />

            <input
                name="source"
                placeholder="Source"
                value={form.source}
                onChange={handleChange}
            />

            <button type="submit">

                Save Applicant

            </button>

        </form>

    );

}

export default ApplicantForm;