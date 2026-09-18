import { useEffect, useState } from "react";
import "./EditInterviewForm.css";

function EditInterviewForm({ interview, onUpdate }) {

    const [form, setForm] = useState(interview);

    useEffect(() => {

        setForm(interview);

    }, [interview]);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const submit = (e) => {

        e.preventDefault();

        onUpdate(form);

    };

    if (!interview) return null;

    return (

        <form className="edit-form" onSubmit={submit}>

            <input

                name="interviewer_name"

                value={form.interviewer_name || ""}

                onChange={handleChange}

            />

            <input

                type="datetime-local"

                name="interview_date"

                value={form.interview_date || ""}

                onChange={handleChange}

            />

            <select

                name="mode"

                value={form.mode || "online"}

                onChange={handleChange}

            >

                <option value="online">

                    Online

                </option>

                <option value="offline">

                    Offline

                </option>

            </select>

            <select

                name="status"

                value={form.status || "scheduled"}

                onChange={handleChange}

            >

                <option value="scheduled">

                    Scheduled

                </option>

                <option value="completed">

                    Completed

                </option>

                <option value="rescheduled">

                    Rescheduled

                </option>

                <option value="cancelled">

                    Cancelled

                </option>

            </select>

            <textarea

                name="remarks"

                value={form.remarks || ""}

                onChange={handleChange}

            />

            <button>

                Update Interview

            </button>

        </form>

    );

}

export default EditInterviewForm;