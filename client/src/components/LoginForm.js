import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Ensure to include your CSS styles
 

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    role: "user", // default role
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (role) => {
    setFormData({
      ...formData,
      role, // Update the role when a button is clicked
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful");
        // Save the token to localStorage
        localStorage.setItem("token", data.token);
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(data.message || "Invalid credentials or role selection");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        
        <div className="form-group">
          <label htmlFor="role-selection" className="centered-label">Login As</label>
          <div id="role-selection" className="role-buttons">
            <button
              type="button"
              className={`role-btn ${formData.role === "user" ? "active" : ""}`}
              onClick={() => handleRoleChange("user")}
            >
              User
            </button>
            <button
              type="button"
              className={`role-btn ${formData.role === "organizer" ? "active" : ""}`}
              onClick={() => handleRoleChange("organizer")}
            >
              Organizer
            </button>
            <button
              type="button"
              className={`role-btn ${formData.role === "admin" ? "active" : ""}`}
              onClick={() => handleRoleChange("admin")}
            >
              Admin
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email/ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p>
        Don't have an account? <a href="/">Sign up here</a>
      </p>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/005/877/701/small_2x/mobile-banking-modern-flat-concept-for-web-banner-design-woman-enters-login-and-password-for-secure-access-to-personal-financial-account-in-application-illustration-with-isolated-people-scene-free-vector.jpg"
        alt="Login Illustration"
        className="login-image"
      />
    </div>
  );
};

export default LoginForm;
