import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import the CSS file

const Logintp = () => {
  const [id, setId] = useState("");
  const [income, setIncome] = useState("");
  const [expenses, setExpences] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!id || !income || !expenses) {
      setError("Please fill all.");
      return;
    }

    try {
      const response = await axios.post("http://192.168.248.104:5500/reg", {
        id,
        income,
        expenses,
      });

      console.log("Response:", response.data);
      alert("Register successful!");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid. Please try again.");
    }
  };

  return (
    <div class="login-screen">
    <div className="login-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Enter your name"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your monthly income (BGN)"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your monthly expenses (BGN)"
        value={expenses}
        onChange={(e) => setExpences(e.target.value)}
      />
      <button onClick={handleLogin}>Register</button>
    </div>
    </div>
  );
};

export default Logintp;