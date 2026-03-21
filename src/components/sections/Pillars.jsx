import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../styles/sections.css";

export default function Pillars() {

  const sectionRef = useRef(null);

  useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.from(".pillars-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".pillars-section",
        start: "top 80%",
      }
    });

    gsap.from(".pillars-intro", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".pillars-section",
        start: "top 75%",
      }
    });

    gsap.from(".pillar-card", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pillars-container",
        start: "top 80%",
      }
    });

  }, sectionRef);

  return () => ctx.revert();

}, []);

  return (
    <section ref={sectionRef} className="pillars-section">

      <h2 className="pillars-title">Two Pillars of ELVA</h2>

      <p className="pillars-intro">
        Everything we build at ELVA comes from two core ideas. 
        We create powerful business management systems and we apply 
        engineering thinking to solve foundational real-world problems.
      </p>

      <div className="pillars-container">

        <div className="pillar-card">

          <h3>Business Management Software</h3>

          <p>
            We build scalable digital systems that help organizations
            manage operations, automate processes and make data-driven
            decisions. Our platforms are designed for reliability,
            performance and long-term scalability.
          </p>

          <div className="pillar-examples">
            <span>ELVA PMS</span>
            <span>ELVA EMS</span>
            <span>Grocery Platform</span>
            <span>ICTPI System</span>
          </div>

        </div>

        <div className="pillar-card">

          <h3>Foundational Problem Solving</h3>

          <p>
            Beyond software products, we identify complex real-world
            problems and solve them using engineering systems.
            Technology becomes the infrastructure that brings
            transparency, efficiency and scale to these domains.
          </p>

          <div className="pillar-examples">
            <span>Aasthi</span>
            <span>Direkt</span>
            <span>Beejam</span>
            <span>Future Initiatives</span>
          </div>

        </div>

      </div>

    </section>
  );
}