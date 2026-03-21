import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/about.css";

export default function About() {

  const pageRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".about-hero", {
        y: 80,
        opacity: 0,
        duration: 1
      });

      gsap.from(".about-story", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2
      });

      gsap.from(".about-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1
      });

      gsap.from(".about-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  return (
    <div ref={pageRef} className="about-container">

      {/* Hero */}
      <div className="about-hero">
        <h1 className="section-title">About ELVA</h1>
        <p className="section-subtitle">
          ELVA is a technology-driven company focused on building business
          systems and solving real-world problems through engineering.
        </p>
      </div>

      {/* Story */}
      <div className="about-story">

        <div className="about-text">

          <h2>Why ELVA Exists</h2>

          <p>
            ELVA was not started just to build software or generate revenue.
            It was started to bring together people who enjoy solving
            meaningful problems using technology.
          </p>

          <p>
            We believe engineering can solve complex real-world challenges.
            Our focus is on building systems that bring structure,
            efficiency and transparency to businesses and industries.
          </p>
          <p>
At ELVA, we believe that great engineering is not just about writing
code. It is about understanding real problems, designing strong
systems, and building solutions that can scale and evolve.
</p>

        </div>

        <div className="about-image">
          <img src="/assets/image-7.png" alt="ELVA team" />
        </div>

      </div>

      {/* Values */}
      <div className="about-details">

        <div className="about-item">
          <h3>Our Mission</h3>
          <p>
            Build scalable technology platforms that help businesses
            operate efficiently and grow sustainably.
          </p>
        </div>

        <div className="about-item">
          <h3>Our Vision</h3>
          <p>
            Create an organization that continuously develops meaningful
            solutions to real-world problems through technology.
          </p>
        </div>

        <div className="about-item">
          <h3>Our Values</h3>
          <p>
            High energy, high intelligence and high integrity drive
            everything we build at ELVA.
          </p>
        </div>

      </div>

    </div>
  );
}