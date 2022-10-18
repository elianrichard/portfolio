import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  isAnimated: boolean;
}

const ServicesDetail = ({ isAnimated }: Props) => {
  const containerVar: Variants = {
    show: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };
  const childrenVar: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };
  const childrenTransition = { bounce: 0, duration: isAnimated ? 0.2 : 0.5 };

  const skillLists = [
    "Branding & Logo",
    "Craft CMS",
    "Illustration",
    "Web Development",
    "Interface Design",
    "Wordpress",
    "Project Management",
    "Asset Animation",
    "Art Direction",
    "Hand Lettering",
  ];

  const experienceLists = [
    ["Facebook", "https://google.com"],
    ["Instagram", "https://google.com"],
    ["Figma", "https://google.com"],
    ["LinkedIn", "https://google.com"],
    ["Twitter", "https://google.com"],
    ["TikTok", "https://google.com"],
    ["Google", "https://google.com"],
    ["Grab", "https://google.com"],
  ];

  return (
    <motion.div
      initial="hidden"
      animate={isAnimated ? "show" : ""}
      className="display flex flex-col gap-10 text-sm text-paleBlack"
    >
      <div className="flex flex-col gap-3">
        <motion.p
          variants={childrenVar}
          transition={childrenTransition}
          className="font-medium uppercase tracking-widest"
        >
          My Expertise
        </motion.p>
        <motion.ul variants={containerVar} className="grid grid-cols-2 gap-y-1">
          {skillLists.map((el, i) => (
            <motion.li
              variants={childrenVar}
              transition={childrenTransition}
              key={i}
            >
              {el}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="flex flex-col gap-3">
        <motion.p
          variants={childrenVar}
          transition={childrenTransition}
          className="font-medium uppercase tracking-widest"
        >
          Experience & Clients
        </motion.p>
        <motion.ul variants={containerVar} className="grid grid-cols-2 gap-y-1">
          {experienceLists.map((el, i) => (
            <motion.li
              key={i}
              variants={childrenVar}
              transition={childrenTransition}
              className="transition-all duration-300 ease-out hover:text-mainRed"
            >
              <a href={el[1]} target="_blank" rel="noreferrer">
                {el[0]}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ServicesDetail;
