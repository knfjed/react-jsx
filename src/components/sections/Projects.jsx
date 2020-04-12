import React from "react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Article from "../Article";

import "./Projects.css";

export default function Projects() {
  return (
    <Section className="projects-section">
      <SectionTitle title="Projects" />
      <Article
        className="article"
        subtitle="01 - portfolio"
        languageUsed="使用言語 : HTML5 / CSS3"
        teachingMaterial="学習教材 : SAMURAIエンジニア塾 / 『HTML5/CSS3 モダンコーディング』吉田真麻著 翔泳社 2015"
        times="制作 : 2019年12月末"
      ></Article>
      <video
        source
        src="../../images/portfolio-html-css.mov"
        controls="controls"
        width="700"
        height="auto"
      />

      <Article
        subtitle="02 - portfolio"
        languageUsed="使用言語 : HTML5 / CSS3"
        teachingMaterial="学習教材 : SAMURAIエンジニア塾 / 『HTML5/CSS3 モダンコーディング』吉田真麻著 翔泳社 2015"
        times="制作 : 2019年12月末"
      />
      <Article
        subtitle="03 - portfolio"
        languageUsed="使用言語 : HTML5 / CSS3"
        teachingMaterial="学習教材 : SAMURAIエンジニア塾 / 『HTML5/CSS3 モダンコーディング』吉田真麻著 翔泳社 2015"
        times="制作 : 2019年12月末"
      />
      <Article
        subtitle="04 - portfolio"
        languageUsed="使用言語 : HTML5 / CSS3"
        teachingMaterial="学習教材 : SAMURAIエンジニア塾 / 『HTML5/CSS3 モダンコーディング』吉田真麻著 翔泳社 2015"
        times="制作 : 2019年12月末"
      />
    </Section>
  );
}
