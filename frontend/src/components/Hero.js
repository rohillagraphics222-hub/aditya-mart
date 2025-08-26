import React from "react";

const heroStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "60px 20px 80px 20px",
  background: "radial-gradient(circle at 60% 20%, #b2fcff 0%, #f9fafc 100%)",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "3rem",
  fontWeight: 700,
  marginBottom: "16px",
  color: "#2363c9"
};

const descStyle = {
  fontSize: "1.3rem",
  maxWidth: "600px",
  margin: "0 auto 30px auto",
  color: "#444"
};

const btnStyle = {
  padding: "16px 40px",
  fontSize: "1.1rem",
  background: "linear-gradient(90deg, #3a7bd5 0%, #3a6073 100%)",
  color: "#fff",
  border: "none",
  borderRadius: "30px",
  boxShadow: "0 6px 24px rgba(58,123,213,0.13)",
  cursor: "pointer",
  fontWeight: "bold",
  marginTop: "14px",
  transition: "transform 0.2s"
};

export default function Hero() {
  return (
    <section style={heroStyle}>
  <h1 style={titleStyle}>Welcome to Aditya Rohilla World</h1>
      <p style={descStyle}>
        Discover a curated selection of premium products and insightful blogs. Shop smart, live beautifully.
      </p>
      <a href="#products">
        <button style={btnStyle}>
          Shop Now
        </button>
      </a>
    </section>
  );
}