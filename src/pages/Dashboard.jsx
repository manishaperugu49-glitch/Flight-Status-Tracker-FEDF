import React, { useState } from "react";
import { filterFlights } from "../flights";
import { useLocation } from "react-router-dom";
function Dashboard() {
  const [category, setCategory] = useState("ALL");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [section, setSection] = useState("dashboard");

  const flights = filterFlights(category);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const flightNo = queryParams.get("flight");

  const searchedFlight = flights.find(
    (flight) => flight.flight.toLowerCase() === flightNo?.toLowerCase()
  );
  const updates = [
    {
      flight: "AI203",
      route: "DEL → LHR",
      status: "BOARDING",
      time: "10:15 AM",
    },
    {
      flight: "6E521",
      route: "HYD → BLR",
      status: "DEPARTED",
      time: "10:30 AM",
    },
    {
      flight: "UK811",
      route: "MUM → DXB",
      status: "GATE CHANGED",
      time: "10:45 AM",
    },
    {
      flight: "SG404",
      route: "CHE → DEL",
      status: "ARRIVED",
      time: "11:00 AM",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "BOARDING":
        return "boarding";
      case "DEPARTED":
        return "departed";
      case "ARRIVED":
        return "arrived";
      case "GATE CHANGED":
        return "gate";
      default:
        return "";
    }
  };

  return (
    <div className="app-page">
    <div className="glass-container glass-large">
        <h1>✈ Flight Status Dashboard</h1>
    
        <div className="dashboard-container">
          {/* SIDEBAR */}
          <div className="dashboard-sidebar">
            <ul>
              <li
                onClick={() => {
                  setSection("dashboard");
                  setCategory("ALL");
                  setSelectedFlight(null);
                }}
              >
                📋 All Flights
              </li>

              <li
                onClick={() => {
                  setSection("dashboard");
                  setCategory("DEPARTURES");
                  setSelectedFlight(null);
                }}
              >
                🛫 Departures
              </li>

              <li
                onClick={() => {
                  setSection("dashboard");
                  setCategory("ARRIVALS");
                  setSelectedFlight(null);
                }}
              >
                🛬 Arrivals
              </li>

              <li
                onClick={() => {
                  setSection("dashboard");
                  setCategory("BOARDING");
                  setSelectedFlight(null);
                }}
              >
                📍 Gate Info
              </li>

              <li
                onClick={() => {
                  setSection("live");
                  setSelectedFlight(null);
                }}
              >
                🔴 Live Updates
              </li>
            </ul>
          </div>

          {/* CONTENT */}
          <div className="dashboard-content">
            {/* FLIGHT DASHBOARD */}
            {section === "dashboard" && (
              <>
                {selectedFlight || searchedFlight ? (
                  <div className="flight-card">
                    <h2>✈ Flight Details</h2>

                    <p>
                      <b>Flight:</b> {(selectedFlight || searchedFlight).flight}
                    </p>

                    <p>
                      <b>Status:</b> {(selectedFlight || searchedFlight).status}
                    </p>

                    <p>
                      <b>Message:</b> {(selectedFlight || searchedFlight).message}
                    </p>

                    <p>
                      <b>Gate:</b> {(selectedFlight || searchedFlight).gate}
                    </p>

                    <p>
                      <b>Time:</b> {(selectedFlight || searchedFlight).time}
                    </p>

                    <button onClick={() => setSelectedFlight(null)}>
                      🔙 Back
                    </button>
                  </div>
                ) : (
                  flights.map((flight) => (
                    <div className="flight-card" key={flight.id}>
                      <div className="flight-left">
                        <h3>
                          Flight: {flight.flight}{" "}
                          <span>{flight.status}</span>
                        </h3>

                        <p>{flight.message}</p>

                        <small>{flight.time}</small>
                      </div>

                      <div className="flight-right">
                        <p>Gate: {flight.gate}</p>

                   
                  <button className="btn btn-primary" onClick={() => handleViewDetails(flight)}>
                    View Details
                           </button>  
                            </div>
                    </div>
                  ))
                )}
              </>
            )}

            {/* LIVE UPDATES */}
            {section === "live" && (
              <>
                <div className="header">
                  <h1>✈ Airport Operations </h1>

                </div>

                <div className="updates-grid">
                  {updates.map((flight, index) => (
                    <div className="live-card" key={index}>
                      <div
                        className={`status ${getStatusClass(flight.status)}`}
                      >
                        {flight.status}
                      </div>

                      <h2>{flight.flight}</h2>

                      <h4>{flight.route}</h4>

                      <div className="footer">
                        <span>🕒 {flight.time}</span>

                        <span className="pulse-dot"></span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;