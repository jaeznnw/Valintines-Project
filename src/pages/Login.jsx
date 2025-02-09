import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { login as loginUser } from "../api/Auth";
import "./Loginpage.css"; 

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await loginUser(formData);
      if (result.ok) {
        localStorage.setItem("token", result.data.token);
        navigate("/dashboard");
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="valentine-container">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="valentine-title"
      >
        ❤️ Welcome, Valentine! ❤️
      </motion.h2>

      <motion.div
        className="valentine-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          placeholder="💖 Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="🔐 Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <motion.button
          className="valentine-button"
          onClick={handleLogin}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          💕 Login 💕
        </motion.button>

        {error && <p className="valentine-error">{error}</p>}
      </motion.div>
    </div>
  );
};

export default LoginPage;
