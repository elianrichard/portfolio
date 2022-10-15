import React from "react";

import { BiMenu } from "react-icons/bi";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const index = () => {
  return (
    <div className="fixed flex h-screen w-20 flex-col bg-white">
      <div className="flex aspect-square w-full items-center justify-center bg-black">
        <IconContext.Provider value={{ className: "text-white h-10 w-10" }}>
          <BiMenu />
        </IconContext.Provider>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <IconContext.Provider value={{ className: "text-black h-6 w-6" }}>
          <FaFacebookF />
          <FaYoutube />
          <FaTwitter />
          <FaLinkedinIn />
          <FaBehance />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default index;
