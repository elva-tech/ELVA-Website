import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../App.css";

export default function Hero() {

  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.from(".hero-video", {
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      })

      .from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")

      .from(".hero-subtitle", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7")

      .from(".hero-cta", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.8");

    }, heroRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={heroRef} className="hero-section">

      <video
        className="hero-video"
        src="/assets/elva.mp4"
        autoPlay
        muted
        // loop
        playsInline
      />

      <div className="hero-overlay">

        <h1 className="hero-title">
          Engineering Solutions <br /> For Real-World Problems
        </h1>

        {/* <p className="hero-subtitle">
          We build scalable business systems and solve foundational
          problems through technology.
        </p> */}

        {/* <button className="hero-cta">
          Explore ELVA
        </button> */}

      </div>

    </section>
  );
}