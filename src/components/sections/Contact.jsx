import React from "react";
import { GithubIcon, EmailIcon, TwitterIcon, InstagramIcon } from "../Icons";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

import "./Contact.css";

export default function Contact() {
  return (
    <Section>
      <SectionTitle title="Contact" />
      <a href="http://github.com/knfjed" className="icon-style">
        <GithubIcon />
      </a>
      <a href="mailto:exsample@gmail.com" className="icon-style">
        <EmailIcon />
      </a>
      <a href="http://twitter.com" className="icon-style">
        <TwitterIcon />
      </a>
      <a href="http://instagram.com" className="icon-style">
        <InstagramIcon />
      </a>
    </Section>
  );
}
