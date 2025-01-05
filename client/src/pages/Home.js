import React from "react";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import About from "../components/About";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Projects />
    </>
  );
}

export default Home;
