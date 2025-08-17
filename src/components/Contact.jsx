import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://trackify-backend-nine.vercel.app/consultation/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(" Message sent successfully!");
        form.current.reset();
      } else {
        setStatus(" Failed to send. Try again!");
      }
    } catch (error) {
      console.error(error);
      setStatus(" Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

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
        <div>
          <h3 style={headingGradient}>Let’s talk</h3>
          <p style={textGray}>
            I’m currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>

          <p style={infoItem}>
            <FaEnvelope style={iconStyle} />
            <a 
              href="mailto:samiullahqureshi669@gmail.com" 
              style={{ color: "#fff", textDecoration: "none" }}
            >
              samiullahqureshi669@gmail.com
            </a>
          </p>

          <p style={infoItem}>
            <FaPhone style={iconStyle} />
            <a 
              href="https://wa.me/923160054922" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#fff", textDecoration: "none" }}
            >
              +92 3160054922
            </a>
          </p>

          <p style={infoItem}>
            <FaMapMarkerAlt style={iconStyle} /> Islamabad, Pakistan
          </p>
        </div>

        <div>
          <h2 style={headingStyle}>
            Get in <span style={gradientSpan}>touch</span>
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" style={inputStyle} required />
            <input type="email" name="email" placeholder="Your Email" style={inputStyle} required />
            <textarea name="message" placeholder="Write your message here" style={textareaStyle} required></textarea>

            <button type="submit" style={buttonStyle} disabled={loading}>
              {loading ? "Sending..." : "Submit now"}
            </button>
          </form>

          {status && <p style={{ marginTop: "12px", color: "#22d3ee" }}>{status}</p>}
        </div>
      </div>
    </section>
  );
}
