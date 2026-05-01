import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div>
        <h2 className="logo">LeadFlow</h2>
        <p className="tagline">Mini CRM System</p>

        <nav className="menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/leads">Leads</Link>
          <Link to="/add-lead">Add Lead</Link>
        </nav>
      </div>

      <button onClick={logout} className="logout">
        Logout
      </button>
    </aside>
  );
}

export default Navbar;