import React from "react";

const cardStyle = {
  background: "#fff",
  borderRadius: "18px",
  boxShadow: "0 2px 16px rgba(58,123,213,0.09)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s"
};

const imgStyle = {
  width: "100%",
  height: "170px",
  objectFit: "cover"
};

const contentStyle = {
  padding: "18px"
};

const titleStyle = {
  fontWeight: "bold",
  fontSize: "1.25rem",
  color: "#2363c9",
  marginBottom: "10px"
};

const dateStyle = {
  fontSize: "0.95rem",
  color: "#999",
  marginBottom: "8px"
};

const excerptStyle = {
  fontSize: "1rem",
  color: "#444",
  marginBottom: "12px"
};

const btnStyle = {
  background: "linear-gradient(90deg, #3a7bd5 0%, #3a6073 100%)",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  padding: "8px 24px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background 0.2s"
};

export default function BlogCard({ title, image, date, excerpt }) {
  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <div style={contentStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={dateStyle}>{date}</div>
        <div style={excerptStyle}>{excerpt}</div>
        <button style={btnStyle}>Read More</button>
      </div>
    </div>
  );
}