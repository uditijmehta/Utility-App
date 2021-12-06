import React from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";

import { IconContext } from "react-icons";

export const Footer = () => {
  return (
    <MainFooter>
      <p>
        Copyright &copy;2021 Cubicle. Designed by <span>Team 8</span>
      </p>

      <Icons>
        <IconContext.Provider value={{ color: "#fff", size: 30 }}>
          <a href="https://www.instagram.com/rakesh.baddi/?hl=en">
            <AiIcons.AiOutlineInstagram />
          </a>
          <SiIcons.SiGmail />
          <a href="https://github.com/rakeshbaddi">
            <AiIcons.AiFillGithub />
          </a>
        </IconContext.Provider>
      </Icons>
    </MainFooter>
  );
};

export default Footer;
