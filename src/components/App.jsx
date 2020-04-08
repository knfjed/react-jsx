import React from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import TopImage from "./TopImage";

export default function App() {
  return (
    <div className="container">
      <Header />
      <TopImage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
