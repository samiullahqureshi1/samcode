import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionStyle = {
    minHeight: "100vh",
    backgroundColor: "#0d0d0d",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
    position: "relative",
    overflow: "hidden",
  };

  const navStyle = {
    width: "100%",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 50,
    gap: "40px",
  };

  const logoStyle = {
    position: "absolute",
    left: "20px",
    fontSize: "clamp(20px, 4vw, 28px)",
    fontWeight: "700",
    color: "#fff",
  };

  const logoDot = { color: "#d946ef" };

  const navLinksDesktop = {
    display: "flex",
    gap: "30px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const gradientBtn = {
    padding: "10px 20px",
    borderRadius: "25px",
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    fontSize: "clamp(14px, 2vw, 16px)",
  };

  const headingStyle = {
    fontSize: "clamp(26px, 6vw, 52px)",
    fontWeight: "700",
    lineHeight: "1.3",
    marginBottom: "20px",
  };

  const gradientText = {
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const subText = {
    maxWidth: "700px",
    margin: "0 auto 30px auto",
    color: "#ccc",
    fontSize: "clamp(14px, 2vw, 18px)",
    padding: "0 10px",
  };

  const btnContainer = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const outlineBtn = {
    padding: "10px 20px",
    borderRadius: "25px",
    background: "transparent",
    border: "2px solid #fff",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "clamp(14px, 2vw, 16px)",
  };

  const profileImage = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    border: "5px solid #222",
  };

  return (
    <section style={sectionStyle}>
      {/* Navbar */}
      <motion.nav
        style={navStyle}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div style={logoStyle}>
          Sam<span style={logoDot}>Code.</span>
        </div>

        {/* Desktop Menu */}
        <ul
          className="desktop-menu"
          style={
            window.innerWidth > 768 ? navLinksDesktop : { display: "none" }
          }
        >
          {["Home", "About Me", "Projects", "Services", "Contact"].map(
            (item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  style={linkStyle}
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>
      </motion.nav>

      {/* Hero Content */}
      <div>
        {/* Profile Image */}
        <motion.img
          src="/samiullah.jpg"
          alt="SamCode"
          style={profileImage}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          style={headingStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I'm <span style={gradientText}>Samiullah Qureshi</span>, <br />
          <ReactTyped
            strings={[
              "a Software Developer",
              "a Full Stack Developer",
              "a React.js Expert",
              "a Next.js Specialist",
              "a Shopify Developer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.h1>

        <motion.p
          style={subText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate Full-Stack Developer specialized in React, Next.js, Redux,
          Node.js, Shopify Apps, SaaS Platforms, and Real-Time WebSockets.
          <br /> Building Scalable Web, Mobile, and Shopify Solutions.
        </motion.p>

        <motion.div
          style={btnContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.button
            style={gradientBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Hire Me
          </motion.button>

          <motion.button
            style={outlineBtn}
            whileHover={{ backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
