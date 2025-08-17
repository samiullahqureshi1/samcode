import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "Modern, responsive, and scalable websites using React, Next.js, and latest frameworks.",
  },
  {
    id: "02",
    title: "App Development",
    desc: "Cross-platform mobile & desktop applications with smooth performance and UI/UX.",
  },
  {
    id: "03",
    title: "Custom SaaS Solutions",
    desc: "Build SaaS platforms with subscription models, user roles, analytics, and integrations.",
  },
  {
    id: "04",
    title: "Shopify Store Development",
    desc: "High-performing Shopify stores with optimized design and conversion-focused strategy.",
  },
  {
    id: "05",
    title: "Shopify Apps Development",
    desc: "Custom Shopify apps that extend functionality and integrate with third-party APIs.",
  },
  {
    id: "06",
    title: "Cloud Solutions",
    desc: "Cloud storage, hosting, and serverless solutions on AWS, GCP, or Azure.",
  },
  {
    id: "07",
    title: "ERP Systems",
    desc: "Enterprise Resource Planning systems tailored to streamline business workflows.",
  },
  {
    id: "08",
    title: "HRMS",
    desc: "Human Resource Management Systems with payroll, attendance, and employee portals.",
  },
  {
    id: "09",
    title: "POS Systems",
    desc: "Point-of-Sale solutions for retail, restaurants, and businesses with real-time reports.",
  },
  {
    id: "10",
    title: "Project Management Tools",
    desc: "Custom PM tools with task boards, deadlines, team collaboration, and reporting.",
  },
  {
    id: "11",
    title: "AI / OpenAI Solutions",
    desc: "AI-driven chatbots, automation, and custom solutions using OpenAI & machine learning.",
  },
];

export default function Services() {
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "30px 24px",
    borderRadius: "16px",
    textAlign: "left",
    transition: "all 0.3s ease",
    cursor: "pointer",
    minHeight: "200px",
  };

  const cardNumber = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#aaa",
  };

  const cardTitle = {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "12px",
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const cardDesc = {
    fontSize: "15px",
    color: "#ccc",
    lineHeight: "1.6",
  };

  return (
    <section id="services" style={sectionStyle}>
      {/* Heading */}
      <div style={headingWrapper}>
        <h2 style={headingStyle}>
          My <span style={gradientSpan}>Services</span>
        </h2>
        <div style={underlineShape}></div>
      </div>

      {/* Grid of Services */}
      <div style={gridStyle}>
        {services.map((service, i) => (
          <motion.div
            key={i}
            style={cardStyle}
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(135deg,#a21caf22,#f9731622)",
              borderColor: "#f97316",
            }}
          >
            <div style={cardNumber}>{service.id}</div>
            <div style={cardTitle}>{service.title}</div>
            <div style={cardDesc}>{service.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
