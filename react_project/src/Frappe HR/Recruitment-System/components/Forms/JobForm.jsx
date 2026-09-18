import { useState } from "react";
import "./JobForm.css";

function JobForm({ onSubmit }) {

  const [form, setForm] = useState({

    title: "",

    department: "",

    description: "",

    salary_range: "",

    status: "draft",

  });

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };

  const submit = (e) => {

    e.preventDefault();

    onSubmit(form);

    setForm({

      title: "",

      department: "",

      description: "",

      salary_range: "",

      status: "draft",

    });

  };

  return (

    <form className="hr-form" onSubmit={submit}>

      <input
        name="title"
        placeholder="Job Title"
        value={form.title}
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

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <input
        name="salary_range"
        placeholder="Salary Range"
        value={form.salary_range}
        onChange={handleChange}
        required
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >

        <option value="draft">Draft</option>

        <option value="published">Published</option>

      </select>

      <button type="submit">

        Publish Job

      </button>

    </form>

  );

}

export default JobForm;