import Hero from "../components/sections/Hero";
import Statement from "../components/sections/Statement";
import Pillars from "../components/sections/Pillars";
// import Products from "../components/sections/Products";
import Initiatives from "../components/sections/Initiatives";
import Philosophy from "../components/sections/Philosophy";
// import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Pillars />
      {/* <Products /> */}
      <Initiatives />
      <Philosophy />
      {/* <CTA /> */}
    </>
  );
}