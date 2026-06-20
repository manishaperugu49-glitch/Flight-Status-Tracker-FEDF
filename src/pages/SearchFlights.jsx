import React, { useState } from "react";
import { getFilteredSearchFlights } from "../flights";

function SearchFlights() {
  const [search, setSearch] = useState("");

  const filteredFlights = getFilteredSearchFlights(search);

  return (
    <div className="app-page">
      <div className="glass-container glass-large">

        <h1>🔍 Flight Search & Filter</h1>

        <input
          type="text"
          placeholder="Search Flight Number or Route..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-results">

          {filteredFlights.map((flight, index) => (
            <div className="search-card" key={index}>

              <h2>{flight.flight}</h2>

              <p>{flight.route}</p>

              <span className="search-status">
                {flight.status}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default SearchFlights;