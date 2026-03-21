import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../styles/sections.css";


export default function Statement() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".statement-text", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".statement-section",
          start: "top 80%"
        }
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className="statement-section">

      <h2 className="statement-text">
        We build business management software <br />
        and solve foundational problems <br />
        through technology.
      </h2>

    </section>
  );
}