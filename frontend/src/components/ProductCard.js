import React from "react";

const cardStyle = {
  background: "#fff",
  borderRadius: "18px",
  boxShadow: "0 2px 16px rgba(58,123,213,0.09)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.2s",
  padding: "0 0 20px 0"
};

const imgStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover"
};

const nameStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  margin: "16px 0 4px 0",
  color: "#2363c9"
};

const descStyle = {
  fontSize: "1rem",
  color: "#444",
  margin: "0 0 16px 0",
  textAlign: "center",
  padding: "0 12px"
};

const priceStyle = {
  fontWeight: "bold",
  color: "#308d46",
  fontSize: "1.1rem",
  marginBottom: "10px"
};

const btnStyle = {
  background: "linear-gradient(90deg, #3a7bd5 0%, #3a6073 100%)",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  padding: "8px 24px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(58,123,213,0.14)",
  fontSize: "1rem",
  transition: "background 0.2s"
};

export default function ProductCard({ name, image, price, description }) {
  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imgStyle} />
      <div style={nameStyle}>{name}</div>
      <div style={descStyle}>{description}</div>
      <div style={priceStyle}>{price}</div>
      <button style={btnStyle}>Buy Now</button>
    </div>
  );
}