import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/team.css";

export default function Team() {

  const pageRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".team-title", {
        y: 80,
        opacity: 0,
        duration: 1
      });

      gsap.from(".team-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2
      });

      gsap.from(".team-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.3
      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  const images = [
    "/assets/image-9.png",
    "/assets/image-2.png",
    "/assets/image-3.png",
    "/assets/image-4.png",
    "/assets/image-5.png",
    "/assets/image-6.png",
      "/assets/image-1.png",
        "/assets/image-7.png",
    
    
  ];

  return (
    <div ref={pageRef} className="team-container">

      <h1 className="team-title">Our Team</h1>

      <p className="team-subtitle">
        ELVA is built by a group of passionate engineers and problem solvers.
        Today our team includes more than 25 individuals who bring together
        energy, intelligence and integrity to build meaningful technology.
        We believe great teams build great systems, and our people are the
        core strength behind everything we create.
      </p>

      <div className="team-grid">

        {images.map((img, index) => (
          <div className="team-image" key={index}>
            <img src={img} alt="ELVA Team" />
          </div>
        ))}

      </div>

    </div>
  );
}