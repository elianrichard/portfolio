import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

import AboutDetail from "./DetailCards/AboutDetail";
import ServicesDetail from "./DetailCards/ServicesDetail";
import ContactDetail from "./DetailCards/ContactDetail";

interface Props {
  isActive: boolean;
}

const NavCard = ({ isActive }: Props) => {
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const menuLists = ["about", "services", "contact"];

  const containerVar: Variants = {
    hidden: { right: "0px" },
    show: { right: "auto", left: "5rem" },
  };
  const titleVar: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const navbarVar: Variants = {
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };
  const navMenuVar: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (!isActive && isAnimated) setIsAnimated(false);
  }, [isActive, isAnimated]);

  return (
    <motion.div
      animate={isActive ? "show" : "hidden"}
      variants={containerVar}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="absolute top-0 flex h-screen w-[600px] flex-col bg-white"
    >
      <div className="flex h-[10%] w-full items-center justify-start border-b-[1px] border-black/10 px-10">
        <motion.p
          variants={titleVar}
          animate={isActive ? "show" : "hidden"}
          className="text-3xl font-bold"
        >
          Alpha Project
        </motion.p>
      </div>
      <div className="h-[90%] w-full px-10 py-20">
        <motion.ul
          variants={navbarVar}
          initial="hidden"
          animate={isActive ? "show" : ""}
          onAnimationComplete={() => setIsAnimated(!isAnimated)}
          className="flex justify-start gap-10 text-sm uppercase tracking-wider"
        >
          {menuLists.map((el, i) => (
            <motion.li
              variants={navMenuVar}
              transition={{ bounce: 0, duration: isActive ? 0.2 : 0.5 }}
              className={`relative cursor-pointer transition-all duration-300 ease-out hover:text-mainRed ${
                selectedMenu === i ? "text-mainRed" : ""
              }`}
              key={i}
              onClick={() => setSelectedMenu(i)}
            >
              {el}
              {selectedMenu === i && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 h-[3px] w-[70%] rounded-md bg-mainRed"
                />
              )}
            </motion.li>
          ))}
        </motion.ul>
        <div className="pt-20">
          {selectedMenu === 0 ? (
            <AboutDetail isAnimated={isAnimated} />
          ) : selectedMenu === 1 ? (
            <ServicesDetail isAnimated={isAnimated} />
          ) : (
            <ContactDetail isAnimated={isAnimated} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NavCard;
