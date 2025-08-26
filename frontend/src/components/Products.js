import React from "react";
import ProductCard from "./ProductCard";

const sectionStyle = {
  padding: "48px 20px",
  background: "#f4f8fd"
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
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "32px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const products = [
  {
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    price: "₹2999",
    description: "Enjoy music wirelessly with crystal clear sound and noise cancellation."
  },
  {
    name: "Smart Watch",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=500&q=80",
    price: "₹4999",
    description: "Track your fitness and stay connected on the go."
  },
  {
    name: "Eco Water Bottle",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    price: "₹399",
    description: "Stay hydrated with this BPA-free, reusable water bottle."
  },
  {
    name: "Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=500&q=80",
    price: "₹1499",
    description: "Portable speaker with deep bass and long battery life."
  }
];

export default function Products() {
  return (
    <section id="products" style={sectionStyle}>
      <h2 style={titleStyle}>Our Products</h2>
      <div style={gridStyle}>
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}