import React from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import TopImage from "./sections/TopImage";

export default function App() {
  return (
    <>
      <Header />
      <TopImage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
