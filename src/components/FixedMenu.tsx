import React from "react";

import { FaUsers, FaServer, FaSearch } from "react-icons/fa";

const FixedMenu = () => {
  return (
    <div className="md:block hidden fixed w-[70px] z-50 hover:w-[185px] bg-[#077ef5cc] left-0 top-[50%] landing-fixed-menu-wrapper">
      <div className="w-[185px] landing-fixed-menu">
        <a href="#about">
          <FaUsers /> <span>About</span>
        </a>
        <a href="#services">
          <FaServer /> <span>Services</span>
        </a>
        <a href="#faq">
          <FaSearch /> <span>FAQ</span>
        </a>
      </div>
    </div>
  );
};

export default FixedMenu;
