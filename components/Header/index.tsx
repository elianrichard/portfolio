import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { IconContext } from "react-icons";

import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
  FaHome,
} from "react-icons/fa";

import NavCard from "./NavCard";
import Link from "next/link";

const Index = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const socialLists = [
    { link: "/", icon: <FaHome /> },
    { link: "https://facebook.com", icon: <FaFacebookF /> },
    { link: "https://youtube.com", icon: <FaYoutube /> },
    { link: "https://twitter.com", icon: <FaTwitter /> },
    { link: "https://linkedin.com", icon: <FaLinkedinIn /> },
    { link: "https://behance.com", icon: <FaBehance /> },
    { link: "https://instagram.com", icon: <FaInstagram /> },
  ];

  const menuIconTopVar: Variants = {
    active: {
      top: "50%",
      rotate: 45,
      y: "-50%",
    },
    inactive: {
      top: "0%",
      rotate: 0,
      y: "-50%",
    },
  };
  const menuIconBotVar: Variants = {
    active: {
      bottom: "50%",
      rotate: -45,
      y: "50%",
    },
    inactive: {
      bottom: "0%",
      rotate: 0,
      y: "50%",
    },
  };

  return (
    <nav
      className={`before:transition-bg fixed z-50 h-screen w-fit before:absolute before:h-screen before:w-screen ${
        navOpen ? "before:bg-black/50" : "before:pointer-events-none"
      } selection:bg-transparent selection:text-mainRed before:duration-500 before:ease-in-out`}
    >
      <NavCard isActive={navOpen} />
      <div className="relative flex h-screen w-20 flex-col border-r-[1px] border-black/10 bg-white">
        <div className="flex h-[10%] w-20 items-center justify-center bg-black">
          <motion.div
            transition={{ type: "tween", duration: 0.4 }}
            whileHover={{ height: "26px" }}
            className={`relative h-[20px] w-[30px] cursor-pointer`}
            onClick={() => setNavOpen(!navOpen)}
          >
            <motion.div
              variants={menuIconTopVar}
              animate={navOpen ? "active" : "inactive"}
              className="absolute top-0 h-1 w-full -translate-y-[50%] rounded-md bg-white"
            />
            <motion.div
              animate={navOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute top-1/2 h-1 w-full -translate-y-[50%] rounded-md bg-white"
            />
            <motion.div
              variants={menuIconBotVar}
              animate={navOpen ? "active" : "inactive"}
              className="absolute bottom-0 h-1 w-full rounded-md bg-white"
            />
          </motion.div>
        </div>
        <div className="flex h-[90%] w-full flex-col items-center justify-center gap-10">
          <IconContext.Provider
            value={{
              className:
                "text-black h-6 w-6 hover:text-mainRed transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer",
            }}
          >
            {socialLists.map((el, i) => {
              return (
                <div key={i}>
                  <Link href={el.link}>
                    <a>{el.icon}</a>
                  </Link>
                </div>
              );
            })}
          </IconContext.Provider>
        </div>
      </div>
      <div className="absolute h-screen w-screen" />
    </nav>
  );
};

export default Index;
