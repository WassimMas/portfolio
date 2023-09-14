/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>wassim.mastour@outlook.com</h5>
            <a href="mailto:wassim.mastour@outlook.com" target="_blanck">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>messenger</h4>
            <h5>Wassim Mastour</h5>
            <a href="https://m.me/wassim.mastour.5/" target="_blanck">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+21653767946</h5>
            <a
              href="https://api.whatsapp.com/send?phone+21653767946"
              target="_blanck"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* end of options  */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email " required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
