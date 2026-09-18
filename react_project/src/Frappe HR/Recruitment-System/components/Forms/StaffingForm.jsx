import { useState } from "react";
import "./StaffingForm.css";

function StaffingForm({ onSubmit }) {

    const [form, setForm] = useState({

        requisition_id: "",

        role_name: "",

        department: "",

        vacancies: "",

        estimated_cost: "",

        current_headcount: ""

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

            requisition_id: "",

            role_name: "",

            department: "",

            vacancies: "",

            estimated_cost: "",

            current_headcount: ""

        });

    };

    return (

        <form className="hr-form" onSubmit={submit}>

            <input
                type="number"
                name="requisition_id"
                placeholder="Requisition ID"
                value={form.requisition_id}
                onChange={handleChange}
                required
            />

            <input
                name="role_name"
                placeholder="Role Name"
                value={form.role_name}
                onChange={handleChange}
                required
            />

            <input
                name="department"
                placeholder="Department"
                value={form.department}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="vacancies"
                placeholder="Vacancies"
                value={form.vacancies}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="estimated_cost"
                placeholder="Estimated Cost"
                value={form.estimated_cost}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="current_headcount"
                placeholder="Current Headcount"
                value={form.current_headcount}
                onChange={handleChange}
                required
            />

            <button>
                Save Staffing Plan
            </button>

        </form>

    );

}

export default StaffingForm;