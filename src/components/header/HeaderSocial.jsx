import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BiLogoLinkedinSquare />
      </a>

      <a href="https://github.com" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>

      <a href="https://dribble.com" target="_blank" rel="noreferrer">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
