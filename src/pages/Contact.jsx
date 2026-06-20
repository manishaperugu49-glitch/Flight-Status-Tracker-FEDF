import React, { useRef } from "react";
import { contactValidation } from "../flights";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSend = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    const result = contactValidation(name, email, subject, message);

    if (result.success) {
      alert(result.message);

      nameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="app-page">
      <div className="page-content">

        <div className="contact-card">

          <h1>CONTACT US</h1>
          <p>We'd Love to Hear From You!</p>

          <input ref={nameRef} type="text" placeholder="👤 Full Name" />

          <input ref={emailRef} type="email" placeholder="📧 Email Address" />

          <input ref={subjectRef} type="text" placeholder="💡 Subject" />

          <textarea ref={messageRef} placeholder="💬 Your Message"></textarea>

          <button className="btn btn-primary btn-block" onClick={handleSend}>
             SEND MESSAGE
                 </button>

          <div className="contact-footer">
            <p>Need immediate help? Visit our Help Center</p>
            <span>📞 +91 9876543210</span>
            <span> ✉ support@flighttracker.com</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
