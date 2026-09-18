import { useState } from "react";

import "./OfferForm.css";

function OfferForm({ onSubmit }) {

    const [form, setForm] = useState({

        applicant_id: "",

        offer_date: "",

        package_amount: "",

        status: "draft",

        offer_letter: ""

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
            applicant_id: "",
            offer_date: "",
            package_amount: "",
            status: "draft",
            offer_letter: ""
        });

    }

    return (

        <form

            className="offer-form"

            onSubmit={submit}

        >

            <input

                name="applicant_id"

                placeholder="Applicant ID"

                value={form.applicant_id}

                onChange={change}

                required

            />

            <input

                type="date"

                name="offer_date"

                value={form.offer_date}

                onChange={change}

                required

            />

            <input

                type="number"

                name="package_amount"

                placeholder="Package"

                value={form.package_amount}

                onChange={change}

                required

            />

            <select

                name="status"

                value={form.status}

                onChange={change}

            >

                <option value="draft">Draft</option>

                <option value="sent">Sent</option>

                <option value="accepted">Accepted</option>

                <option value="rejected">Rejected</option>

            </select>

            <textarea

                name="offer_letter"

                placeholder="Offer Letter"

                value={form.offer_letter}

                onChange={change}

            />

            <button>

                Save Offer

            </button>

        </form>

    )

}

export default OfferForm;