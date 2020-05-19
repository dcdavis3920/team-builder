import React, { useState } from "react";

function Form(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMember(form);
    setForm({
      name: "",
      email: "",
      role: "",
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        name="email"
        placeholder="email"
        value={form.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        name="role"
        placeholder="role"
        value={form.role}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
