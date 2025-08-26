import React from "react";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "linear-gradient(90deg, #3a7bd5 0%, #3a6073 100%)",
    color: "#fff",
    boxShadow: "0 2px 12px rgba(58,123,213,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontWeight: "bold",
    fontSize: "2rem",
    letterSpacing: "2px"
  },
  navLinks: {
    display: "flex",
    gap: "32px"
  },
  link: {
    fontSize: "1.1rem",
    fontWeight: "500",
    transition: "color 0.2s",
    cursor: "pointer"
  }
};

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
  <div style={styles.logo}>Aditya Rohilla</div>
      <div style={styles.navLinks}>
        <a style={styles.link} href="#products">Products</a>
        <a style={styles.link} href="#blogs">Blogs</a>
        <a style={styles.link} href="#contact">Contact</a>
      </div>
    </nav>
  );
}