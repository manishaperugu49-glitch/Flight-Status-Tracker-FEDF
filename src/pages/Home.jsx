import React from 'react'
function Home() {
  return (
    <div className="home-page">

      <div className="overlay">

        <h1>Welcome to Flight Status Tracker</h1>

        <p>
          Track real-time flight departures,
          arrivals, delays and gate information.
        </p>

        <img
          src="/flight.jpeg"
          alt="Flight"
          className="flight-image"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Flight Number"
          required
        />

        <br /><br />

        <button>Track Flight</button>

      </div>

    </div>
  )
}

export default Home