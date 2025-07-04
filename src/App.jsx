import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="App">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
