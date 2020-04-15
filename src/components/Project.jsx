import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className="project">
      <h3>{props.subtitle}</h3>
      <p>{props.languageUsed}</p>
      <p>{props.teachingMaterial}</p>
      <p>{props.times}</p>
    </div>
  );
}
