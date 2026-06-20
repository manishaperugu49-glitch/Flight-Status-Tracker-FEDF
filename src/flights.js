
export const flights = [
  {
    id: 1,
    flight: "AI203",
    status: "CONFIRMED",
    message: "Estimated arrival: Ahead of schedule",
    gate: "A24",
    time: "3m ago",
    type: "DEPARTURES"
  },
  {
    id: 2,
    flight: "AA789",
    status: "DELAYED",
    message: "Estimated arrival: Delayed by 30 mins",
    gate: "A27",
    time: "12m ago",
    type: "DEPARTURES"
  },
  {
    id: 3,
    flight: "QR456",
    status: "LANDED",
    message: "Flight arrived successfully",
    gate: "B12",
    time: "25m ago",
    type: "ARRIVALS"
  },
  {
    id: 4,
    flight: "6E521",
    status: "BOARDING",
    message: "Boarding started at Gate C10",
    gate: "C10",
    time: "Now",
    type: "BOARDING"
  }
];

// SIMPLE FILTER FUNCTION
export function filterFlights(category) {
  if (category === "ALL") return flights;
  return flights.filter((f) => f.type === category);
}

// ===============================
// 👤 USERS DATABASE
// ===============================

export const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "Admin123"
  },
  {
    name: "User",
    email: "user@gmail.com",
    password: "User123"
  }
];


// ===============================
// 🔐 LOGIN LOGIC
// ===============================

export function loginUser(email, password) {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return {
      success: true,
      message: "Login Successful ✔",
      user
    };
  }

  return {
    success: false,
    message: "Invalid Email or Password ❌"
  };
}


// ===============================
// 📝 SIGNUP VALIDATION
// ===============================

export function signupUser(name, email, password, confirmPassword) {
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  if (!nameRegex.test(name)) {
    return { success: false, message: "Name must contain only letters ❌" };
  }

  if (!emailRegex.test(email)) {
    return { success: false, message: "Email must be @gmail.com ❌" };
  }

  if (!passwordRegex.test(password)) {
    return { success: false, message: "Password must be strong (letters + numbers) ❌" };
  }

  if (password !== confirmPassword) {
    return { success: false, message: "Passwords do not match ❌" };
  }

  return {
    success: true,
    message: "Account Created Successfully ✔"
  };
}


// ===============================
// 💬 CONTACT FORM VALIDATION
// ===============================

export function contactValidation(name, email, subject, message) {
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!nameRegex.test(name)) {
    return { success: false, message: "Name must contain only letters ❌" };
  }

  if (!emailRegex.test(email)) {
    return { success: false, message: "Email must be valid Gmail ❌" };
  }

  if (subject.trim().length < 3) {
    return { success: false, message: "Subject too short ❌" };
  }

  if (message.trim().length < 10) {
    return { success: false, message: "Message must be at least 10 characters ❌" };
  }

  return {
    success: true,
    message: "Message Sent Successfully ✔"
  };
}


// ===============================
// 🔍 SEARCH FLIGHTS LOGIC
// ===============================

export const searchFlightsData = [
  {
    flight: "AI203",
    route: "DEL → LHR",
    status: "Confirmed"
  },
  {
    flight: "6E521",
    route: "HYD → BLR",
    status: "Boarding"
  },
  {
    flight: "AA789",
    route: "JFK → CDG",
    status: "Delayed"
  },
  {
    flight: "QR456",
    route: "DOH → DXB",
    status: "Arrived"
  }
];

// PURE SEARCH FUNCTION
export function getFilteredSearchFlights(searchText) {
  return searchFlightsData.filter(
    (flight) =>
      flight.flight.toLowerCase().includes(searchText.toLowerCase()) ||
      flight.route.toLowerCase().includes(searchText.toLowerCase())
  );
}

// ===============================
// 🛠 ADMIN PANEL LOGIC
// ===============================

export let adminFlights = [
  {
    id: 1,
    flight: "AI203",
    route: "DEL → LHR",
    status: "Boarding"
  },
  {
    id: 2,
    flight: "6E521",
    route: "HYD → BLR",
    status: "Departed"
  },
  {
    id: 3,
    flight: "QR456",
    route: "DOH → DXB",
    status: "Arrived"
  }
];

// ADD FLIGHT
export function addFlight(flight) {
  adminFlights.push({
    id: Date.now(),
    ...flight
  });
}

// DELETE FLIGHT
export function deleteFlight(id) {
  adminFlights = adminFlights.filter((f) => f.id !== id);
}

// GET FLIGHTS
export function getAdminFlights() {
  return adminFlights;
}