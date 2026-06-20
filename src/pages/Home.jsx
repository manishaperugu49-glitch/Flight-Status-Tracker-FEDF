import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [flightNumber, setFlightNumber] = useState("");
  const navigate = useNavigate();

  const handleTrackFlight = () => {
    if (flightNumber.trim() === "") {
      alert("Please enter a flight number");
      return;
    }

    navigate(`/dashboard?flight=${flightNumber}`);
  };

  return (
    <div className="app-page">

        <div className="glass-container glass-large">

          <h1>Welcome to Flight Status Tracker</h1>
          <p>
            Track real-time flight departures, arrivals, delays and gate information.
          </p>

          {/* Grid Section */}
          <div className="content-grid">

            <div className="stats-box">
              <h3>System Status</h3>
              <p>Total Flights Tracked: 24,567</p>
              <p>Delayed: 121 | On Time: 23,000</p>
            </div>

            <div className="updates-box">
              <h3>Live Active Flights</h3>
              <ul>
                <li>Flight AUN: 13:55 - Status: Active</li>
                <li>Flight YNR: 13:45 - Status: Delayed</li>
              </ul>
            </div>

          </div>

          {/* Search Section */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter Flight Number"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
            />

            <button className="btn btn-primary" onClick={handleTrackFlight}>
              Track Flight
            </button>
          </div>

        </div>

      </div>
    
  );
}

export default Home;
