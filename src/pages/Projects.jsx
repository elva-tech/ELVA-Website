import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/projects.css";

export default function Projects() {

  const pageRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".section-title", {
        y: 80,
        opacity: 0,
        duration: 1
      });

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.3
      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  const projects = [
    {
      title: "ELVA PMS",
      description: "Residential / Commercial Real Estate Plot Management Software",
      about:
        "ELVA PMS helps property developers manage residential and commercial plots efficiently. It enables tracking of plots, managing sales records, maintaining ownership data, and generating reports for better decision making.",
      image: "/assets/p1.png",
    },
    {
      title: "ELVA EMS",
      description: "Electrical Contract Management Software",
      about:
        "ELVA EMS streamlines electrical project execution by managing contracts, scheduling tasks, allocating resources, and monitoring compliance with safety standards for electrical contractors.",
      image: "/assets/p2.png",
    },
    {
      title: "ELVA Grocery Platform",
      description: "End-to-End Grocery Delivery Management System",
      about:
        "A scalable grocery delivery platform that connects stores, delivery partners, and customers. It supports order management, inventory tracking, and optimized delivery logistics.",
      image: "/assets/p3.png",
    },
    {
      title: "AASTHI System",
      description: "real estate intelligence  Platform",
      about:
        "Aasthi is a real estate intelligence platform that helps buyers and investors make safe and profitable property decisions.It performs automated due diligence by checking title risks, legal records, and property history.It also provides investment intelligence like fair price benchmarks, rental yield, ROI projections, and locality insights.Aasthi’s mission is simple: “Know before you buy",
      image: "/assets/p4.png",
    },
    {
      title: "Direkt Platform",
      description: "Direct ",
      about:
        "Direkt is an AI-powered autonomous trading platform that analyzes real-time market data to identify trading opportunities.It uses intelligent decision engines to determine entry, position sizing, and exit strategies for futures trading.The system continuously monitors markets and dynamically adjusts trades using AI-driven risk management.Direkt enables fully automated algorithmic trading, allowing strategies to be tested safely through paper trading before deploying with real capital.",
      image: "/assets/p5.png",
    },
    {
      title: "Beejam Initiative",
      description: "Technology Driven Farming Infrastructure",
      about:
        "Beejam applies engineering principles to agriculture by introducing structured farming systems, productivity tracking, and technology-enabled agricultural operations.",
      image: "/assets/p6.png",
    }
  ];

  return (
    <div ref={pageRef} className="projects-container">

      <h1 className="section-title">Our Projects</h1>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.image} alt={project.title} />

            <h2>{project.title}</h2>

            <h4>{project.description}</h4>

            <p>{project.about}</p>

          </div>

        ))}

      </div>

    </div>
  );
}