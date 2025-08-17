import React from "react";
import { motion } from "framer-motion";

export default function ChatbotPage() {
  const sectionStyle = {
    minHeight: "100vh",
    background: `
      radial-gradient(circle at 20% 20%, rgba(147,51,234,0.15), transparent 40%),
      radial-gradient(circle at 80% 30%, rgba(236,72,153,0.12), transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(37,99,235,0.12), transparent 40%),
      linear-gradient(180deg, #fdfcff, #f3f4f6)
    `,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', sans-serif",
    color: "#111827",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  };

  const avatarStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginBottom: "20px",
    background: "radial-gradient(circle at 30% 30%, #9333ea, #ec4899, #f97316)",
    boxShadow: "0 0 30px rgba(147,51,234,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: "28px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "10px",
  };

  const highlightStyle = {
    background: "linear-gradient(90deg, #9333ea, #2563eb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "700",
  };

  const cardContainer = {
    display: "flex",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "16px",
    padding: "24px",
    width: "240px",
    minHeight: "140px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const cardTitle = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "6px",
  };

  const cardDesc = {
    fontSize: "14px",
    color: "#555",
  };

  const tabsStyle = {
    marginTop: "50px",
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    fontSize: "15px",
    fontWeight: "500",
    color: "#666",
  };

  const activeTab = {
    color: "#000",
    borderBottom: "3px solid #2563eb",
    paddingBottom: "4px",
    fontWeight: "600",
  };

  const inputContainer = {
    marginTop: "40px",
    width: "100%",
    maxWidth: "600px",
    background: "#fff",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    padding: "14px 24px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "15px",
    color: "#333",
  };

  return (
    <section style={sectionStyle}>
      {/* Avatar */}
      <motion.div
        style={avatarStyle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        ✦
      </motion.div>

      {/* Greeting */}
      <h2 style={headingStyle}>Hi there, Sam</h2>
      <h2 style={headingStyle}>
        How can I help <span style={highlightStyle}>you today?</span>
      </h2>

      {/* Cards */}
      <div style={cardContainer}>
        <motion.div style={cardStyle} whileHover={{ scale: 1.05 }}>
          <h3 style={cardTitle}>Generate True 4K Next-Gen Videos</h3>
          <p style={cardDesc}>High quality video generation using AI</p>
        </motion.div>

        <motion.div style={cardStyle} whileHover={{ scale: 1.05 }}>
          <h3 style={cardTitle}>Generate Voiceovers, Music, or Sound Effects</h3>
          <p style={cardDesc}>AI-powered audio generation</p>
        </motion.div>

        <motion.div style={cardStyle} whileHover={{ scale: 1.05 }}>
          <h3 style={cardTitle}>Interact with Smartest Data Bot</h3>
          <p style={cardDesc}>Analyze & query datasets instantly</p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div style={tabsStyle}>
        <span style={activeTab}>General</span>
        <span>Text</span>
        <span>Media</span>
        <span>Music</span>
        <span>Analytics</span>
      </div>

      {/* Input */}
      <div style={inputContainer}>
        <input type="text" placeholder="Ask me anything..." style={inputStyle} />
      </div>
    </section>
  );
}
