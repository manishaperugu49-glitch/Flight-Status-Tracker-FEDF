import React from 'react'
function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p>
        We are here to help you with flight tracking
        and status updates. Feel free to contact us
        for any queries, suggestions, or support.
      </p>

      <br />

      <form>

        <input
          type="text"
          placeholder="Enter Your Name"
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <br /><br />

        <textarea
          placeholder="Enter Your Message"
          required
        ></textarea>

        <br /><br />

        <button type="submit">Send Message</button>

      </form>

      <br />

      <p>Email: support@flighttracker.com</p>

      <p>Phone: +91 9876543210</p>

    </div>
  )
}

export default Contact