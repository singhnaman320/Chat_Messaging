// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        // Save the token (and userId if needed) in localStorage for further authentication
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        // Redirect to Chat page after successful login\n
        alert("LoggedIn successfully.!")
        navigate("/chat");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        {/* Top-right decorative element */}
        <div className="absolute top-2 right-2">
          <div className="w-4 h-4 border-2 border-blue-500 grid grid-cols-2 gap-1 p-1">
            <div className="w-1 h-1 bg-blue-500"></div>
            <div className="w-1 h-1 bg-blue-500"></div>
            <div className="w-1 h-1 bg-blue-500"></div>
            <div className="w-1 h-1 bg-blue-500"></div>
          </div>
        </div>
        <div className="text-center mb-4">
          <img src={logo} alt="Chat Logo" className="w-30 h-15 mx-auto" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
