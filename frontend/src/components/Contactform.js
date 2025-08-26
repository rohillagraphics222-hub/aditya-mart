import React, { useState } from "react";

// Ensure Poppins font is loaded
const poppins =
  "https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap";
if (!document.querySelector(`link[href="${poppins}"]`)) {
  const link = document.createElement("link");
  link.href = poppins;
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

const wrapperStyle = {
  background: "linear-gradient(135deg, #e0ecff 0%, #f9fafc 100%)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(58,123,213,0.17)",
  padding: "40px 30px",
  maxWidth: "440px",
  margin: "60px auto 70px auto",
  fontFamily: "'Poppins', sans-serif",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const headingStyle = {
  textAlign: "center",
  fontSize: "2.1rem",
  fontWeight: "700",
  color: "#2363c9",
  letterSpacing: "1px",
  marginBottom: "14px",
};

const descStyle = {
  fontSize: "1.03rem",
  color: "#5271ff",
  textAlign: "center",
  marginBottom: "23px",
};

const formStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "26px"
};

const labelStyle = {
  fontWeight: "500",
  marginBottom: "6px",
  color: "#2445a6",
  fontSize: "1.03rem",
  display: "block"
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1px solid #cfd8e6",
  fontSize: "1.05rem",
  background: "#f6f8fe",
  outline: "none",
  transition: "border 0.2s",
  marginTop: "2px"
};

const inputFocusStyle = {
  border: "1.6px solid #3a7bd5",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "90px",
  resize: "vertical",
};

const btnStyle = {
  background: "linear-gradient(90deg, #3a7bd5 0%, #3a6073 100%)",
  color: "#fff",
  border: "none",
  borderRadius: "25px",
  padding: "14px 0",
  fontWeight: "600",
  fontSize: "1.13rem",
  cursor: "pointer",
  boxShadow: "0 2px 14px rgba(58,123,213,0.15)",
  marginTop: "8px",
  letterSpacing: "1px",
  transition: "background 0.2s, box-shadow 0.2s"
};

const successStyle = {
  color: "#2bb673",
  marginTop: "18px",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.04rem",
  padding: "10px",
  background: "#eafff3",
  borderRadius: "8px",
  boxShadow: "0 2px 14px rgba(58,123,213,0.09)"
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    mobile: "",
    query: ""
  });
  const [focus, setFocus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFocus(e) {
    setFocus(e.target.name);
  }

  function handleBlur() {
    setFocus("");
  }

  // Updated handleSubmit to POST data to backend
  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not submit form. Please try again.");
        }
        return response.json();
      })
      .then(data => {
        setSubmitted(true);
        setForm({ name: "", address: "", mobile: "", query: "" });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(err => {
        setError("Submission failed. Please check your connection and try again.");
      });
  }

  return (
    <section id="contact">
      <div style={wrapperStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <div style={descStyle}>
          We'd love to hear from you! Fill in your details and query below.
        </div>
        <form style={formStyle} onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label style={labelStyle} htmlFor="name">Name</label>
            <input
              style={{
                ...inputStyle,
                ...(focus === "name" ? inputFocusStyle : {})
              }}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              placeholder="Your Name"
              autoComplete="off"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="address">Address</label>
            <input
              style={{
                ...inputStyle,
                ...(focus === "address" ? inputFocusStyle : {})
              }}
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              placeholder="Your Address"
              autoComplete="off"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="mobile">Mobile Number</label>
            <input
              style={{
                ...inputStyle,
                ...(focus === "mobile" ? inputFocusStyle : {})
              }}
              type="tel"
              name="mobile"
              pattern="[0-9]{10}"
              value={form.mobile}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              placeholder="10-digit Mobile Number"
              autoComplete="off"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="query">Your Query</label>
            <textarea
              style={{
                ...textareaStyle,
                ...(focus === "query" ? inputFocusStyle : {})
              }}
              name="query"
              value={form.query}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              placeholder="What can we help you with?"
              autoComplete="off"
            />
          </div>
          <button style={btnStyle} type="submit">Submit</button>
          {submitted && (
            <div style={successStyle}>
              Thank you for submitting your details!<br />
              We will get back to you soon.
            </div>
          )}
          {error && (
            <div style={{ color: "#c00", marginTop: "10px", textAlign: "center" }}>{error}</div>
          )}
        </form>
      </div>
    </section>
  );
}