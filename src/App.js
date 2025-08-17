import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import ChatbotPage from "./components/Chatbot";

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white overflow-x-hidden">
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
       <Element name="projects">
        <Projects />
      </Element>

      {/* <Element name="skills">
        <Skills />
      </Element>
     
      <Element name="testimonials">
        <Testimonials />
      </Element> */}
      <Element name="contact">
        <Contact />
      </Element>
       
      <Footer />
    </div>
  );
}
