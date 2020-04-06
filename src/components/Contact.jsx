import React from "react";
import "./Contact.css";
import "./Main.css";

export default function Contact() {
  return (
    <div className="Present">
      <Title />
      <Form />
    </div>
  );
}

function Title() {
  return <h2>CONTACT</h2>;
}

function Form() {
  return (
    <form method="post">
      <label for="engage">
        <input id="engage" type="text" name="yourName" />
        <input type="submit" value="submit" />
      </label>
    </form>
  );
}
