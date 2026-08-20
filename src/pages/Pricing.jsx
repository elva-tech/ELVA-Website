import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../styles/pricing.css";

export default function Pricing() {

  const pageRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".pricing-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8
      });

      gsap.from(".pricing-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.1
      });

      gsap.from(".pricing-intro", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3
      });

      gsap.from(".pricing-divider", {
        scaleX: 0,
        opacity: 0,
        duration: 1,
        delay: 0.5
      });

      gsap.from(".pricing-cta", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.6
      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  return (
    <div ref={pageRef} className="pricing-container">

      {/* Hero */}
      <div className="pricing-hero">

        <span className="pricing-eyebrow">Pricing</span>

        <h1 className="pricing-title">
          Built around your needs.
          <br />
          Priced around your goals.
        </h1>

        <p className="pricing-intro">
          Whether you're looking for business software, custom technology,
          or a solution to a complex real-world problem, we work with you
          to understand the requirement and build the right solution.
        </p>

      </div>

      <span className="pricing-divider"></span>

      {/* Quote */}
      <div className="pricing-cta">

        <h2>No one-size-fits-all pricing.</h2>

        <p>
          Tell us what you're trying to build,
          and we'll provide a detailed proposal.
        </p>

        <Link to="/contact?from=pricing" className="pricing-quote-btn">
          Get a Quote
          <span className="pricing-arrow" aria-hidden="true">&rarr;</span>
        </Link>

      </div>

    </div>
  );
}
