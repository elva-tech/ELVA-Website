import React from "react";
import "../styles/services.css";

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="section-title">Our Services</h1>
      <p className="section-subtitle">
        At Elva Tech, we offer a wide range of services to help your business thrive in the digital era.
      </p>

      <div className="services-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>Building responsive, scalable, and modern websites that represent your brand perfectly.</p>
        </div>
        <div className="service-item">
          <h2>Mobile Apps</h2>
          <p>Creating intuitive mobile applications for iOS and Android platforms.</p>
        </div>
        <div className="service-item">
          <h2>UI/UX Design</h2>
          <p>Designing engaging and user-friendly interfaces for web and mobile applications.</p>
        </div>
        <div className="service-item">
          <h2>Software Solutions</h2>
          <p>Custom software development tailored to your business needs.</p>
        </div>
        
      </div>
    </div>
  );
}
