import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "./Leads.css";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [noteText, setNoteText] = useState({});
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchLeads = async () => {
    try {
      const res = await API.get("/leads");
      setLeads(res.data);
    } catch (error) {
      alert("Failed to fetch leads");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/leads/${id}`, { status });
      fetchLeads();
    } catch (error) {
      alert("Failed to update status");
    }
  };

  const deleteLead = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/leads/${id}`);
      fetchLeads();
    } catch (error) {
      alert("Failed to delete lead");
    }
  };

  const addNote = async (id) => {
    if (!noteText[id] || noteText[id].trim() === "") {
      alert("Please enter a note");
      return;
    }

    try {
      await API.post(`/leads/${id}/notes`, {
        text: noteText[id],
      });

      setNoteText({ ...noteText, [id]: "" });
      fetchLeads();
    } catch (error) {
      alert("Failed to add note");
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const searchText = search.toLowerCase();

    const name = lead.name ? lead.name.toLowerCase() : "";
    const email = lead.email ? lead.email.toLowerCase() : "";
    const company = lead.company ? lead.company.toLowerCase() : "";

    const matchesSearch =
      name.includes(searchText) ||
      email.includes(searchText) ||
      company.includes(searchText);

    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <div className="leads-top">
          <div>
            <h1>Lead Management</h1>
            <p className="subtext">
              Search, filter, update status, delete leads, and track follow-ups.
            </p>
          </div>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="Search by name, email, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Follow-up</option>
            <option>Converted</option>
            <option>Lost</option>
          </select>
        </div>

        {filteredLeads.length === 0 ? (
          <p>No leads found</p>
        ) : (
          <div className="lead-list">
            {filteredLeads.map((lead) => (
              <div className="lead-card" key={lead._id}>
                <div className="lead-header">
                  <div>
                    <h2>{lead.name || "Unnamed Lead"}</h2>
                    <p>Email: {lead.email || "Not provided"}</p>
                    <p>Phone: {lead.phone || "Not provided"}</p>
                    <p>Company: {lead.company || "Not provided"}</p>
                    <p>Source: {lead.source || "Not provided"}</p>
                  </div>

                  <span className={`status status-${lead.status}`}>
                    {lead.status || "New"}
                  </span>
                </div>

                <div className="lead-actions">
                  <label>Status:</label>

                  <select
                    value={lead.status || "New"}
                    onChange={(e) => updateStatus(lead._id, e.target.value)}
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Follow-up</option>
                    <option>Converted</option>
                    <option>Lost</option>
                  </select>

                  <button
                    className="delete-btn"
                    onClick={() => deleteLead(lead._id)}
                  >
                    Delete Lead
                  </button>
                </div>

                <div className="notes-section">
                  <h3>Follow-up Notes</h3>

                  {lead.notes && lead.notes.length > 0 ? (
                    lead.notes.map((note, index) => (
                      <div className="note" key={index}>
                        <p>{note.text}</p>
                        <small>
                          {new Date(note.createdAt).toLocaleString()}
                        </small>
                      </div>
                    ))
                  ) : (
                    <p className="no-notes">No notes yet</p>
                  )}

                  <div className="note-input">
                    <input
                      type="text"
                      placeholder="Add follow-up note..."
                      value={noteText[lead._id] || ""}
                      onChange={(e) =>
                        setNoteText({
                          ...noteText,
                          [lead._id]: e.target.value,
                        })
                      }
                    />

                    <button onClick={() => addNote(lead._id)}>
                      Add Note
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Leads;