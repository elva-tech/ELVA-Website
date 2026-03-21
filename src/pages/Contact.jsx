import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/contact.css";
import "../index.css";

export default function Contact() {

  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".section-title", {
        y: 80,
        opacity: 0,
        duration: 1
      });

      gsap.from(".team-member", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.2
      });

      gsap.from(".contact-form", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.4
      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/manjkdrz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Try again!");
      });
  };

  return (
    <div ref={pageRef} className="contact-container">

      <h1 className="section-title">Contact ELVA</h1>

      <p style={{ textAlign: "center", marginBottom: "40px", opacity: 0.8 }}>
        Interested in working with ELVA or learning more about our solutions?
        Reach out to our team.
      </p>

    <div className="team-contacts">

  <div className="team-member">

    <img
      src="/assets/c1.jpeg"
      alt="Sai"
      style={{
        width: "220px",
        height: "220px",
        objectFit: "contain",
        display: "block",
        margin: "0 auto 16px auto",
        borderRadius: "22px"
      }}
    />

    <h2>Sai</h2>
    <p>+91-96111 49957</p>

  </div>


  <div className="team-member">

    <img
      src="/assets/c2.jpeg"
      alt="Gopinath"
      style={{
        width: "220px",
        height: "220px",
        objectFit: "contain",
        display: "block",
        margin: "0 auto 16px auto",
        borderRadius: "22px"
      }}
    />

    <h2>Gopinath</h2>
    <p>+91-99723 04620</p>

  </div>

</div>

      <h2 className="form-title">Send an Enquiry</h2>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />

        <button type="submit">Send Message</button>

      </form>

      {submitted && (
        <p className="thankyou-msg">
          Thank you. Your message has been sent successfully.
        </p>
      )}

    </div>
  );
}