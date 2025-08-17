import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  { name: "Client 1", review: "SamCode delivered exactly what we needed. Fast & reliable!" },
  { name: "Client 2", review: "Brilliant Shopify app developer. Highly recommended." },
  { name: "Client 3", review: "Our SaaS platform runs smoothly thanks to SamCode." },
];

export default function Testimonials() {
  const sectionStyle = {
    padding: "80px 0",
    background: "transparent",
    color: "#fff",
  };

  const containerStyle = {
    maxWidth: "768px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "700",
    color: "#22d3ee", // cyan-400
    marginBottom: "32px",
    textAlign: "center",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.1)",
    padding: "24px",
    borderRadius: "12px",
    textAlign: "center",
    color: "#fff",
  };

  const nameStyle = {
    marginTop: "16px",
    fontWeight: "700",
  };

  return (
    <section id="testimonials" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Testimonials</h2>
        <Swiper autoplay={{ delay: 3000 }} loop>
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div style={cardStyle}>
                <p>"{t.review}"</p>
                <h4 style={nameStyle}>- {t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
