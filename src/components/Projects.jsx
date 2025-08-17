import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "School Management App", img: "/courses.png" },
  { title: "Shopify Store Control Panel", img: "/trackify.png" },
  { title: "Shopify Bulk Uploader", img: "/bulkuploader.png" },
  { title: "E-commerce Store (NearMart)", img: "/nearmart.png" },
  { title: "Ecommerce Website (Next.js)", img: "/ecommerece.png" },
  { title: "Multi-Vendor Marketplace", img: "/multi-vendor.png" },
  { title: "AI Chatbot", img: "/ai-chat.png" },
  { title: "POS System", img: "/pos.png" },
  { title: "HRMS Portal", img: "/hrm.png" },
    { title: "Animated Portfolio", img: "/portfolio.png" },
        { title: "Car Selling (Next.js)", img: "/carselling.png" },

];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const sectionStyle = {
    padding: "80px 20px",
    backgroundColor: "#0d0d0d",
    color: "#fff",
    textAlign: "center",
  };

  const headingWrapper = {
    position: "relative",
    display: "inline-block",
    marginBottom: "60px",
  };

  const headingStyle = {
    fontSize: "42px",
    fontWeight: "700",
  };

  const gradientSpan = {
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const underlineShape = {
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "150px",
    height: "22px",
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    borderRadius: "20px",
    zIndex: -1,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto 40px auto",
  };

  const cardStyle = {
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s ease",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  };

  const projectTitle = {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    textShadow: "0 2px 4px rgba(0,0,0,0.6)",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 30px",
    border: "2px solid #fff",
    borderRadius: "30px",
    background: "transparent",
    color: "#fff",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <section id="projects" style={sectionStyle}>
      {/* Heading */}
      <div style={headingWrapper}>
        <h2 style={headingStyle}>
          My latest <span style={gradientSpan}>work</span>
        </h2>
        <div style={underlineShape}></div>
      </div>

      {/* Projects Grid */}
      <div style={gridStyle}>
        {(showAll ? projects : projects.slice(0, 6)).map((p, i) => (
          <motion.div
            key={i}
            style={cardStyle}
            whileHover={{ scale: 1.05 }}
          >
            <img src={p.img} alt={p.title} style={imgStyle} />
            <div style={projectTitle}>{p.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <motion.button
        style={buttonStyle}
        whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less ↑" : "View All →"}
      </motion.button>
    </section>
  );
}
