import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

import AboutDetail from "./DetailCards/AboutDetail";
import ServicesDetail from "./DetailCards/ServicesDetail";
import ContactDetail from "./DetailCards/ContactDetail";

interface Props {
  isActive: boolean;
}

const NavCard = ({ isActive }: Props) => {
  const containerVar: Variants = {
    hidden: { right: "100%" },
    show: { right: "auto", left: "5rem" },
  };

  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const menuLists = ["about", "services", "contact"];

  return (
    <motion.div
      animate={isActive ? "show" : "hidden"}
      variants={containerVar}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="absolute top-0 flex h-screen w-[33.3vw] flex-col bg-white"
    >
      <div className="flex h-[10%] w-full items-center justify-start border-b-[1px] border-black/10 px-10">
        <p className="text-3xl font-bold">Alpha Project</p>
      </div>
      <div className="h-[90%] w-full px-10 py-20">
        <ul className="flex justify-start gap-10 text-sm uppercase tracking-wider">
          {menuLists.map((el, i) => (
            <li
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
            </li>
          ))}
        </ul>
        <div className="pt-20">
          {selectedMenu === 0 ? (
            <AboutDetail />
          ) : selectedMenu === 1 ? (
            <ServicesDetail />
          ) : (
            <ContactDetail />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NavCard;
