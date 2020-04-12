import React from "react";
import SectionTitle from "../SectionTitle";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <SectionTitle title="About" />
      <h3>Kana Fujieda</h3>
      <p>
        WEBデザイン/HTML/CSS/Javascript/Node.js/React/建築/精神医療/写真/旅
        <br />
        <br />
        手を動かして自分でデザインしたくなり、2019年冬〜WEBデザインを学んでいます。
        <br />
        これからは働く場所や時間に制約されない生き方を模索していきます。
      </p>
    </section>
  );
}
