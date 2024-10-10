import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Sidebar component
import RegistrationForm from "./components/RegistrationForm"; // Registration form component
import Footer from "./components/Footer"; // Footer component
import LoginForm from "./components/LoginForm"; // Login form component
import Dashboard from "./components/Dashboard"; // Dashboard component
import PrivateRoute from "./components/PrivateRoute"; // Component to protect routes
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            {/* Define routes to different components */}
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            {/* Protected route for Dashboard */}
            <Route 
              path="/dashboard" 
              element={<PrivateRoute component={Dashboard} />} 
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
