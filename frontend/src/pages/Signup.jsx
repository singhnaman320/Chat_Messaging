// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    // image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("password", formData.password);
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        alert("Signed up successfully.!")
        navigate("/login");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
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
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Phone Number"
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
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
