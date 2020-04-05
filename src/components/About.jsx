import React from "react";
import "./Main.css";

export default function About() {
  return (
    <div className="text">
      <AboutMe />
      <Text />
    </div>
  );
}

function AboutMe() {
  return <h2>ABOUT</h2>;
}

function Text() {
  return (
    <div>
      <h3>Kana Fujieda</h3>
      <p>
        WEBデザイン/HTML/CSS/建築/精神医療/ソーシャルワーク/写真/旅<br></br>
        <br></br>
        手を動かして自分でデザインしたくなり、2019年冬〜WEBデザインを学んでいます。
        <br></br>
        これからは働く場所や時間に制約されない生き方を模索していきます。
      </p>
    </div>
  );
}
