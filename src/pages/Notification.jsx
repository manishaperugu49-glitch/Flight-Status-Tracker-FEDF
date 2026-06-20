import React from "react";

function Notification() {
  const notifications = [
    {
      flight: "AI203",
      route: "DEL → LHR",
      status: "CONFIRMED",
      time: "18:30",
    },
    {
      flight: "AA456",
      route: "JFK → CDG",
      status: "DELAYED",
      time: "19:15",
    },
    {
      flight: "6E789",
      route: "HYD → BLR",
      status: "BOARDING",
      time: "20:00",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "CONFIRMED":
        return "confirmed";
      case "DELAYED":
        return "delayed";
      case "BOARDING":
        return "boarding";
      default:
        return "";
    }
  };

  return (
    <div className="app-page page-bg">
      

        <div className="glass-container glass-large">

          {/* HEADER (FIXED) */}
          <div className="notification-header">
            <h1>🔔 Flight Notifications</h1>
          </div>

          {/* GRID */}
          <div className="notification-grid">

            {notifications.map((item, index) => (
              <div className="notification-card" key={index}>

                <div className={`status-badge ${getStatusClass(item.status)}`}>
                  {item.status}
                </div>

                <h2>{item.flight}</h2>
                <h4>{item.route}</h4>

                <div className="card-footer">
                  <span>🕒 {item.time}</span>
                  <button className="btn btn-primary">Enable Alerts</button>
                </div>

              </div>
            ))}

          </div>


      </div>
    </div>
  );
}

export default Notification;