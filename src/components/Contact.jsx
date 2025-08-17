import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_USER_ID"
    );
    e.target.reset();
  };

  // Styles
  const sectionStyle = {
    padding: "80px 20px",
    backgroundColor: "#0d0d0d",
    color: "#fff",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "flex-start",
  };

  const headingGradient = {
    background: "linear-gradient(90deg, #a21caf, #f97316)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const textGray = { color: "#ccc", lineHeight: "1.6", marginBottom: "20px" };

  const infoItem = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  };

  const iconStyle = { fontSize: "18px", color: "#f97316" };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const gradientSpan = {
    background: "linear-gradient(90deg, #a21caf, #f97316)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    background: "#1e1e2f",
    border: "none",
    color: "#fff",
    marginBottom: "12px",
    outline: "none",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "120px",
    resize: "none",
  };

  const captchaStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#1e1e2f",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "12px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(90deg, #a21caf, #f97316)",
    cursor: "pointer",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        {/* Left Side */}
        <div>
          <h3 style={headingGradient}>Let’s talk</h3>
          <p style={textGray}>
            I’m currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>

          <p style={infoItem}>
            <FaEnvelope style={iconStyle} /> samiullahqureshi669@gmail.com
          </p>
          <p style={infoItem}>
            <FaPhone style={iconStyle} /> +92 3160054922
          </p>
          <p style={infoItem}>
            <FaMapMarkerAlt style={iconStyle} /> Islamabad, Pakistan
          </p>
        </div>

        {/* Right Side */}
        <div>
          <h2 style={headingStyle}>
            Get in <span style={gradientSpan}>touch</span>
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" style={inputStyle} required />
            <input type="email" name="email" placeholder="Your Email" style={inputStyle} required />
            <textarea name="message" placeholder="Write your message here" style={textareaStyle} required></textarea>

           

            <button type="submit" style={buttonStyle}>Submit now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
