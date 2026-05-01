import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await API.get("/leads");
        setLeads(res.data);
      } catch (error) {
        alert("Failed to load dashboard");
      }
    };

    fetchLeads();
  }, []);

  const total = leads.length;
  const newLeads = leads.filter((lead) => lead.status === "New").length;
  const contacted = leads.filter((lead) => lead.status === "Contacted").length;
  const converted = leads.filter((lead) => lead.status === "Converted").length;
  const lost = leads.filter((lead) => lead.status === "Lost").length;

  const conversionRate =
    total === 0 ? 0 : Math.round((converted / total) * 100);

  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Monitor leads, follow-ups, and conversions.</p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p>Total Leads</p>
            <h2>{total}</h2>
          </div>

          <div className="stat-card blue">
            <p>New Leads</p>
            <h2>{newLeads}</h2>
          </div>

          <div className="stat-card orange">
            <p>Contacted</p>
            <h2>{contacted}</h2>
          </div>

          <div className="stat-card green">
            <p>Converted</p>
            <h2>{converted}</h2>
          </div>

          <div className="stat-card red">
            <p>Lost</p>
            <h2>{lost}</h2>
          </div>

          <div className="stat-card purple">
            <p>Conversion Rate</p>
            <h2>{conversionRate}%</h2>
          </div>
        </div>

        <section className="summary-box">
          <h3>Business Insight</h3>
          <p>
            You have {total} total leads, out of which {converted} are converted.
            Keep following up with contacted leads to improve your conversion rate.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;