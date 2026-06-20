import React, { useState } from "react";
import {
  getAdminFlights,
  addFlight,
  deleteFlight
} from "../flights";

function AdminPanel() {
  const [flights, setFlights] = useState(getAdminFlights());

  const [newFlight, setNewFlight] = useState("");
  const [newRoute, setNewRoute] = useState("");
  const [newStatus, setNewStatus] = useState("");

  // Refresh data
  const refresh = () => {
    setFlights([...getAdminFlights()]);
  };

  const handleAdd = () => {
    if (!newFlight || !newRoute || !newStatus) return;

    addFlight({
      flight: newFlight,
      route: newRoute,
      status: newStatus
    });

    setNewFlight("");
    setNewRoute("");
    setNewStatus("");

    refresh();
  };

  const handleDelete = (id) => {
    deleteFlight(id);
    refresh();
  };

  return (
   <div className="app-page">
    <div className="glass-container glass-large">

        <h1>🛠 Airport Admin Panel</h1>

        {/* Add Flight Form */}

        <div className="admin-form">

          <input
            type="text"
            placeholder="Flight Number"
            value={newFlight}
            onChange={(e) => setNewFlight(e.target.value)}
          />

          <input
            type="text"
            placeholder="Route"
            value={newRoute}
            onChange={(e) => setNewRoute(e.target.value)}
          />

          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option>Boarding</option>
            <option>Departed</option>
            <option>Arrived</option>
            <option>Delayed</option>
          </select>

          <button onClick={handleAdd}>Add Flight</button>

        </div>

        {/* Flight Table */}

        <div className="admin-table">

          <table>

            <thead>
              <tr>
                <th>Flight</th>
                <th>Route</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {flights.map((flight) => (
                <tr key={flight.id}>

                  <td>{flight.flight}</td>
                  <td>{flight.route}</td>
                  <td>{flight.status}</td>

                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(flight.id)}>
                      Delete
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminPanel;