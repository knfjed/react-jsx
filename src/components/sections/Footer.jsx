import React from "react";
import "./Footer.css";

export default function Footer() {
  const now = new Date();

  return (
    <footer className="footer">
      <p>{`©︎ ${now.getFullYear()} Kana Fujieda.`}</p>
    </footer>
  );
}
