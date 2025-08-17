import React from "react";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TailwindCSS", "Bootstrap", "HTML", "CSS"] },
  { category: "State Management", items: ["Redux", "Thunk", "Saga"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"] },
  { category: "Shopify", items: ["Custom Themes", "Apps", "API Integrations"] },
  { category: "SaaS", items: ["End-to-End SaaS Development"] },
  { category: "Real-Time", items: ["Socket.IO", "WebSockets"] },
];

export default function Skills() {
  const sectionStyle = {
    padding: "80px 0",
    backgroundColor: "#1e293b",
    color: "#fff",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "700",
    color: "#22d3ee", // cyan-400
    marginBottom: "32px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
  };

  const cardStyle = {
    padding: "24px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
  };

  const categoryStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
  };

  const listStyle = {
    paddingLeft: "24px",
    listStyleType: "disc",
  };

  const listItemStyle = {
    marginBottom: "6px",
  };

  return (
    <section id="skills" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Skills</h2>
        <div style={gridStyle}>
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              style={cardStyle}
            >
              <h3 style={categoryStyle}>{skill.category}</h3>
              <ul style={listStyle}>
                {skill.items.map((item, j) => (
                  <li key={j} style={listItemStyle}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
