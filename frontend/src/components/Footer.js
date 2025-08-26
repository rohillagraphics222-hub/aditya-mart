import React from "react";

const style = {
  background: "#3a7bd5",
  color: "#fff",
  padding: "32px 0",
  textAlign: "center",
  marginTop: "30px",
  letterSpacing: "1px"
};

export default function Footer() {
  return (
    <footer id="contact" style={style}>
      <div>
  &copy; {new Date().getFullYear()} Aditya Rohilla | Designed by Aditya
      </div>
      <div>
        <a href="mailto:contact@adityamart.com" style={{ color: "#fff", textDecoration: "underline" }}>
          contact@adityamart.com
        </a>
      </div>
    </footer>
  );
}