import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
function AddLead() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "Website",
    status: "New",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/leads", form);
      alert("Lead added successfully");
      navigate("/leads");
    } catch (error) {
      alert("Failed to add lead");
      console.log(error);
    }
  };

 return (
  <div className="layout">
    <Navbar />

    <main className="main-content">
      <h1>Add New Lead</h1>

      <form onSubmit={handleSubmit} className="form-box">

        <input
          name="name"
          placeholder="Client Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />

        <select name="source" value={form.source} onChange={handleChange}>
          <option>Website</option>
          <option>LinkedIn</option>
          <option>Referral</option>
          <option>Instagram</option>
          <option>Other</option>
        </select>

        <select name="status" value={form.status} onChange={handleChange}>
          <option>New</option>
          <option>Contacted</option>
          <option>Follow-up</option>
          <option>Converted</option>
          <option>Lost</option>
        </select>

        <button type="submit">Add Lead</button>

      </form>
    </main>
  </div>
);
}

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px",
  },
};

export default AddLead;