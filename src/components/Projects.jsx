import React from "react";
import "./Main.css";
import "./Project.css";

export default function Projects() {
  return (
    <div className="Present">
      <Title />
      <Present />
    </div>
  );
}

function Title() {
  return <h2>PROJECTS</h2>;
}

function Present() {
  return (
    <div className="projectText">
      <h3>01 - portfolio</h3>
      <p>使用言語　HTML5 / CSS3</p>
      <p>
        学習教材　SAMURAIエンジニア塾 / 『HTML5/CSS3
        モダンコーディング』吉田真麻著 翔泳社 2015
      </p>
      <p>制作　2019年12月末</p>
      <video
        source
        src="../../images/portfolio-html-css.mov"
        controls="controls"
        width="700"
        height="auto"
      ></video>
      {/* ------------02-------------- */}
      <h3>02 - PROJECT</h3>
      <p>使用言語　Javascript</p>
    </div>
  );
}
