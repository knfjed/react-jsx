import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <SiteIcon />
      <nav>
        <Options />
      </nav>
    </header>
  );
}

function SiteIcon() {
  return <h1>PORTFOLIO</h1>;
}

function Options() {
  return (
    <ul>
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#projects">PROJECTS</a>
      </li>
      <li>
        <a href="#skill">SKILL</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  );
}
