import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notification from './pages/Notification';
import SearchFlights from "./pages/SearchFlights";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./pages/Dashboard";

import "./App.css";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchFlights />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
