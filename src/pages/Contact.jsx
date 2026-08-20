import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { getEnquiryLabel } from "../data/pricingConfig";
import { trackEvent } from "../utils/analytics";
import "../styles/contact.css";
import "../index.css";

export default function Contact() {

  const pageRef = useRef(null);

  const [searchParams] = useSearchParams();

  /* Set when the visitor arrives from a pricing CTA; unknown slugs resolve to null. */
  const planLabel = getEnquiryLabel(searchParams.get("plan"));
  const source = searchParams.get("from") || (planLabel ? "pricing-plans" : null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    const payload = {
      ...formData,
      ...(planLabel && { plan: planLabel }),
      ...(source && { source }),
      _subject: planLabel
        ? `ELVA enquiry — ${planLabel}`
        : "ELVA website enquiry"
    };

    try {
      const response = await fetch("https://formspree.io/f/manjkdrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      /* Formspree answers 4xx for validation, spam and quota rejections. */
      if (!response.ok) {
        throw new Error(`Formspree responded with ${response.status}`);
      }

      trackEvent("contact_form_submit", {
        plan: planLabel ?? "none",
        source: source ?? "direct"
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError(
        "We couldn't send your message. Please try again, or call us on the numbers above."
      );
    } finally {
      setSending(false);
    }
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

      {submitted ? (

        <div className="enquiry-success" role="status">

          <span className="enquiry-success-icon" aria-hidden="true"></span>

          <h3>Enquiry sent</h3>

          <p>
            Thank you. Our team has received your message and will get back
            to you shortly.
          </p>

          {planLabel && (
            <p className="enquiry-success-plan">
              Regarding <strong>{planLabel}</strong>
            </p>
          )}

          <button
            type="button"
            className="enquiry-success-again"
            onClick={() => setSubmitted(false)}
          >
            Send another enquiry
          </button>

        </div>

      ) : (

        <>

          {planLabel && (
            <div className="enquiry-context">
              <span className="enquiry-context-label">Enquiry about</span>
              <strong className="enquiry-context-plan">{planLabel}</strong>
              <Link to="/pricing-plans" className="enquiry-context-clear">
                Change
              </Link>
            </div>
          )}

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

            <button type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send Message"}
            </button>

            {error && (
              <p className="form-error" role="alert">{error}</p>
            )}

          </form>

        </>

      )}

    </div>
  );
}