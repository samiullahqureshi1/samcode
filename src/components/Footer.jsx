import React from "react";

export default function Footer() {
  // Styles
  const footerStyle = {
    padding: "40px 20px",
    backgroundColor: "#0d0d0d",
    color: "#fff",
    borderTop: "1px solid #333",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const topSection = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "20px",
  };

  const logoText = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#fff",
  };

  const logoDot = {
    color: "#d946ef", // pink dot
  };

  const descText = {
    marginTop: "8px",
    color: "#ccc",
    fontSize: "14px",
    maxWidth: "350px",
  };

  const formStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const inputStyle = {
    padding: "12px 16px",
    borderRadius: "25px",
    border: "none",
    outline: "none",
    background: "#1e1e2f",
    color: "#fff",
    minWidth: "250px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  };

  const bottomSection = {
    borderTop: "1px solid #444",
    marginTop: "20px",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    fontSize: "14px",
  };

  const linksStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkItem = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Top */}
        <div style={topSection}>
          {/* Left Side Logo + Info */}
          <div>
            <div style={logoText}>
              SamCo<span style={logoDot}>de.</span>
            </div>
            <p style={descText}>
              I am a software developer from Pakistan with 5+ years of
              experience in companies and freelancing, building scalable apps
              using React, Next.js, Node.js & Shopify.
            </p>
          </div>

          {/* Right Side Form */}
          <form style={formStyle}>
            <input
              type="email"
              placeholder="Enter your email"
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div style={bottomSection}>
          <p>© 2025 SamCode. All rights reserved.</p>
          <div style={linksStyle}>
            <a href="#" style={linkItem}>
              Term of Services
            </a>
            <a href="#" style={linkItem}>
              Privacy Policy
            </a>
            <a href="#contact" style={linkItem}>
              Connect with me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
