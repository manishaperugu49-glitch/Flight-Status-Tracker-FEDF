import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Flight Status Tracker</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/notification">Notification</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/search">Search Flights</Link>
        <Link to="/admin">Admin</Link>
      </div>

    </nav>
  )
}

export default Navbar
