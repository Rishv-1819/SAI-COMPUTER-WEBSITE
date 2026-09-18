import { useEffect, useState } from "react";
import "./EditOfferForm.css";

function EditOfferForm({ offer, onUpdate }) {

    const [form, setForm] = useState(offer);

    useEffect(() => {
        setForm(offer);
    }, [offer]);

    if (!offer) return null;

    const handleChange = (e) => {

        setForm({
            ...form,
            offer_date: form.offer_date
                ? form.offer_date.split("T")[0]
                : ""
        });

    };



    const submit = (e) => {

        e.preventDefault();

        onUpdate(form);

    };

    return (

        <form
            className="edit-offer-form"
            onSubmit={submit}
        >

            <input
                type="date"
                name="offer_date"
                value={form.offer_date || ""}
                onChange={handleChange}
            />

            <input
                type="number"
                name="package_amount"
                value={form.package_amount || ""}
                onChange={handleChange}
            />

            <select
                name="status"
                value={form.status || "draft"}
                onChange={handleChange}
            >

                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>

            </select>

            <textarea
                name="offer_letter"
                value={form.offer_letter || ""}
                onChange={handleChange}
            />

            <button>

                Update Offer

            </button>

        </form>

    );

}

export default EditOfferForm;