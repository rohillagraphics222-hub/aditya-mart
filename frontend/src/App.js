import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import ContactForm from "./components/Contactform";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
  <Hero />
  <Services />
  <Products />
      <Blogs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;