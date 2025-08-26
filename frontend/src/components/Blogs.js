import React from "react";
import BlogCard from "./BlogCard";

const sectionStyle = {
  padding: "48px 20px",
  background: "#f9fafc"
};

const titleStyle = {
  fontSize: "2.2rem",
  fontWeight: 700,
  color: "#2363c9",
  marginBottom: "32px",
  textAlign: "center"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "32px",
  maxWidth: "1000px",
  margin: "0 auto"
};

const blogs = [
  {
    title: "Top 5 Gadgets for Modern Living",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
    date: "August 2025",
    excerpt: "Explore the must-have gadgets that simplify your lifestyle and boost productivity."
  },
  {
    title: "How to Stay Hydrated in Summer",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80",
    date: "August 2025",
    excerpt: "Tips and tricks for keeping your body hydrated and healthy during the hot months."
  },
  {
    title: "Setting Up Your Home Office",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
    date: "July 2025",
    excerpt: "Create a productive and comfortable workspace with these simple steps."
  }
];

export default function Blogs() {
  return (
    <section id="blogs" style={sectionStyle}>
      <h2 style={titleStyle}>Latest Blogs</h2>
      <div style={gridStyle}>
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
    </section>
  );
}