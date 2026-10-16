import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/projects.css";

const filters = [
  { id: "all", label: "All" },
  { id: "b2b", label: "ELVA B2B" },
  { id: "problem-solving", label: "ELVA Problem Solving" }
];

const categoryLabel = {
  b2b: "ELVA B2B",
  "problem-solving": "ELVA Problem Solving"
};

const projects = [
  {
    title: "ELVA PMS",
    category: "b2b",
    description: "Residential / Commercial Real Estate Plot Management Software",
    about:
      "ELVA PMS helps property developers manage residential and commercial plots efficiently. It enables tracking of plots, managing sales records, maintaining ownership data, and generating reports for better decision making.",
    image: "/assets/p1.png"
  },
  {
    title: "ELVA EMS",
    category: "b2b",
    description: "Electrical Contract Management Software",
    about:
      "ELVA EMS streamlines electrical project execution by managing contracts, scheduling tasks, allocating resources, and monitoring compliance with safety standards for electrical contractors.",
    image: "/assets/p2.png"
  },
  {
    title: "ELVA Grocery Platform",
    category: "b2b",
    description: "End-to-End Grocery Delivery Management System",
    about:
      "A scalable grocery delivery platform that connects stores, delivery partners, and customers. It supports order management, inventory tracking, and optimized delivery logistics.",
    image: "/assets/p3.png"
  },
  {
    title: "ELVA Investa",
    category: "b2b",
    description: "Customer & Investment Management Platform",
    about:
      "A white-label platform that helps financial businesses manage customers, investments, interest, payouts, TDS, referrals, and records from a centralized admin portal. Customers get a simple mobile experience to track their accounts, returns, documents, and requests — without any financial transactions being processed through the platform.",
    image: "/assets/elva-investa.png"
  },
  {
    title: "ELVA Support",
    category: "b2b",
    description: "Customer Issue & Support Management",
    about:
      "A customer issue and support management platform built for software companies to streamline how they receive, track, and resolve customer issues. It centralizes support requests, issue tracking, communication, and resolution workflows in one platform. Designed to improve support efficiency, response times, and customer experience as businesses scale.",
    image: "/assets/elva-support.png"
  },
  {
    title: "ELVA Notify",
    category: "b2b",
    description: "Centralized Email Communication Platform",
    about:
      "A centralized email communication platform that helps businesses reliably deliver transactional and customer notifications. From OTPs and account updates to invoices and alerts, it keeps critical communications flowing with automated provider failover. Built to support multiple applications and growing business needs, it simplifies email management at scale.",
    image: "/assets/notify.png"
  },
  {
    title: "AASTHI System",
    category: "problem-solving",
    description: "Real Estate Intelligence Platform",
    about:
      "Aasthi is a real estate intelligence platform that helps buyers and investors make safe and profitable property decisions. It performs automated due diligence by checking title risks, legal records, and property history. It also provides investment intelligence like fair price benchmarks, rental yield, ROI projections, and locality insights. Aasthi’s mission is simple: “Know before you buy.”",
    image: "/assets/p4.png"
  },
  {
    title: "Direkt Platform",
    category: "problem-solving",
    description: "AI-Powered Autonomous Trading",
    about:
      "Direkt is an AI-powered autonomous trading platform that analyzes real-time market data to identify trading opportunities. It uses intelligent decision engines to determine entry, position sizing, and exit strategies for futures trading. The system continuously monitors markets and dynamically adjusts trades using AI-driven risk management. Direkt enables fully automated algorithmic trading, allowing strategies to be tested safely through paper trading before deploying with real capital.",
    image: "/assets/p5.png"
  },
  {
    title: "Beejam Initiative",
    category: "problem-solving",
    description: "Technology Driven Farming Infrastructure",
    about:
      "Beejam applies engineering principles to agriculture by introducing structured farming systems, productivity tracking, and technology-enabled agricultural operations.",
    image: "/assets/p6.png"
  }
];

export default function Projects() {

  const pageRef = useRef(null);
  const [filter, setFilter] = useState("all");

  const visible = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".section-title", {
        y: 80,
        opacity: 0,
        duration: 1
      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".project-card", {
        y: 36,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });

    }, pageRef);

    return () => ctx.revert();

  }, [filter]);

  return (
    <div ref={pageRef} className="projects-container">

      <h1 className="section-title">Our Projects</h1>

      <div className="project-filters" role="tablist" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            className={`project-filter${filter === item.id ? " active" : ""}`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">

        {visible.map((project) => (

          <article className="project-card" key={project.title}>

            {project.image ? (
              <div className="project-media">
                <img src={project.image} alt={project.title} />
              </div>
            ) : (
              <div className="project-media project-media-fallback" aria-hidden="true">
                <span>{project.title}</span>
              </div>
            )}

            <div className="project-body">

              <span className="project-tag">{categoryLabel[project.category]}</span>

              <h2>{project.title}</h2>

              <h3>{project.description}</h3>

              <p>{project.about}</p>

            </div>

          </article>

        ))}

      </div>

    </div>
  );
}
