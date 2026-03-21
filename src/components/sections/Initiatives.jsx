import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/sections.css";

gsap.registerPlugin(ScrollTrigger);

export default function Initiatives() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".initiatives-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".initiatives-section",
          start: "top 80%"
        }
      });

      gsap.from(".initiatives-intro", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".initiatives-section",
          start: "top 75%"
        }
      });

      gsap.from(".initiative-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".initiatives-container",
          start: "top 80%"
        }
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className="initiatives-section">

      <h2 className="initiatives-title">
        Foundational Initiatives
      </h2>

      <p className="initiatives-intro">
        At ELVA, we look beyond software and focus on solving real-world
        problems using engineering systems. These initiatives represent
        our effort to build meaningful infrastructure across industries.
      </p>

      <div className="initiatives-container">

        <div className="initiative-card">
          <h3>Aasthi</h3>
          <p>
            A structured platform designed to bring transparency and
            efficiency to asset and property management systems.
          </p>
        </div>

        <div className="initiative-card">
          <h3>Direkt</h3>
          <p>
            A technology platform designed to improve direct connections
            between stakeholders and simplify communication infrastructure.
          </p>
        </div>

        <div className="initiative-card">
          <h3>Beejam</h3>
          <p>
            A technology-driven agricultural initiative where engineering
            systems are applied to improve farming productivity and
            sustainability.
          </p>
        </div>

      </div>

    </section>
  );
}