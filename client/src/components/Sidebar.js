import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
       <h1 className="logo">FMS</h1>
      <ul>
        <li>
          <Link to="/">Register</Link> {/* Link to Registration Page */}
        </li>
        <li>
          <Link to="/login">Login</Link> {/* Link to Login Page */}
        </li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/pages">Pages/News</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
