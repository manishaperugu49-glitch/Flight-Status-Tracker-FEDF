import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../flights";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (!emailRegex.test(email)) {
      alert("Email must be a valid @gmail.com address ❌");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must contain letters & numbers (min 6 chars) ❌");
      return;
    }

    const success = loginUser(email, password);

    if (success) {
      alert("Login Successful ✔");
      navigate("/signup");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="app-page">
      <div className="page-content">

        <div className="form-container">

          <h1>LOGIN</h1>
          <p className="subtitle">Welcome Back!</p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="btn btn-primary btn-block">
              LOG IN
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;
