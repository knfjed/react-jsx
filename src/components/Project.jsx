import React from "react";
import "./Project.css";

export default function Project({
  subtitle,
  languageUsed,
  teachingMaterial,
  times,
  children,
}) {
  return (
    <>
      <div className="project">
        <h3>{subtitle}</h3>
        <p>{languageUsed}</p>
        <p>{teachingMaterial}</p>
        <p>{times}</p>
      </div>
      {children ? children : null}
    </>
  );
}
