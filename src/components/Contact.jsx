import React from "react";
import "../styles/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Contact() {
  return (
    <div className="contact-parent">
      <div className="contact-heading">
        <h3>My Contact</h3>
      </div>
      <div data-aos="fade-left" className="contact-text">
        <p>My gmail address: (basumatary18@gmail.com)</p>
        <p>
          My github:{" "}
          <a href="https://github.com/Deborshi1998">github.com/Deborshi1998</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
