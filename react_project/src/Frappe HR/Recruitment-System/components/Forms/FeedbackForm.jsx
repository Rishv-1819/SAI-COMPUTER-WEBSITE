import { useState } from "react";

import "./FeedbackForm.css";

function FeedbackForm({

    onSubmit

}) {

    const [form, setForm] = useState({

        interview_id: "",

        interviewer_name: "",

        rating: 5,

        skills: "",

        comments: "",

        result: "hold"

    });

    const change = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    const submit = (e) => {

        e.preventDefault();

        onSubmit(form);

        setForm({

            interview_id: "",

            interviewer_name: "",

            rating: 5,

            skills: "",

            comments: "",

            result: "hold"

        });

    }

    return (

        <form

            className="feedback-form"

            onSubmit={submit}

        >

            <input

                name="interview_id"

                placeholder="Interview ID"

                value={form.interview_id}

                onChange={change}

                required

            />

            <input

                name="interviewer_name"

                placeholder="Interviewer Name"

                value={form.interviewer_name}

                onChange={change}

                required

            />

            <input

                type="number"

                name="rating"

                min="1"

                max="10"

                value={form.rating}

                onChange={change}

            />

            <input

                name="skills"

                placeholder="Skills"

                value={form.skills}

                onChange={change}

            />

            <textarea

                name="comments"

                placeholder="Comments"

                value={form.comments}

                onChange={change}

            />

            <select

                name="result"

                value={form.result}

                onChange={change}

            >

                <option value="pass">

                    Pass

                </option>

                <option value="hold">

                    Hold

                </option>

                <option value="fail">

                    Fail

                </option>

            </select>

            <button>

                Submit Feedback

            </button>

        </form>

    )

}

export default FeedbackForm;