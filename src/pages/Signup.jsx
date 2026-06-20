import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (!nameRegex.test(name)) {
      alert("Name should contain only letters ❌");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Email must be a valid @gmail.com address ❌");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must contain letters and numbers (min 6 chars) ❌");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Account Created Successfully ✔");
    navigate("/dashboard");
  };

  return (
    <div className="app-page">
    <div className="page-content">

      <div className="form-container">

        <h1>SIGN UP</h1>
        <p className="subtitle">Create Your Account</p>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="btn btn-primary btn-block">
            CREATE ACCOUNT
          </button>

        </form>

      </div>
    </div>
    </div>
  );
}

export default Signup;
