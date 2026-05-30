import React from 'react';

function Login() {
  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;