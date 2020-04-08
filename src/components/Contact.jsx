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
    <form className="contactForm" method="post">
      <table>
        <tbody>
          <tr>
            <td for="name">NAME</td>
            <td>
              <input id="name" type="text" name="name" placeholder="山田太郎" />
            </td>
          </tr>
          <tr>
            <td for="mail">MAIL</td>
            <td>
              <input
                id="mail"
                type="mail"
                name="mail"
                placeholder="exsample@gmail.com"
              />
            </td>
          </tr>
          <tr>
            <td for="tel">TEL</td>
            <td>
              <input
                id="tel"
                type="number"
                name="tel"
                placeholder="000-0000-0000"
              ></input>
            </td>
          </tr>
          <tr>
            <td for="text">TEXT</td>
            <td>
              <input
                id="text"
                type="text"
                name="text"
                placeholder="自由にコメントをご記入ください"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <input type="submit" className="btn-gradient-radius" />
    </form>
  );
}
