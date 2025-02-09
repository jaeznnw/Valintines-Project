import { useState } from "react";
import { register } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import "./Registerpage.css"; 

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", password_confirmation: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.errors || "Something went wrong");
    }
  };

  return (
    <div className="valentine-container">
      <h2 className="valentine-title">Create Your Love Account 💖</h2>
      {error && <p className="valentine-error">{JSON.stringify(error)}</p>}
      <form onSubmit={handleSubmit} className="valentine-card">
        <input type="text" name="username" placeholder="Your Sweet Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Love Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Your Secret Password" onChange={handleChange} required />
        <input type="password" name="password_confirmation" placeholder="Confirm Love Password" onChange={handleChange} required />
        <button type="submit" className="valentine-button">Join Love 💕</button>
      </form>
    </div>
  );
};

export default Register;
