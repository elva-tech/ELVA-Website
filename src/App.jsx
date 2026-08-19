import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import PricingPlans from "./pages/PricingPlans";
import Contact from "./pages/Contact";

import Philosophy from "./components/sections/Philosophy";
import Pillars from "./components/sections/Pillars";
import Initiatives from "./components/sections/Initiatives";

import Footer from "./components/Footer";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/pillars" element={<Pillars />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Sales-facing page: intentionally unlinked, reachable only via direct URL */}
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* background shapes (existing) */}
      <span className="shape circle"></span>
      <span className="shape square"></span>
      <span className="shape triangle"></span>
      <span className="shape hexagon"></span>
      <span className="shape square medium"></span>
      <span className="shape triangle small"></span>
      <span className="shape hexagon medium"></span>
    </>
  );
}

export default App;