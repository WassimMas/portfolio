/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__social">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <AiFillTwitterSquare />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials.All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
