import { useState } from "react";
import "./RequisitionForm.css";

function RequisitionForm({ onSubmit }) {

    const [form, setForm] = useState({

        title: "",

        department: "",

        vacancies: "",

        priority: "medium",

        estimated_cost: ""

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

        setForm({

            title: "",

            department: "",

            vacancies: "",

            priority: "medium",

            estimated_cost: ""

        });

    };

    return (

        <form className="hr-form" onSubmit={submit}>

            <input
                name="title"
                placeholder="Job Title"
                value={form.title}
                onChange={handleChange}
            />

            <input
                name="department"
                placeholder="Department"
                value={form.department}
                onChange={handleChange}
            />

            <input
                type="number"
                name="vacancies"
                placeholder="Vacancies"
                value={form.vacancies}
                onChange={handleChange}
            />

            <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
            >

                <option value="low">Low</option>

                <option value="medium">Medium</option>

                <option value="high">High</option>

            </select>

            <input
                type="number"
                name="estimated_cost"
                placeholder="Estimated Cost"
                value={form.estimated_cost}
                onChange={handleChange}
            />

            <button type="submit">

                Save Requisition

            </button>

        </form>

    );

}

export default RequisitionForm;