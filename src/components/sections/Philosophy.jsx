import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../styles/sections.css";


export default function Philosophy() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".philosophy-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".philosophy-section",
          start: "top 80%"
        }
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className="philosophy-section">

      <h2 className="philosophy-title">
        The ELVA Philosophy
      </h2>

      <div className="philosophy-container">

        <div className="philosophy-item">
          <h3>Engineers are problem solvers</h3>
          <p>
            The bigger the problem you solve, the greater you grow as a
            professional and as a person.
          </p>
        </div>

        <div className="philosophy-item">
          <h3>Culture over code</h3>
          <p>
            At ELVA, culture is more important than code. Great people
            create great systems.
          </p>
        </div>

        <div className="philosophy-item">
          <h3>People over process</h3>
          <p>
            Trust and collaboration enable teams to build meaningful
            technology.
          </p>
        </div>

        <div className="philosophy-item">
          <h3>Trust over tools</h3>
          <p>
            Tools change, technologies evolve, but trust between people
            builds long lasting organizations.
          </p>
        </div>

      </div>

    </section>
  );
}