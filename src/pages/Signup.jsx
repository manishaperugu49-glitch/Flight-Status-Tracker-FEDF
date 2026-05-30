import React from 'react'
function Signup() {
  return (
    <div className="signup-page">

      <h1>Sign Up</h1>

      <form>

        <input
          type="text"
          placeholder="Enter Name"
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Confirm Password"
          required
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>

    </div>
  )
}

export default Signup