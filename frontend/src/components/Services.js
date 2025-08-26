import React from "react";
import "../App.css";

const services = [
  "Vote Card",
  "Pan Card",
  "Insurance",
  "Visiting Card",
  "Letter Pad",
  "Bill Book",
  "Shadi Card"
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <span className="service-icon">★</span>
            <span className="service-name">{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
