import React from "react";
import About from "./About";
import "./App.css";
import Header from "./Header";
import Projects from "./Projects.jsx";
import TopImage from "./TopImage";

export default function App() {
  return (
    <div className="container">
      <Header />
      <TopImage />
      <About />
      <Projects />
    </div>
  );
}
