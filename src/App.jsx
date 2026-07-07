import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Github from "./sections/Github";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ParticlesBackground />
      <CursorGlow />
      <ScrollProgress />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </>
  );
}

export default App;