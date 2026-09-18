import { useState, useEffect } from "react";
import "./EditFeedbackForm.css";

function EditFeedbackForm({ feedback, onUpdate }) {

    const [form, setForm] = useState(feedback);

    useEffect(() => {
        setForm(feedback);
    }, [feedback]);

    if (!feedback) return null;

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

    return (

        <form
            className="edit-feedback-form"
            onSubmit={submit}
        >

            <input

                name="interviewer_name"

                value={form.interviewer_name}

                onChange={handleChange}

            />

            <input

                type="number"

                name="rating"

                min="1"

                max="10"

                value={form.rating}

                onChange={handleChange}

            />

            <input

                name="skills"

                value={form.skills}

                onChange={handleChange}

            />

            <textarea

                name="comments"

                value={form.comments}

                onChange={handleChange}

            />

            <select

                name="result"

                value={form.result}

                onChange={handleChange}

            >

                <option value="pass">Pass</option>

                <option value="hold">Hold</option>

                <option value="fail">Fail</option>

            </select>

            <button>

                Update Feedback

            </button>

        </form>

    );

}

export default EditFeedbackForm;