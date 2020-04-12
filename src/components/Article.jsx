import React from "react";
import "./Article.css";

export default function Article(props) {
  return (
    <article className="article">
      <h3>{props.subtitle}</h3>
      <p>{props.languageUsed}</p>
      <p>{props.teachingMaterial}</p>
      <p>{props.times}</p>
    </article>
  );
}
