import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const sectionStyle = {
    padding: "80px 20px",
    backgroundColor: "#0d0d0d",
    color: "#fff",
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
  };

  const containerMobile = {
    ...containerStyle,
    gridTemplateColumns: "1fr", // mobile pe single column
    textAlign: "center",
  };

  const headingWrapper = {
    position: "relative",
    display: "inline-block",
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
    width: "140px",
    height: "22px",
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    borderRadius: "20px",
    zIndex: -1,
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "20px",
    textAlign: "left",
  };

 const imageStyle = {
  width: "100%",        // responsive
  maxWidth: "400px",    // image ki max size control karega
  height: "450px",      // ek fixed height
  borderRadius: "16px",
  objectFit: "cover",   // image crop hogi but shape maintain karegi
  margin: "0 auto",     // center align
  display: "block",
};


  const skillContainer = {
    margin: "25px 0",
    textAlign: "left",
  };

  const skillLabel = {
    marginBottom: "8px",
    fontWeight: "500",
  };

  const skillBar = {
    height: "10px",
    borderRadius: "5px",
    background: "rgba(255,255,255,0.1)",
    overflow: "hidden",
    marginBottom: "18px",
  };

  const skillProgress = (width) => ({
    height: "100%",
    width,
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    borderRadius: "5px",
  });

  const counters = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "40px",
    textAlign: "center",
  };

  const counterItem = {
    fontSize: "30px",
    fontWeight: "700",
    background: "linear-gradient(90deg,#a21caf,#f97316)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const counterLabel = {
    fontSize: "14px",
    marginTop: "8px",
    color: "#ccc",
    letterSpacing: "1px",
  };

  return (
    <section id="aboutme" style={sectionStyle}>
      {/* Heading */}
      <div style={headingWrapper}>
        <h2 style={headingStyle}>
          About <span style={gradientSpan}>Me</span>
        </h2>
        <div style={underlineShape}></div>
      </div>

      {/* Container */}
      <div
        style={window.innerWidth <= 768 ? containerMobile : containerStyle}
      >
        {/* Profile Image */}
        <motion.img
          src="/samiullah.jpg"
          alt="SamCode"
          style={imageStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* About Text + Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p style={paragraphStyle}>
            I am an experienced <b>Frontend Developer</b> with over a decade of
            professional expertise. Throughout my career, I have collaborated
            with prestigious organizations, contributing to their success and
            growth.
          </p>
          <p style={paragraphStyle}>
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>

          {/* Skills */}
          <div style={skillContainer}>
            <p style={skillLabel}>HTML & CSS</p>
            <div style={skillBar}>
              <motion.div
                style={skillProgress("90%")}
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ duration: 1.5 }}
              />
            </div>

            <p style={skillLabel}>React JS</p>
            <div style={skillBar}>
              <motion.div
                style={skillProgress("95%")}
                initial={{ width: 0 }}
                animate={{ width: "95%" }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
            </div>

            <p style={skillLabel}>JavaScript</p>
            <div style={skillBar}>
              <motion.div
                style={skillProgress("85%")}
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
            </div>

            <p style={skillLabel}>Next JS</p>
            <div style={skillBar}>
              <motion.div
                style={skillProgress("80%")}
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Counters */}
      <div style={counters}>
        <div>
          <div style={counterItem}>90+</div>
          <div style={counterLabel}>Total projects</div>
        </div>
        <div>
          <div style={counterItem}>90+</div>
          <div style={counterLabel}>Projects Completed</div>
        </div>
        <div>
          <div style={counterItem}>15+</div>
          <div style={counterLabel}>Happy Clients</div>
        </div>
      </div>
    </section>
  );
}
